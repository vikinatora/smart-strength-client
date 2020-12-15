import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { View, StyleSheet, Text } from "react-native";
import { SCREEN_HEIGHT } from "../global/globalVariables";

export default TrainingRegimePreview = (props) => {

  return (
    <ScrollView
      style={{ height: "55%" }}
      scrollEnabled={true}
      persistentScrollbar={true}
    >
      <View style={styles.container}>
        <Text style={{ fontSize: 26, color: "#0F45A1", textAlign: "center", marginVertical: 10 }}>Training Routine</Text>
        {
          props.workout.workouts.map((workout, index) => (
            <View key={index} style={{ marginBottom: 15 }}>
              <View style={{ flexDirection: "row", justifyContent: "center", }}>
                <View style={{ width: "98%", backgroundColor: "white", borderRadius: 5, borderColor: "#0F45A1", borderWidth: 2, marginBottom: 15 }}>
                  <Text style={{ fontSize: 22, color: "#0F45A1", textAlign: "center" }}>{workout.day}</Text>
                </View>
              </View>
              {workout.excercises.map((excercise, index) => (
                <View key={index} style={{ marginLeft: 20 }}>
                  <Text style={{ fontSize: 18, color: "#0F45A1", fontWeight: "bold" }}>{'\u2022'} {excercise.name}, {excercise.sets}X{excercise.reps}, {excercise.tempo}</Text>
                </View>
              ))}
            </View>
          ))
        }
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "100%",
    backgroundColor: "#98C1FF",
    borderRadius: 10,
    width: "95%",
    alignSelf: "center",
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