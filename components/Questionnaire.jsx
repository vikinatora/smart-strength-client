import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { SCREEN_HEIGHT } from "../global/globalVariables";
import Loader from "./Loader";
import workoutService from "../services/workoutService";
import dietService from "../services/dietService";
import { useLinkProps } from "@react-navigation/native";

export default Questionnaire = ({name, questions, question, setAnswers, answers, questionIndex, setQuestionIndex, navigation}) => {
  const [markedAnswer, setMarkedAnswer] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const viewNextQuestion = async () => {
    if (questionIndex === questions.length - 1) {
      setAnswers({
        ...answers,
        [question.value]: markedAnswer,
      });
      setMarkedAnswer(answers[questions[questionIndex].value]); 

      setIsProcessing(true);
      
      console.log("Processing...");
      console.log(answers);

      const workout = await workoutService.createWorkout(answers);
      const diet = await dietService.createDiet(answers);
      
      setIsProcessing(false);
      navigation.navigate("RegimePreview", { workout: workout, diet: diet })
    }
    else {
      setAnswers({
        ...answers,
        [question.value]: markedAnswer,
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
  return (
    isProcessing
    ? <Loader/>
    : 
    <View>
      <Text style={{textAlign: "center", fontSize: 16, marginTop: SCREEN_HEIGHT / 12}}>First we have to get to know you {name}</Text>
      <View style={styles.questionnaireContainer}>
        <View>
          <Text style={{fontSize: 17, textAlign: "center"}}>{question.question}</Text>
        </View>
        <View style={{marginTop: 10}}>
          {question.answers.map((answer, index) => (
            <TouchableOpacity
              style={[styles.answerButton, markedAnswer === answer.id ? styles.selectedAnswerBackground : { }]}
              key={index}
              onPress={() => {setMarkedAnswer(answer.id)}}
            >
              <Text style={{textAlign: "center"}}>{answer.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            disabled={questionIndex ? false : true}
            style={[{width: "45%", backgroundColor: "#bababa", padding: 5, borderRadius: 5, marginVertical: 5}, questionIndex ? { } : {opacity: 0.5}]}
            onPress={viewPreviousQuestion}
          >
            <Text style={{textAlign: "center"}}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            disabled={+markedAnswer > 0 ? false : true}
            style={[
              {width: "45%", backgroundColor: "#bababa", padding: 5, borderRadius: 5, marginVertical: 5},
              +markedAnswer ? { } : {opacity: 0.5}
            ]}
            onPress={viewNextQuestion}
          >
            <Text style={[{textAlign: "center"}]}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  questionnaireContainer: {
    marginHorizontal: 20, marginTop: SCREEN_HEIGHT / 10, padding: 10, borderRadius: 10, backgroundColor: "#D3D3D3"
  },
  footerContainer: {
    marginTop: 10, flexDirection: "row", justifyContent: "space-between"
  },
  footerButton: {

  },
  selectedAnswerBackground: {
    backgroundColor: "#949494"
  },
  answerButton: {
    backgroundColor: "#bababa", padding: 5, borderRadius: 5, marginVertical: 5
  },
  activeButton: {
    opacity: 0.5
  },
  disabledButton: {
    opacity: 0.5
  }
})