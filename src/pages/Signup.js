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
import SignUpLogo from '../components/SignUpLogo';

export default class Signup extends Component<{}> {
  

  static navigationOptions =  {
    title: 'Back',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#455a64'
    },
  };

  render() {
      return (
        <View style={styles.container}>
           <Logo/>
           <Form type="Signup"/>
           <View style={styles.signupTextCont}>
                <Text style={styles.signupText}>Already have an account?</Text>
                <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}>Sign in</Text></TouchableOpacity>
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