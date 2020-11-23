import React, { useEffect } from "react";
import {View, Text} from "react-native";

const RegimePreviewScreen = (props) => {
  const { workoutPlan, diet } = props;
  useEffect(() => {
    console.log(workoutPlan);
    console.log(diet);
  }, [])
  return (
    <View>
      <Text>Previewing workout and diet</Text>
    </View>
  )
};

export default RegimePreviewScreen;