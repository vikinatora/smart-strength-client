import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Questionnaire from "../../components/Questionnaire";
import { SCREEN_HEIGHT, STATUSBAR_HEIGHT } from "../../global/globalVariables";
import { useFonts, OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import { AppLoading } from 'expo';
import newQuestions from "../../components/../global/questions";
import InitialQuestionnaireScreen from "../../components/InitialQuestionnaireScreen"
const QuestionnaireScreen = (props) => {
  const questions = [
    {
      value: "trainingExperience",
      question: "How long have you been working out?",
      answers: [
        { id: "1", text: "1 year" },
        { id: "2", text: "2 - 3 years" },
        { id: "3", text: "More than 3 years" },
        { id: "4", text: "I have never worked out before" },
      ]
    },
    {
      value: "workoutsPerWeek",
      question: "How many times per week can you workout?",
      answers: [
        { id: "3", text: "3" },
        { id: "4", text: "4 times" },
        { id: "5", text: "5 times" },
        { id: "6", text: "6" }
      ]
    },
    {
      value: "workoutDuration",
      question: "How many hours do you workout every session?",
      answers: [
        { id: "1", text: "30 minutes-1 hour" },
        { id: "2", text: "1-2 hours" },
        { id: "3", text: "more than 2 hours" },
        { id: "4", text: "less than 30 minutes" }
      ]
    },
    {
      value: "workoutPreference",
      question: "Which form of exercise do you prefer?",
      answers: [
        { id: "1", text: "I don't enjoy exercising" },
        { id: "2", text: "Weight training" },
        { id: "3", text: "Cardio" },
        { id: "4", text: "A combination of weights and cardio" }
      ]
    },
    {
      value: "dietExperience",
      question: "Have you been on a diet or food regime in the past?",
      answers: [
        { id: "1", text: "Yes" },
        { id: "2", text: "No" },
      ]
    },
    {
      value: "fitnessGoal",
      question: "What is your current fitness goal?",
      answers: [
        { id: "1", text: "To lose weight/fat" },
        { id: "2", text: "To build muscle" },
        { id: "3", text: "To maintain my current shape" },
        { id: "4", text: "To lose fat and build muscle simultaneousely" }
      ]
    },
    {
      value: "progressionRate",
      question: "How motivated are you to achieve your goals fast?",
      answers: [
        { id: "1", text: "Little to none motivation" },
        { id: "2", text: "Moderately motivated" },
        { id: "3", text: "Very motivated" },
        { id: "4", text: "I need to be ripped for the beach by next Monday" },
      ]
    },
    // {
    //   value: "satisfaction",
    //   question: "Are you satisfied with the plan we have prepared for you?",
    //   answers: [
    //     { id: "1", text: "Yes" },
    //     { id: "2", text: "I'd like to change something" },
    //   ]
    // }
  ];
  const [answers, setAnswers] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showGetStartedScreen, setShowGetStartedScreen] = useState(true);

  let [fontsLoaded] = useFonts({
    OpenSans_400Regular
  });

  return (
    !fontsLoaded
      ? <AppLoading />
      : <View style={styles.screenContainer}>
        {
          showGetStartedScreen
            ? <InitialQuestionnaireScreen
              showThisScreen={setShowGetStartedScreen}
            />
            : <Questionnaire
              name={props.route.params.name.split(" ")[0]}
              questions={newQuestions}
              setQuestionIndex={setQuestionIndex}
              questionIndex={questionIndex}
              question={newQuestions[questionIndex]}
              setAnswers={setAnswers}
              answers={answers}
              navigation={props.navigation}
            />
        }
      </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    marginTop: STATUSBAR_HEIGHT,
    backgroundColor: "#75A8FF",
    height: "100%"
  }
});

export default QuestionnaireScreen;
