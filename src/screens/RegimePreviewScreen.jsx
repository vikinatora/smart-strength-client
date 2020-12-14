import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Button } from "react-native";
import DietPreview from "../../components/DietPreview";
import TrainingProgramPreview from "../../components/TrainingProgramPreview";
import { SCREEN_HEIGHT, STATUSBAR_HEIGHT } from "../../global/globalVariables";

const RegimePreviewScreen = (props) => {

  // const { workout, diet } = props.route.params;
  const workout =
  {
    "name": "Push/Pull/Legs with slow reps",
    "workouts": [
      {
        "difficulty": 1,
        "day": "Monday",
        "excercises": [
          {
            "name": "Bench press",
            "reps": 8,
            "sets": 4,
            "tempo": "slow",
          },
          {
            "name": "Dumbell shoulder press",
            "reps": 10,
            "sets": 3,
            "tempo": "slow",
          },
          {
            "name": "Incline dumbell press",
            "reps": 10,
            "sets": 3,
            "tempo": "slow",
          },
          {
            "name": "Lateral raises",
            "reps": 10,
            "sets": 3,
            "tempo": "slow",
          },
          {
            "name": "Cable crossover",
            "reps": 10,
            "sets": 3,
            "tempo": "slow",
          },
          {
            "name": "Dips",
            "reps": 10,
            "sets": 3,
            "tempo": "normal",
          },
          {
            "name": "Triceps Pushdown",
            "reps": 10,
            "sets": 3,
            "tempo": "normal",
          },
        ],
      },
      {
        "difficulty": 1,
        "day": "Tuesday",
        "excercises": [
          {
            "name": "Pull ups",
            "reps": 8,
            "sets": 4,
            "tempo": "slow",
          },
          {
            "name": "Seated cable rows",
            "reps": 10,
            "sets": 3,
            "tempo": "slow",
          },
          {
            "name": "Pulldown",
            "reps": 10,
            "sets": 3,
            "tempo": "slow",
          },
          {
            "name": "Face pulls",
            "reps": 10,
            "sets": 3,
            "tempo": "slow",
          },
          {
            "name": "Ez bar curls",
            "reps": 10,
            "sets": 3,
            "tempo": "slow",
          },
          {
            "name": "Hammer curls",
            "reps": 10,
            "sets": 3,
            "tempo": "normal",
          },
        ],
      },
      {
        "difficulty": 1,
        "day": "Wednesday",
        "excercises": [
          {
            "name": "Squats",
            "reps": 8,
            "sets": 4,
            "tempo": "slow",
          },
          {
            "name": "Romanian deadlift",
            "reps": 10,
            "sets": 3,
            "tempo": "slow",
          },
          {
            "name": "Leg press",
            "reps": 10,
            "sets": 3,
            "tempo": "slow",
          },
          {
            "name": "Leg extensions",
            "reps": 10,
            "sets": 3,
            "tempo": "slow",
          },
          {
            "name": "Calf raises",
            "reps": 10,
            "sets": 3,
            "tempo": "slow",
          },
        ],
      },
      {
        "difficulty": 1,
        "day": "Friday",
        "excercises": [
          {
            "name": "Bench press",
            "reps": 8,
            "sets": 4,
            "tempo": "slow",
          },
          {
            "name": "Dumbell shoulder press",
            "reps": 10,
            "sets": 3,
            "tempo": "slow",
          },
          {
            "name": "Incline dumbell press",
            "reps": 10,
            "sets": 3,
            "tempo": "slow",
          },
          {
            "name": "Lateral raises",
            "reps": 10,
            "sets": 3,
            "tempo": "slow",
          },
          {
            "name": "Cable crossover",
            "reps": 10,
            "sets": 3,
            "tempo": "slow",
          },
          {
            "name": "Dips",
            "reps": 10,
            "sets": 3,
            "tempo": "normal",
          },
          {
            "name": "Triceps Pushdown",
            "reps": 10,
            "sets": 3,
            "tempo": "normal",
          },
        ],
      },
      {
        "difficulty": 1,
        "day": "Saturday",
        "excercises": [
          {
            "name": "Pull ups",
            "reps": 8,
            "sets": 4,
            "tempo": "slow",
          },
          {
            "name": "Seated cable rows",
            "reps": 10,
            "sets": 3,
            "tempo": "slow",
          },
          {
            "name": "Pulldown",
            "reps": 10,
            "sets": 3,
            "tempo": "slow",
          },
          {
            "name": "Face pulls",
            "reps": 10,
            "sets": 3,
            "tempo": "slow",
          },
          {
            "name": "Ez bar curls",
            "reps": 10,
            "sets": 3,
            "tempo": "slow",
          },
          {
            "name": "Hammer curls",
            "reps": 10,
            "sets": 3,
            "tempo": "normal",
          },
        ],
      },
      {
        "difficulty": 1,
        "day": "Sunday",
        "excercises": [
          {
            "name": "Squats",
            "reps": 8,
            "sets": 4,
            "tempo": "slow",
          },
          {
            "name": "Romanian deadlift",
            "reps": 10,
            "sets": 3,
            "tempo": "slow",
          },
          {
            "name": "Leg press",
            "reps": 10,
            "sets": 3,
            "tempo": "slow",
          },
          {
            "name": "Leg extensions",
            "reps": 10,
            "sets": 3,
            "tempo": "slow",
          },
          {
            "name": "Calf raises",
            "reps": 10,
            "sets": 3,
            "tempo": "slow",
          },
        ],
      },
    ],
  }

  const diet =
  {
    "calories": 2600,
    "carbs": 240,
    "fats": 50,
    "goal": "Build muscle",
    "protein": 50,
  }
  useEffect(() => {
    console.log(workout);
    console.log(diet);
  }, [])
  return (
    <View style={styles.container}>
      <Text style={{ width: "95%", alignSelf: "center", color: "white", fontSize: 26, textAlign: "center", fontWeight: "bold", marginTop: 40, marginBottom: 20 }}>Here's what we've come up with for you, based on your answers...</Text>
      <TrainingProgramPreview
        workout={workout}
      />
      <DietPreview
        diet={diet}
        navigation={props.navigation}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: STATUSBAR_HEIGHT,
    width: "100%",
    height: "100%",
    backgroundColor: "#75A8FF"
  }
});
export default RegimePreviewScreen;