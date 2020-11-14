import React, { useState } from "react";
import {StyleSheet, TouchableOpacity, View, Text} from "react-native"
import {SCREEN_HEIGHT, STATUSBAR_HEIGHT} from "../global/globalVariables";

export default Questionnaire = ({question, setAnswer, answers, questionIndex, setQuestionIndex}) => {
  const [hasAnswer, setHasAnswered] = useState(false);
  const [markedAnswer, setMarkedAnswer] = useState("");
  const markAnswer = (value) => {
  }
  const viewNextQuestion = () => {
    setAnswer({
      ...answers,
      [question.value]: markedAnswer
    });
    setMarkedAnswer("");
    setQuestionIndex(questionIndex + 1);
  }
  const viewPreviousQuestion = () => {
    setQuestionIndex(questionIndex - 1)

  }
  return (
    <View style={styles.questionnaireContainer}>
      <View>
        <Text style={{fontSize: 17, textAlign: "center"}}>{question.question}</Text>
      </View>
      <View style={{marginTop: 10}}>
        {question.answers.map((answer, index) => (
          <TouchableOpacity
            style={[styles.answerButton, markedAnswer === answer.id ? styles.selectedAnswerBackground : { }]}
            key={index}
            onPress={() => setMarkedAnswer(answer.id)}
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
          style={[{width: "45%", backgroundColor: "#bababa", padding: 5, borderRadius: 5, marginVertical: 5}, +markedAnswer ? { } : {opacity: 0.5}]}
          onPress={viewNextQuestion}
        >
          <Text style={[{textAlign: "center"}]}>Next</Text>
        </TouchableOpacity>
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