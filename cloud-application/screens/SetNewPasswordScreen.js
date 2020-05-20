import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
    TextInput
} from 'react-native';

import {Images} from "../assets/Images";
import {Ionicons} from '@expo/vector-icons';
import Colors from '../constants/Colors';

class SetNewPasswordScreen extends Component {
    render() {
        return (
            <View style={styles.outerContainer}>
                <View style={styles.container}>
                    <View style={styles.backButton}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('ForgotPassword');
                        }}>
                            <Ionicons name='ios-arrow-back' size={25} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>    
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.brandLogo} source={Images.r_logo}/>
                    </View>
    
                    <View style={styles.buttonContainer}>
                        <TextInput placeholder={'Password'} style={styles.text_input} secureTextEntry={true}/>
                        <TextInput placeholder={'Confirm Password'} style={styles.text_input} secureTextEntry={true}/>
                        
                        <TouchableOpacity style={styles.button} onPress={() => {
                            this.props.navigation.navigate('SignIn');                          
                        }}>
                            <Text style={styles.buttonText}>Set the new password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: Colors.primaryColor,
        flex: 1
    },
    container: {
        backgroundColor: 'white',
        marginTop: 41,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    backButton: {
        marginTop: 18,
        marginLeft: 30
    },
    innerContainer: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    brandLogo: {
        width: 139,
        height: 172,
        marginLeft: 80,
        marginRight: 80
    },
    text_input: {
        width:300,
        height:65,
        borderRadius: 22,
        marginBottom: 29,
        shadowColor: Colors.shadow,
        backgroundColor: 'white',
        shadowOpacity: 0.4,
        fontFamily: 'josefsans-regular',
        fontSize: 18,
        padding: 20
    },
    button:{
        width:300,
        height:58,
        backgroundColor: Colors.primaryColor,
        borderRadius: 22,
        justifyContent:'center',
        alignItems:'center',
        marginTop: 93,
        marginBottom: 108,
        flexDirection: 'row',
        shadowColor: Colors.shadow,
        shadowOpacity: 0.1
    },
    buttonText:{
        fontFamily: 'josefsans-regular',
        color:'white',
        fontSize: 20,
    }
});

export default SetNewPasswordScreen;