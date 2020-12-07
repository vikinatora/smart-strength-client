import React, { Component, useEffect } from "react";
import { Text, StyleSheet, AsyncStorage, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import * as actions from '../../actions';
import { useFonts, OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import { AppLoading } from 'expo';

const HomeScreen = (props) => {
  useEffect(() => {
    const getToken = async () => {
      let token = await AsyncStorage.getItem('fb_token');
      if (token) {
        let name = await getUserNameAsync();
        // props.navigation.navigate("Questionnaire", { name })
        props.navigation.navigate("Feed", { name })

      }
    }
    getToken();
  }, []);

  let [fontsLoaded] = useFonts({
    OpenSans_400Regular
  });

  return (
    !fontsLoaded
      ? <AppLoading />
      : <View>
        <Text style={styles.text}>Welcome to Smart-Strength!</Text>
        {
          AsyncStorage.getItem('fb_token') != null
            ? <TouchableOpacity activeOpacity={0.5} onPress={() => login(props)} style={styles.button}>
              <Text style={styles.buttonText}>Start your fitness journey now!</Text>
            </TouchableOpacity>

            : null
        }

      </View>
  );
}
const login = async (props) => {
  await props.facebookLogin();
  let token = await AsyncStorage.getItem('fb_token');
  console.log(token)
  let name = await getUserNameAsync();
  console.log(`name: ${name}`);
  props.navigation.navigate("Questionnaire", { name })

}

const getUserNameAsync = async () => {
  let token = await AsyncStorage.getItem('fb_token');
  const { name } = await requestAsync('me', token);
  return name;
}

const requestAsync = async (path, token) => {
  let resolvedToken = token;
  if (!token) {
    const auth = await Facebook.getAuthenticationCredentialAsync();
    if (!auth) {
      throw new Error(
        'User is not authenticated. Ensure `logInWithReadPermissionsAsync` has successfully resolved before attempting to use the FBSDK Graph API.'
      );
    }
    resolvedToken = auth.token;
    AsyncStorage.setItem('fb_token', resolvedToken);
  }
  const response = await fetch(
    `https://graph.facebook.com/${path}?access_token=${encodeURIComponent(resolvedToken)}`
  );
  const body = await response.json();
  return body;
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
    backgroundColor: "#88983b",
    justifyContent: 'center',
    alignSelf: "center",
    borderRadius: 10,
    width: "70%"
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "white"
  }
});

export default connect(null, actions)(HomeScreen);
