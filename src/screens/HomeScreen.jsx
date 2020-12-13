import React, { Component, useEffect, useState } from "react";
import { Text, StyleSheet, AsyncStorage, TouchableOpacity, View, Image } from "react-native";
import { connect } from "react-redux";
import * as actions from '../../actions';
import { useFonts, OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import { AppLoading } from 'expo';
import usersService from "../../services/usersService";
import * as Facebook from "expo-facebook";
import { STATUSBAR_HEIGHT } from "../../global/globalVariables";
import logo from "../../assets/logo.png";
import { ActivityIndicator } from "react-native";
import { Entypo } from '@expo/vector-icons';

const logoRelativePath = "../../assets/logo.png";
const HomeScreen = (props) => {
  const [signingIn, setSigningIn] = useState(false);
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular
  });

  useEffect(() => {
    const getToken = async () => {
      // await AsyncStorage.removeItem('fb_token');
      // await AsyncStorage.removeItem('userId');
      let token = await AsyncStorage.getItem('fb_token');
      let userId = await AsyncStorage.getItem('userId');
      if (token && userId) {
        setSigningIn(true);
        let name = await getUserNameAsync();
        props.navigation.navigate("Questionnaire", { name })
        //TODO: Check for training program ID and navigate to questionnaire if doesn't exist
        setSigningIn(false);
        // props.navigation.navigate("Feed", { name });
      }
    }
    getToken();
  }, []);


  const login = async () => {
    setSigningIn(true);

    let token = await AsyncStorage.getItem('fb_token');
    if (!token) {
      token = await doFacebookLogin();
    }
    console.log(`token: ${token}`);
    let name = await getUserNameAsync();
    console.log(`name: ${name}`);
    const userId = await usersService.createUser({ fullName: name, fbToken: token });
    if (userId) {
      console.log("Created user");
      await AsyncStorage.setItem("userId", userId)
      console.log(`name: ${name}`);
      setSigningIn(false);
      props.navigation.navigate("Questionnaire", { name })
    } else {
      console.log("Couldn't create user");
      setSigningIn(false);

    }
    setSigningIn(false);


  }
  const doFacebookLogin = async () => {
    Facebook.initializeAsync('1003185676861468')
    let { type, token } = await Facebook.logInWithReadPermissionsAsync('1003185676861468', {
      permissons: ['public_profile']
    });

    if (type === 'cancel') {
      return null;
    }

    await AsyncStorage.setItem('fb_token', token);
    return token
  };

  const getUserNameAsync = async () => {
    let token = await AsyncStorage.getItem('fb_token');
    const { name } = await requestAsync('me', token);
    return name;
  }

  const requestAsync = async (path, token) => {
    let resolvedToken = token;
    const response = await fetch(
      `https://graph.facebook.com/${path}?access_token=${encodeURIComponent(resolvedToken)}`
    );
    const body = await response.json();
    return body;
  }

  return (
    !fontsLoaded
      ? <AppLoading />
      : <View style={{ marginTop: STATUSBAR_HEIGHT, backgroundColor: "#75A8FF", height: "100%" }}>
        <Text style={styles.text}>Welcome!</Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={styles.logo}
            source={logo}
          />
        </View>
        <View>
        </View>
        <TouchableOpacity activeOpacity={0.5} onPress={() => login()} style={styles.button}>
          {
            signingIn
              ?
              <View>
                <Text style={styles.buttonText}>Signing in </Text>
                <ActivityIndicator size="large" />
              </View>
              : <View style={{ flexDirection: "row" }}>
                <Entypo name="facebook" size={27} color="black" style={{ marginHorizontal: 20 }} />
                <Text style={styles.buttonText}>Sign in with Facebook</Text>
              </View>

          }
        </TouchableOpacity>

      </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
    textAlign: "center",
    fontWeight: "400",
    marginTop: 100,
    height: 100,
    fontFamily: "OpenSans_400Regular",
    color: "white",
    fontWeight: "bold"
  },
  button: {
    height: 70,
    fontSize: 30,
    backgroundColor: "#3ca9e2",
    justifyContent: 'center',
    alignSelf: "center",
    borderRadius: 10,
    width: "70%"
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "#0F45A1",

  },
  logo: {
    width: '90%',
    height: undefined,
    aspectRatio: 1.5,
    borderRadius: 15,
    marginBottom: 50
  },
});

export default connect(null, actions)(HomeScreen);
