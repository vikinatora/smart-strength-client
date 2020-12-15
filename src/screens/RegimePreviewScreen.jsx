import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Button } from "react-native";
import DietPreview from "../../components/DietPreview";
import TrainingProgramPreview from "../../components/TrainingProgramPreview";
import { SCREEN_HEIGHT, STATUSBAR_HEIGHT } from "../../global/globalVariables";

const RegimePreviewScreen = (props) => {
  const { workout, diet } = props.route.params;
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