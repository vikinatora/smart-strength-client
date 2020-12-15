import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text, AsyncStorage } from "react-native";
import { SCREEN_HEIGHT } from "../global/globalVariables";
import Loader from "./Loader";
import workoutService from "../services/workoutService";
import dietService from "../services/dietService";
import { useLinkProps } from "@react-navigation/native";
import usersService from "../services/usersService";
import { withOrientation } from "react-navigation";

export default Questionnaire = ({ name, questions, question, setAnswers, answers, questionIndex, setQuestionIndex, navigation }) => {
  const [markedAnswer, setMarkedAnswer] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const viewNextQuestion = async () => {
    if (questionIndex === questions.length - 1) {
      let fullAnswers = {
        ...answers,
        [question.value]: markedAnswer
      }
      setIsProcessing(true);

      console.log("Processing...");
      const userId = await AsyncStorage.getItem("userId");
      if (!userId) {
        userId = await usersService.getIdFromFbToken();
      }
      const workout = await workoutService.createWorkout(fullAnswers, userId);
      const diet = await dietService.createDiet(fullAnswers, userId);

      setIsProcessing(false);
      navigation.navigate("RegimePreview", { workout: workout, diet: diet })
    }
    else {
      setAnswers({
        ...answers,
        [question.value]: markedAnswer
      });
      let q = questionIndex + 1;
      setMarkedAnswer(answers[questions[q].value]);
      setQuestionIndex(questionIndex + 1);
    }
  }

  const viewPreviousQuestion = () => {
    let q = questionIndex - 1;
    setQuestionIndex(q)
    setMarkedAnswer(answers[questions[q].value]);
  }

  const onNumberInputChange = (text) => {
    setMarkedAnswer(text);
  }
  return (
    isProcessing
      ? <Loader />
      :
      <View>
        <Text style={{textAlign: "center", fontSize: 22, marginTop: SCREEN_HEIGHT / 14, color: "#ffffff"}}>These questions will help us get to know you better, {name}</Text>
        <View style={styles.questionnaireContainer}>
          <View>
            <Text style={{ fontSize: 17, textAlign: "center", fontSize:22, color: "#ffffff" }}>{question.question}</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            {
              question.customAction
                ? question.renderAnswerComponent(onNumberInputChange, markedAnswer)
                : question.answers.map((answer, index) => (
                  <TouchableOpacity
                    style={[styles.answerButton, markedAnswer === answer.id ? styles.selectedAnswerBackground : {}]}
                    key={index}
                    onPress={() => { setMarkedAnswer(answer.id) }}
                  >
                    <Text style={{ textAlign: "center", fontSize:22, color: "#ffffff" }}>{answer.text}</Text>
                  </TouchableOpacity>
                ))
            }
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              disabled={questionIndex ? false : true}
              style={[{ width: "45%", backgroundColor: "#3ca9e2", padding: 5, borderRadius: 5, marginVertical: 5 }, questionIndex ? {} : { opacity: 0.5 }]}
              onPress={viewPreviousQuestion}
            >
              <Text style={{ textAlign: "center", fontSize:22, color: "#ffffff" }}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={+markedAnswer > 0 ? false : true}
              style={[
                { width: "45%", backgroundColor: "#3ca9e2", padding: 5, borderRadius: 5, marginVertical: 5 },
                +markedAnswer ? {} : { opacity: 0.5 }
              ]}
              onPress={viewNextQuestion}
            >
              <Text style={[{ textAlign: "center", fontSize: 22, color: "#ffffff" }]}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  questionnaireContainer: {
    marginHorizontal: 10, marginTop: SCREEN_HEIGHT/15, padding: 20, borderRadius: 50, backgroundColor: "#98C1FF"
  },
  footerContainer: {
    marginTop: 50, marginBottom: 50, flexDirection: "row", justifyContent: "space-between"
  },
  footerButton: {

  },
  selectedAnswerBackground: {
    backgroundColor: "#90A5C3"
  },
  answerButton: {
    backgroundColor: "#3ca9e2", padding: 5, borderRadius: 5, marginVertical: 5, marginTop: 20, marginBottom: 20,
  },
  activeButton: {
    opacity: 0.5
  },
  disabledButton: {
    opacity: 0.5
  }
})