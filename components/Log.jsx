import React, {useEffect, useState} from "react";
import {StyleSheet, View, Text, Dimensions, TouchableOpacity, Platform, NativeModules } from "react-native";

import {SCREEN_HEIGHT, STATUSBAR_HEIGHT} from "../global/globalVariables";

const Log = () => {
  return (
    <View style={styles.container}>
      <Text>Showing Log</Text>
    </View>
  );

}
const styles = StyleSheet.create({
  container:{
    marginTop: SCREEN_HEIGHT / 12
  }
});

export default Log;