import React, { useEffect } from "react";
import {View, Text, StyleSheet} from "react-native";
import TrainingProgramPreview from "../../components/TrainingProgramPreview";
import { STATUSBAR_HEIGHT } from "../../global/globalVariables";

const RegimePreviewScreen = (props) => {
  const { workoutPlan, diet } = props;
  useEffect(() => {
    console.log(workoutPlan);
    console.log(diet);
  }, [])
  return (
    <View style={styles.container}>
      <TrainingProgramPreview/>
    </View>
  )
};
const styles = StyleSheet.create({
  container:{
    marginTop: STATUSBAR_HEIGHT,
    width: "85%",
  }
});
export default RegimePreviewScreen;