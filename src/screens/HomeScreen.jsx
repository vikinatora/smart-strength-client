import React, { Component, useEffect } from "react";
import { Text, StyleSheet, AsyncStorage, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import * as actions from '../../actions';
import { useFonts, OpenSans_400Regular} from '@expo-google-fonts/open-sans';
import { AppLoading } from 'expo';

const HomeScreen = (props) => {
  useEffect(() => {
    let token = AsyncStorage.getItem('fb_token');
    if (token) {
      props.navigation.navigate("Questionnaire", { name: "Viktor" })
    }
  }, []);

  let [fontsLoaded] = useFonts({
    OpenSans_400Regular
  });

  return (
    !fontsLoaded
    ? <AppLoading/>
    : <View>
      <Text style={styles.text}>Welcome to Smart-Strength!</Text>
      {
      AsyncStorage.getItem('fb_token') != null
    ?   <TouchableOpacity activeOpacity={0.5} onPress={() => login(props)} style={styles.button}>
          <Text style={styles.buttonText}>Start your fitness journey now!</Text>
        </TouchableOpacity>
  
      : null
      }
        
    </View>
  );
}
const login = (props) => {
  props.facebookLogin();
  props.navigation.navigate("Questionnaire", { name: "Viktor" })
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "400",
    marginTop: 50,
    marginBottom: 400,
    fontFamily: "OpenSans_400Regular"
  },
  button: {
    height: 70,
    fontSize: 30,
    backgroundColor: "#1E6738",
    justifyContent: 'center',
    alignSelf: "center",
    borderRadius: 10,
    width: "70%"
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
  }
});

export default connect(null, actions)(HomeScreen);
