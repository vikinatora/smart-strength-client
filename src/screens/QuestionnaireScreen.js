import React, { useEffect, useState } from "react";
import {StyleSheet, View, Text } from "react-native";
import { useFonts, OpenSans_400Regular} from '@expo-google-fonts/open-sans';
import Questionnaire from "../../components/Questionnaire";
import {SCREEN_HEIGHT, STATUSBAR_HEIGHT} from "../../global/globalVariables";
import { AppLoading } from 'expo';

const QuestionnaireScreen = (props) => {
  const questions = [
    {
      questionValue: "trainingExperience",
      question: "How long have you been working out?",
      answers: [
        { id: "1", text: "1 year" },
        { id: "2", text: "2 - 3 years" },
        { id: "3", text: "More than 3 years"},
        { id: "4", text: "I have never worked out before" },
      ]
    },
    {
      question: "How many times per week do you workout?",
      answers: [
        { id: "1", text: "I don't workout at all" },
        { id: "2", text: "1-3 times"},
        { id: "3", text: "3-5 times" },
        { id: "4", text: "More than 5 times" }
      ]
    },
    {
      question: "How many hours do you workout every session?",
      answers: [
        { id: "1", text: "30 minutes-1 hour" },
        { id: "2", text: "1-2 hours" },
        { id: "3", text: "more than 2 hours" },
        { id: "4", text: "less than 30 minutes"}
      ]
    },
    {
      question: "Which form of exercise do you prefer?",
      answers: [
        { id: "1", text: "I don't enjoy exercising" },
        { id: "2", text: "Weight training" },
        { id: "3", text: "Cardio" },
        { id: "4", text: "A combination of weights and cardio"}
      ]
    },
    {
      question: "Have you been on a diet or food regime in the past?",
      answers: [
        { id: "1", text: "Yes" },
        { id: "2", text: "No" },
      ]
    },
    {
      question: "Do you have any foods you particularly dislike?",
      answers: [
        { id: "1", text: "Yes" /*describe which*/ },
        { id: "2", text: "No" },
      ]
    }, 
    {
      question: "What is your current fitness goal?",
      answers: [
        { id: "1", text: "To lose weight/fat" },
        { id: "2", text: "To build muscle" },
        { id: "3", text: "To maintain my current shape" },
        { id: "4", text: "To lose fat and build muscle simultaneousely"}
      ]
    },
    {
      question: "Are you satisfied with the plan we have prepared for you?",
      answers: [
        { id: "1", text: "Yes" },
        { id: "2", text: "I'd like to change something" },
      ]
    }
  ];  
  const params = props.route.params;
  const [answers, setAnswer] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular
  });

  return (
    !fontsLoaded
    ? <AppLoading/>
    : <View style={styles.screenContainer}>
        <Text style={{textAlign: "center", fontSize: 16, marginTop: SCREEN_HEIGHT / 12}}>First we have to get to know you {params.name}</Text>
        <Questionnaire setQuestionIndex={setQuestionIndex} questionIndex={questionIndex} question={questions[questionIndex]} setAnswer={setAnswer} answers={answers}/>
      </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    marginTop: STATUSBAR_HEIGHT,
  }
});

export default QuestionnaireScreen;
