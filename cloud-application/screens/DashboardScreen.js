import { API, graphqlOperation, Analytics, Auth } from "aws-amplify";
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

const listTasks = `
  query {
    listTask {
      items {
        id
        name
        description
      }
    }
 }
`;
const createTask = `
  mutation($name: String!, $description: String) {
    createTask(input: {
      name: $name
      description: $description
  }) {
    id
    name
    description
  }
}`;

class DashboardScreen extends Component {
  state = {
    name: "",
    description: "",
    tasks: [],
    user: {},
  };

  async componentDidMount() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      this.setState({ user: user });

      const restData = await API.get("lambdaAPI", "/tasks");
      console.log("Lambda Function: ", restData);

      const graphqldata = await API.graphql(graphqlOperation(listTasks));
      console.log("ToDo Data (Graphql):", graphqldata);
      this.setState({ tasks: graphqldata.data.listTask.items });

      
    } catch (err) {
      console.log("Component Did Mount Error: ", err);
    }
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };

  AddTask = async () => {
    const task = this.state;
    if (task.name === "" || task.description === "") return;
    const tasks = [...this.state.tasks, task];
    this.setState({ tasks, name: "", description: "" });
    try {
      Analytics.record({
        name: "Task Added",
        attributes: { name: this.state.user.username },
      });
      await API.graphql(graphqlOperation(createTask, task));
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
            <Text style={styles.headerFont}>
              Hi {this.state.user.username},
            </Text>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <View>
            <TextInput
              placeholder={"Task"}
              style={[styles.text_input, { marginTop: 37 }]}
              onChangeText={(val) => this.onChangeText("name", val)}
              value={this.state.name}
            />
            <TextInput
              placeholder={"Description"}
              style={styles.text_input}
              onChangeText={(val) => this.onChangeText("description", val)}
              value={this.state.description}
            />

            <TouchableOpacity style={styles.button} onPress={this.AddTask}>
              <Ionicons
                name="md-add"
                size={35}
                style={styles.addIcon}
                color={Colors.grey}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.listView}>
            {this.state.tasks.map((task, index) => (
              <View key={index} style={styles.taskView}>
                <Text style={styles.title}>{task.name}</Text>
                <Text style={styles.title}>{task.description}</Text>
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
    backgroundColor: Colors.secondaryColor,
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
    color: "white",
  },
  font: {
    marginTop: 10,
    fontFamily: "josefsans-regular",
    fontSize: 13.3,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: Colors.secondaryColor,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text_input: {
    width: 350,
    height: 58,
    borderRadius: 22,
    marginBottom: 10,
    shadowColor: Colors.shadow,
    backgroundColor: "white",
    shadowOpacity: 0.1,
    fontFamily: "josefsans-regular",
    fontSize: 18,
    padding: 20,
  },
  addIcon: {
    marginLeft: 22,
    marginRight: 13,
  },
  button: {
    width: 350,
    height: 58,
    backgroundColor: Colors.primaryColor,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.1,
  },
  listView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: 22,
    width: 350,
    backgroundColor: "white",
    marginBottom: 10,
  },
  taskView: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primaryColor,
    paddingVertical: 10,
  },
});

export default DashboardScreen;
