import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native";
import { StyleSheet, View, Text, Image } from "react-native";
import qmark from "../assets/qmark.png";

export default InitialQuestionnaireScreen = (props) => {

  const showQuestionnaireScreen = () => {
    props.showThisScreen(false);
  }

  return (
    <View style={styles.marginView}>
      <Text style={styles.bigText}>Let's get started with some questions!</Text>
      <Text style={styles.normalText}>The questionnaire will help us pick the right plan for you!</Text>
      <View style={styles.imageWrapper}>
        <Image style={styles.qmark} source={qmark} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={showQuestionnaireScreen}
      >
        <Text style={{ textAlign: "center", color: "#0F45A1", fontSize: 22 }}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bigText: {
    fontSize: 28,
    color: "white",
    textAlign: "center",
    marginTop: 50
  },
  normalText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginTop: 50
  },
  marginView: {
    margin: 20
  },
  qmark: {
    width: '50%',
    height: undefined,
    aspectRatio: 1,
  },
  imageWrapper: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 10
  },
  button: {
    marginTop: 80,
    height: 50,
    backgroundColor: "#3ca9e2",
    justifyContent: 'center',
    alignSelf: "center",
    borderRadius: 10,
    width: "70%"
  }

})

