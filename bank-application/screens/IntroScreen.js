import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import {Images} from "../assets/Images";
import Colors from '../constants/Colors';

class IntroScreen extends Component {
    render() {
        return (
            <View style={styles.outerContainer}>
                <View style={styles.container}>
                    <View>
                        <Image style={styles.brandLogo} source={Images.r_logo}/>
                        <Text style={styles.text}>Save the planet by saving paper.</Text>
                    </View>
    
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            this.props.navigation.navigate('SignUp');
                        }}>
                            <Image style={styles.small} source={Images.small_R}/>
                            <Text style={styles.buttonText}>Sign up with 1receipt</Text>
                        </TouchableOpacity>
    
                        <TouchableOpacity style={styles.button} onPress={() => {
                            this.props.navigation.navigate('SignIn');
                        }}>
                            <Image style={styles.small} source={Images.small_R}/>
                            <Text style={styles.buttonText}>Sign in with 1receipt</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSSO} onPress={() => {
                            //this.props.navigation.navigate('SignIn');
                        }}>
                            <Image style={styles.smallSSO} source={Images.small_G}/>
                            <Text style={styles.buttonGText}>Continue with Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSSO} onPress={() => {
                            //this.props.navigation.navigate('SignUp');
                        }}>
                            <Image style={styles.smallSSO} source={Images.small_A}/>
                            <Text style={styles.buttonSSOText}>Continue with Apple</Text>
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 25
    },
    buttonContainer: {
        marginBottom: 85
    },
    brandLogo: {
        width: 139,
        height: 172,
        marginTop: 46,
        marginLeft: 80,
        marginRight: 80
    },
    text: {
        fontFamily: 'josefsans-italic',
        fontSize: 20,
        marginTop: 29,
    },
    button:{
        width:300,
        height:58,
        backgroundColor: Colors.primaryColor,
        borderRadius: 22,
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 29,
        flexDirection: 'row',
        shadowColor: Colors.shadow,
        shadowOpacity: 0.1
    },
    buttonSSO:{
        width:300,
        height:58,
        backgroundColor: 'white',
        borderRadius: 22,
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 29,
        flexDirection: 'row',
        shadowColor: Colors.shadow,
        shadowOpacity: 0.1,
        shadowRadius: 10
    },
    small: {
        width: 20,
        height: 24.17,
        marginRight: 25
    },
    smallSSO: {
        width: 30,
        height: 30,
        marginRight: 20
    },
    buttonText:{
        fontFamily: 'josefsans-regular',
        color:'white',
        fontSize: 20,
    },
    buttonSSOText:{
        fontFamily: 'josefsans-regular',
        fontSize: 20,
    },
    buttonGText:{
        fontFamily: 'josefsans-regular',
        fontSize: 20,
        color: Colors.googleColor,
    }
});

export default IntroScreen;