import { API, graphqlOperation, Analytics, Auth } from "aws-amplify";
import React, { Component, useState } from "react";
import { Ionicons, Octicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

const ListTasks = `
    query {
      listTasks {
        items {
          id 
          task 
          completed
        }
      }
    }
    `;
const AddTask = `
    mutation ($task: String! $completed: Boolean!) {
      createTask(input: {
        task: $task
        completed: $completed
      }) {
        id 
        task 
        completed
      }
    }
    `;

// class DashboardScreen extends Component {
//   constructor() {
//     super();
//     this.state = {
//       task: "",
//       completed: false,
//       listOfTasks: [],
//     };
//   }
//   async componentDidMount() {
//     try {
//       const listOfTasks = await API.graphql(graphqlOperation(ListTasks));
//       console.log("listOfTasks: ", listOfTasks);
//       this.setState({ listOfTasks: listOfTasks.data.listTasks.items });
//     } catch (err) {
//       console.log("error: ", err);
//     }
//   }
//   addTask = async () => {
//     if (this.state.task === "" || this.state.completed === false) return;
//     const listOfTask = {
//       task: this.state.task,
//       completed: this.state.completed,
//     };
//     try {
//       const listOfTasks = [...this.state.listOfTasks, listOfTask];
//       this.setState({ listOfTasks, task: "", completed: false });
//       console.log("listOfTasks: ", listOfTasks);
//       await API.graphql(graphqlOperation(AddToDo, listOfTask));
//       console.log("success.. tasks added");
//     } catch (err) {
//       console.log("error: ", err);
//     }
//   };

class DashboardScreen extends Component {
  state = {
    task: "",
    completed: "false",
    tasks: [],
    user: {},
  };

  async componentDidMount() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      //console.log(user);
      this.setState({ user: user });
      const restData = await API.get("lambdaAPI", "/tasks");
      // this.setState({ tasks: restData });
      //console.log("Lambda Function: ", restData);
      const graphqldata = await API.graphql(graphqlOperation(ListTasks));
      console.log("graphqldata:", graphqldata);
      this.setState({ tasks: graphqldata.data.listTasks.items });
    } catch (err) {
      console.log("Component Did Mount Error: ", err);
    }
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };

  AddTask = async () => {
    const task = this.state;
    if (task.task === "" || task.completed === "false") return;
    const tasks = [...this.state.tasks, task];
    this.setState({ tasks, task: "", completed: "false" });
    try {
      Analytics.record({
        name: "Task Added",
        attributes: { name: this.state.user.username },
      });
      await API.graphql(graphqlOperation(AddTask, task));
      console.log("Task created successfully");
    } catch (err) {
      console.log("Error creating task...", err);
    }
  };

  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerFont}>Hi {this.state.user.username},</Text>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.screen}>
            <View style={styles.screenContent}>
              <View style={styles.searchBar}>
                <View style={styles.search}>
                  <Octicons
                    name="tasklist"
                    size={35}
                    style={styles.searchIcon}
                    color={Colors.grey}
                  />
                  <View style={styles.textInputAlign}>
                    <TextInput
                      placeholder={"Enter your task here..."}
                      style={styles.text_input}
                      onChangeText={(task) => {
                        this._changeTask(task);
                        this.setState({ completed: false });
                      }}
                    />
                  </View>
                </View>
                <TouchableOpacity onPress={this.AddTask}>
                  <Ionicons
                    name="md-add"
                    size={35}
                    style={styles.filterIcon}
                    color={Colors.grey}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.listView}>
            {/* <Text>{this.state.tasks.task}</Text> */}
            {this.state.tasks.map((task, index) => (
              <View key={index} style={styles.taskView}>
                <Text style={styles.title}>{task.task}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  }

  _changeTask(task) {
    this.setState({
      task: task,
    });
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: Colors.primaryColor,
    flex: 1,
  },
  container: {
    backgroundColor: "white",
    marginTop: 35,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  header: {
    marginTop: 35,
    marginLeft: 41,
  },
  headerFont: {
    fontFamily: "josefsans-regular",
    fontSize: 19,
  },
  font: {
    marginTop: 10,
    fontFamily: "josefsans-regular",
    fontSize: 13.3,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  screen: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "white",
    height: 48,
    marginBottom: 82,
    marginLeft: 29,
    marginRight: 29,
  },
  screenContent: {
    flex: 1,
    height: 100,
  },
  searchBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  search: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 9,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 10,
    padding: 2,
  },
  textInputAlign: {
    flex: 1,
    alignItems: "flex-start",
  },
  text_input: {
    width: 230,
    height: 40,
    fontFamily: "josefsans-regular",
    fontSize: 18,
  },
  searchIcon: {
    marginLeft: 22,
    marginRight: 13,
  },
  filterIcon: {
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  listView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 330,
    paddingLeft: 20,
    borderWidth: 1,
  },
  taskView: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primaryColor,
    paddingVertical: 10,
  },
});

export default DashboardScreen;
