import React, { useEffect, useState } from "react";
import {StyleSheet, View, Text, Dimensions, TouchableOpacity, Platform, NativeModules } from "react-native";
import { useFonts, OpenSans_400Regular} from '@expo-google-fonts/open-sans';
import Feed from "../../components/Feed";
import Log from "../../components/Log";
import { AppLoading } from 'expo';


import {SCREEN_HEIGHT, STATUSBAR_HEIGHT} from "../../global/globalVariables";

const QuestionnaireScreen = (props) => {
  const [showFeed, setShowFeed] = useState(true);
  const [showLog, setShowLog] = useState(false);
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular
  });

  const params = props.route.params;

  return (
    !fontsLoaded
    ? <AppLoading/>
    : <View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => {setShowFeed(true); setShowLog(false)}} style={[styles.navigationButton, styles.feedButton]}>
            <Text style={styles.buttonText}>Feed</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={() => {setShowLog(true); setShowFeed(false)}} style={[styles.navigationButton, styles.logButton]}>
            <Text style={styles.buttonText}>Log</Text>
          </TouchableOpacity>
        </View>
        {
          showFeed?
          <Feed />
          :<Log />
        }
      </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: STATUSBAR_HEIGHT,
    flex: 1,
    flexDirection: 'row',
  },
  navigationButton: {
    paddingVertical: 20,
    height: SCREEN_HEIGHT / 12,
    textAlign: "center",
    backgroundColor: "#3B5998",
  },
  feedButton: {
    width: "50%",
    borderRightColor: "black",
    borderRightWidth: 1
  },
  logButton: {
    width: "50%",
  },
  buttonText: {
    fontFamily: "OpenSans_400Regular",
    textAlign: "center",
    color: "white",
    fontSize: 20

  }
});

export default QuestionnaireScreen;
 