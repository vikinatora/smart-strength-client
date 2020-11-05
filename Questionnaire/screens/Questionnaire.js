import React from "react";
import { ScrollView, StatusBar } from "react-native";

import fitnessQuestions from "../data/fitness";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Fitness"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate("Questionnaire", {
          title: "Fitness",
          questions: fitnessQuestions,
          color: "#36b1f0"
        })
      }
    />
  </ScrollView>
);
