import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import DietPreview from "../../components/DietPreview";
import TrainingProgramPreview from "../../components/TrainingProgramPreview";

const RegimePreviewScreen = (props) => {
  const workout = [
    {
      plan: "Push/Pull/Legs",
      workouts:  [
         {
          difficulty: 1,
          day: "Monday",
          excercises:  [
             {
              name: "Bench press",
              reps: 8,
              sets: 4,
              tempo: "slow",
            },
             {
              name: "Dumbell shoulder press",
              reps: 10,
              sets: 3,
              tempo: "slow",
            },
             {
              name: "Incline dumbell press",
              reps: 10,
              sets: 3,
              tempo: "slow",
            },
             {
              name: "Lateral raises",
              reps: 10,
              sets: 3,
              tempo: "slow",
            },
             {
              name: "Cable crossover",
              reps: 10,
              sets: 3,
              tempo: "slow",
            },
             {
              name: "Dips",
              reps: 10,
              sets: 3,
              tempo: "normal",
            },
             {
              name: "Triceps Pushdown",
              reps: 10,
              sets: 3,
              tempo: "normal",
            },
          ],
        },
         {
          difficulty: 1,
          day:"Tuesday",
          excercises:  [
             {
              name: "Pull ups",
              reps: 8,
              sets: 4,
              tempo: "slow",
            },
             {
              name: "Seated cable rows",
              reps: 10,
              sets: 3,
              tempo: "slow",
            },
             {
              name: "Pulldown",
              reps: 10,
              sets: 3,
              tempo: "slow",
            },
             {
              name: "Face pulls",
              reps: 10,
              sets: 3,
              tempo: "slow",
            },
             {
              name: "Ez bar curls",
              reps: 10,
              sets: 3,
              tempo: "slow",
            },
             {
              name: "Hammer curls",
              reps: 10,
              sets: 3,
              tempo: "normal",
            },
          ],
        },
         {
          difficulty: 1,
          day:"Wednesday",
          excercises: [
             {
              name: "Squats",
              reps: 8,
              sets: 4,
              tempo: "slow",
            },
             {
              name: "Romanian deadlift",
              reps: 10,
              sets: 3,
              tempo: "slow",
            },
             {
              name: "Leg press",
              reps: 10,
              sets: 3,
              tempo: "slow",
            },
             {
              name: "Leg extensions",
              reps: 10,
              sets: 3,
              tempo: "slow",
            },
             {
              name: "Calf raises",
              reps: 10,
              sets: 3,
              tempo: "slow",
            },
          ],
        },
         {
          difficulty: 1,
          day:"Thursday",
          excercises:  [
             {
              name: "Bench press",
              reps: 8,
              sets: 4,
              tempo: "slow",
            },
             {
              name: "Dumbell shoulder press",
              reps: 10,
              sets: 3,
              tempo: "slow",
            },
             {
              name: "Incline dumbell press",
              reps: 10,
              sets: 3,
              tempo: "slow",
            },
             {
              name: "Lateral raises",
              reps: 10,
              sets: 3,
              tempo: "slow",
            },
             {
              name: "Cable crossover",
              reps: 10,
              sets: 3,
              tempo: "slow",
            },
             {
              name: "Dips",
              reps: 10,
              sets: 3,
              tempo: "normal",
            },
             {
              name: "Triceps Pushdown",
              reps: 10,
              sets: 3,
              tempo: "normal",
            },
          ],
        },
         {
          difficulty: 1,
          day:"Thursday",
          excercises:  [
             {
              name: "Pull ups",
              reps: 8,
              sets: 4,
              tempo: "slow",
            },
             {
              name: "Seated cable rows",
              reps: 10,
              sets: 3,
              tempo: "slow",
            },
             {
              name: "Pulldown",
              reps: 10,
              sets: 3,
              tempo: "slow",
            },
             {
              name: "Face pulls",
              reps: 10,
              sets: 3,
              tempo: "slow",
            },
             {
              name: "Ez bar curls",
              reps: 10,
              sets: 3,
              tempo: "slow",
            },
             {
              name: "Hammer curls",
              reps: 10,
              sets: 3,
              tempo: "normal",
            },
          ],
        },
         {
          difficulty: 1,
          day:"Friday",
          excercises:  [
             {
              name: "Squats",
              reps: 8,
              sets: 4,
              tempo: "slow",
            },
             {
              name: "Romanian deadlift",
              reps: 10,
              sets: 3,
              tempo: "slow",
            },
             {
              name: "Leg press",
              reps: 10,
              sets: 3,
              tempo: "slow",
            },
             {
              name: "Leg extensions",
              reps: 10,
              sets: 3,
              tempo: "slow",
            },
             {
              name: "Calf raises",
              reps: 10,
              sets: 3,
              tempo: "slow",
            },
          ],
        },
      ],
    }
    
  ]

  const diet = {
  calories: 2600,
  carbs: 240,
  fat: 50,
  protein: 50,
  goal: "Build muscle"
  }

  useEffect(() => {
    console.log(workout);
    console.log(diet);
  }, [])
  return (
    <View style={styles.container}>
      <TrainingProgramPreview
        workout={workout}
      />
      <DietPreview
        diet={diet}
      />
      <Button title={"Accept training program and regime"} onPress={() => { props.navigation.navigate("Feed") }}>
      </Button>
    </View>
  )
};

const styles = StyleSheet.create({
  indicator: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    position: 'absolute',
  },
});
export default RegimePreviewScreen;