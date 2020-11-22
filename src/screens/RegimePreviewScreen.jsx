import React from "react";
import {View, Text} from "react-native";

const RegimePreviewScreen = (props) => {
  const { workoutPlan, diet } = props;
  return (
    <View>
      <Text>Previewing workout and diet</Text>
      <Text>{diet.toString()}</Text>
      <Text>{workoutPlan.toString()}</Text>
    </View>
  )
};

export default RegimePreviewScreen;