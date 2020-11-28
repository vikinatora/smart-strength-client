import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { SCREEN_HEIGHT } from "../global/globalVariables";

export default TrainingRegimePreview = (props) => {

  return (
    <View style={styles.container}>
      <Text>Training program preview</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: SCREEN_HEIGHT / 12,
    width: "85%",
  },
  daysContainer: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: "5%",
  },
  day: {
    width: "20%"
  },
  dayText: {
    textAlign: "center"
  },
  workoutsContainer: {
    flex: 2,
    flexDirection: "row",
    marginTop: 50
  }
});