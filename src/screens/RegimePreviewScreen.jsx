import React, { useEffect } from "react";
import {View, Text, StyleSheet} from "react-native";
import DietPreview from "../../components/DietPreview";
import TrainingProgramPreview from "../../components/TrainingProgramPreview";
import { STATUSBAR_HEIGHT } from "../../global/globalVariables";
import Schedule from "../../components/Schedule";
const RegimePreviewScreen = (props) => {
  const { workout, diet } = props.route.params;
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