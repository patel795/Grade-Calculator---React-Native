import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Login extends Component<{}> { 
  static navigationOptions = {
    header: null
  };

  render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
           <Logo/>
           <Form type="Login"/>
           <View style={styles.signupTextCont}>
                <Text style={styles.signupText}>Don't have an account yet?</Text>                       
                <TouchableOpacity onPress={() =>navigate('signUp')}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
           </View>
      </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container : {
      backgroundColor: '#78909c',
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    signupTextCont: {
      flexGrow:1,
      alignItems:'center',
      justifyContent:'center',
      paddingVertical: 16,
      flexDirection: 'row'
    },
    signupText: {
      color: 'rgba(255,255,255,0.6)',
      fontSize: 16
    },
    signupButton: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: '500'
    }
  });