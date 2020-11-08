import React, { useEffect } from "react";
import {StyleSheet, View, Text } from "react-native";

const QuestionnaireScreen = (props) => {
  const params = props.route.params;
  useEffect(() => {
    
  }, [])
  return (
    <View>
      <Text>First we have to get to know each other {params.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
});

export default QuestionnaireScreen;
