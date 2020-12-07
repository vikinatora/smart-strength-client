import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, View, Text, Picker, TextInput } from "react-native";
import { useFonts, OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import { AppLoading } from 'expo';
import { setDeep } from "../global/helperFunctions";
import { SCREEN_HEIGHT, STATUSBAR_HEIGHT } from "../global/globalVariables";
import { trainingPlan } from "../global/еxampleTrainingProgram";

const Log = (props) => {

  const [excerciseIndex, setExcerciseIndex] = useState(0);
  const [workoutState, setWorkoutState] = useState({});
  const [setNumber, setSetNumber] = useState(1);
  const [currSetWeight, setCurrSetWeight] = useState(0);
  const [weightsArray, setWeightsArray] = useState([]);
  const [reps, setReps] = useState(8);
  const [repsArray, setRepsArray] = useState([]);
  const [currExcercise, setCurrExcercise] = useState({});
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular
  });

  let repsMax = 12;

  useEffect(() => {
    // TODO: Call API for workout
    setWorkoutState(trainingPlan.workouts[0]);
    let currExcercise = trainingPlan.workouts[0].excercises[excerciseIndex];
    setCurrExcercise(currExcercise);
    const reps = trainingPlan.workouts[0].excercises[excerciseIndex].reps;
    let newSetsWeight = [];
    let newRepsWeight = [];
    for (let i = 0; i < currExcercise.sets; i++) {
      newSetsWeight.push(0);
      newRepsWeight.push(reps);
    }

    setWeightsArray(newSetsWeight);
    setRepsArray(newRepsWeight);
    setReps(reps)
    console.log(`initial reps: ${reps}`);
  }, []);

  useEffect(() => {
    console.log('changed set number');
    findWorkingSetWeight();
    findWorkingReps(setNumber);
  }, [setNumber]);

  useEffect(() => {
    console.log('changed exc index');
    setSetNumber(1);
    findWorkingSetWeight();
    findWorkingReps(1, excerciseIndex);
    if (!workoutState) {
      console.log("undefined workoutState");
      return;
    }
    if (!excerciseIndex && excerciseIndex != 0) {
      console.log("undefined excerciseIndex");
      return;
    }
    if (!workoutState.excercises) {
      console.log("undefined workoutState.excercises");
      return;
    }
    if (!workoutState.excercises[excerciseIndex]) {
      console.log("workoutState.excercises[excerciseIndex]");
      return;
    }
    if (workoutState && (excerciseIndex || excerciseIndex === 0) && workoutState.excercises && workoutState.excercises[excerciseIndex]) {
      console.log("no undefined");
      let newCurrExcercise = workoutState.excercises[excerciseIndex];
      setCurrExcercise(newCurrExcercise);
      let currSetWeightArray = newCurrExcercise.setsWeight;
      let reps = workoutState.excercises[excerciseIndex].reps;
      console.log(`new reps: ${reps}`);
      if (!currSetWeightArray || !currSetWeightArray.length) {
        let newSetsWeight = [];
        let newRepsWeight = [];
        for (let i = 0; i < newCurrExcercise.sets; i++) {
          newSetsWeight.push(0);
          newRepsWeight.push(reps);
        }

        setWeightsArray(newSetsWeight);
        setRepsArray(newRepsWeight);
        setReps(reps);
      } else {
        setWeightsArray(currSetWeightArray);
      }
    }

  }, [excerciseIndex])

  const editDefaultReps = (newReps) => {
    const newWorkoutLogState = JSON.parse(JSON.stringify(workoutState));
    if (newWorkoutLogState.excercises && newWorkoutLogState.excercises[excerciseIndex]) {
      console.log(`exc Index: ${excerciseIndex}`)
      const newExcercises = JSON.parse(JSON.stringify(newWorkoutLogState.excercises));
      const newExcerciseState = JSON.parse(JSON.stringify(newExcercises[excerciseIndex]));
      const newRepsArray = JSON.parse(JSON.stringify(repsArray));
      console.log(`old reps: ${newRepsArray}`);
      newRepsArray[setNumber - 1] = newReps;
      setRepsArray(newRepsArray);
      newExcerciseState.setsReps = newRepsArray;
      newExcercises[excerciseIndex] = newExcerciseState;
      newWorkoutLogState.excercises = newExcercises;
      console.log(`new reps: ${newRepsArray}`);
      setWorkoutState(newWorkoutLogState);
    }

  }
  const findWorkingSetWeight = () => {
    let weight = workoutState.excercises ? workoutState.excercises[excerciseIndex].setsWeight ? workoutState.excercises[excerciseIndex].setsWeight[setNumber - 1] : 0 : 0;
    onWeightChange(weight);
  }
  const findWorkingReps = (newSetNumber, newExcerciseIndex) => {
    console.log(`new set number: ${newSetNumber}`);
    console.log(`new excerciseIndex number: ${newExcerciseIndex || excerciseIndex}`);
    let reps = workoutState.excercises ?
      workoutState.excercises[newExcerciseIndex || excerciseIndex].setsReps ?
        workoutState.excercises[newExcerciseIndex || excerciseIndex].setsReps[newSetNumber - 1]
        : 0
      : 0;
    if (reps) {
      setReps(reps);
      console.log(`new reps: ${reps}`);

      editDefaultReps(reps);
    }
  }

  const renderSets = (setsCount) => {
    let sets = [];
    for (let index = 0; index < setsCount; index++) {
      sets.push(<Picker.Item key={index} label={`${index + 1}`} value={`set${index + 1}`} />)
    }

    return sets;
  }

  const renderReps = () => {
    let sets = [];
    for (let index = 0; index < repsMax; index++) {
      sets.push(<Picker.Item key={index} label={`${index + 1}`} value={`rep${index + 1}`} />)
    }

    return sets;
  }

  const renderExcercises = () => {
    return workoutState.excercises.map((excercise, index) => (
      <Picker.Item key={index} label={excercise.name} value={index} />
    ));
  }
  const onWeightChange = (weight) => {
    let newSetsWeight = JSON.parse(JSON.stringify(weightsArray));
    newSetsWeight[setNumber - 1] = weight;
    setCurrSetWeight(weight);
  }

  const onWeightSubmitEditing = () => {
    const newWorkoutLogState = JSON.parse(JSON.stringify(workoutState));
    const newExcercises = JSON.parse(JSON.stringify(newWorkoutLogState.excercises));
    const newExcerciseState = JSON.parse(JSON.stringify(newExcercises[excerciseIndex]));
    const newSetsWeight = JSON.parse(JSON.stringify(weightsArray));
    console.log(`old sets weight: ${newSetsWeight}`);

    newSetsWeight[setNumber - 1] = currSetWeight;
    setWeightsArray(newSetsWeight);
    newExcerciseState.setsWeight = newSetsWeight;
    newExcercises[excerciseIndex] = newExcerciseState;
    newWorkoutLogState.excercises = newExcercises;
    console.log(`new sets weight: ${newSetsWeight}`);

    setWorkoutState(newWorkoutLogState);

  };

  const hasSavedSetWeight = () => {
    if (workoutState.excercises[excerciseIndex].setsWeight) {
      let weight = workoutState.excercises[excerciseIndex].setsWeight[setNumber - 1];
      if (weight > 0) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
  return (
    !fontsLoaded
      ? <AppLoading />
      :
      <View style={styles.container}>
        <Text style={{ textAlign: "center", fontSize: 24, marginTop: 10 }}>{workoutState.name || "Today's workout"}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 0.3 }}>
            <Text style={styles.bigFontSize}>Excercise: </Text>
          </View>
          <View style={{ flex: 0.7 }}>
            <Picker
              selectedValue={excerciseIndex}
              onValueChange={(itemValue, itemIndex) => setExcerciseIndex(itemIndex)}
            >
              {renderExcercises()}
            </Picker>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 0.3 }}>
            <Text style={styles.bigFontSize}>Set number: </Text>
          </View>
          <View style={{ flex: 0.7 }}>
            <Picker
              selectedValue={`set${setNumber}`}
              style={{ height: 50, width: "100%" }}
              onValueChange={(itemValue, itemIndex) => setSetNumber(itemIndex + 1)}
            >
              {renderSets(currExcercise ? currExcercise.sets : 0)}
            </Picker>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={{ flex: 0.3 }}>
            <Text style={styles.bigFontSize}>Tempo: </Text>
          </View>
          <View style={{ flex: 0.7 }}>
            <Text style={styles.bigFontSize}>{currExcercise ? currExcercise.tempo : ""}</Text>
          </View>
        </View>
        <View>
          <View style={styles.rowContainer}>
            <View style={{ flex: 0.3 }}>
              <Text style={styles.bigFontSize}>Reps: </Text>
            </View>
            <View style={{ flex: 0.7 }}>
              <Picker
                selectedValue={`rep${reps}`}
                style={{ height: 50, width: "100%" }}
                onValueChange={(itemValue, itemIndex) => {
                  setReps(itemIndex + 1)
                  editDefaultReps(itemIndex + 1);
                }}
              >
                {renderReps(currExcercise ? currExcercise.reps : 0)}
              </Picker>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={{ flex: 0.3 }}>
              <Text style={styles.bigFontSize}>Weight: </Text>
            </View>
            <View style={{ flex: 0.7 }}>
              <View style={styles.inputContainer}>
                <TextInput
                  keyboardType='numeric'
                  onChangeText={(weight) => onWeightChange(weight)}
                  onSubmitEditing={() => onWeightSubmitEditing()}
                  style={styles.numberInput}
                  value={currSetWeight ? currSetWeight.toString() : ""}
                  maxLength={5}
                />
                <Text style={styles.prefix}>kg</Text>
              </View>
            </View>
          </View>
          <View>
            {
              hasSavedSetWeight() && setNumber === currExcercise.sets
                ?
                <View>
                  <TouchableOpacity
                    style={styles.mainButton}
                    onPress={() => { setExcerciseIndex(excerciseIndex + 1); }}
                  >
                    <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>Go to next excercise</Text>
                  </TouchableOpacity>
                </View>
                : null

            }
            {
              hasSavedSetWeight() && setNumber !== currExcercise.sets
                ?
                <View>
                  <TouchableOpacity
                    style={styles.mainButton}
                    onPress={() => { setSetNumber(setNumber + 1) }}
                  >
                    <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>Next set</Text>
                  </TouchableOpacity>
                </View>
                : null
            }
            {
              hasSavedSetWeight()
                ?
                <View>
                  <TouchableOpacity style={styles.secondaryButton}>
                    <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>Share achievement</Text>
                  </TouchableOpacity>
                </View>
                : null
            }
          </View>
        </View>
      </View>
  );

}

const styles = StyleSheet.create({
  container: {
    marginTop: SCREEN_HEIGHT / 12,
    marginHorizontal: 20
  },
  setsButtonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 70,
  },
  setButton: {
    width: 100,
    height: 30,
    borderColor: "black",
    borderRadius: 2,
    backgroundColor: "#bababa"
  },
  inputContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10
  },
  prefix: {
    paddingHorizontal: 10,
    fontWeight: 'bold',
    color: 'black'
  },
  numberInput: {
    width: "50%",
    textAlign: "right"
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25
  },
  halfRow: {
    flex: 0.5
  },
  bigFontSize: {
    fontSize: 18
  },
  mainButton: {
    width: "100%",
    backgroundColor: "#88983b",
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 10
  },
  secondaryButton: {
    width: "100%",
    backgroundColor: "#3b8898",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10
  }
});

export default Log;