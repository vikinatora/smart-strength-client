import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

export default newQuestions = [
  {
    value: "gender",
    question: "What is your gender?",
    answers:
      [
        { id: "1", text: "Male" },
        { id: "2", text: "Female" },
      ]
  },
  {
    value: "age",
    question: "What's your age?",
    customAction: true,
    renderAnswerComponent: (onChanged, state) => (
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType='numeric'
          onChangeText={(text) => onChanged(text)}
          style={styles.numberInputNoSuffix}
          value={state}
          maxLength={3}
        />
      </View>)
  },
  {
    value: "weight",
    question: "How much do you weigh?",
    customAction: true,
    renderAnswerComponent: (onChanged, state) => (
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType='numeric'
          onChangeText={(text) => onChanged(text)}
          style={styles.numberInput}
          value={state}
          maxLength={3}
        />
        <Text style={styles.prefix}>kg</Text>
      </View>)
  },
  {
    value: "height",
    question: "How tall are you?",
    customAction: true,
    renderAnswerComponent: (onChanged, state) => (
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType='numeric'
          onChangeText={(text) => onChanged(text)}
          style={styles.numberInput}
          value={state}
          maxLength={3}
        />
        <Text style={styles.prefix}>cm</Text>
      </View>)
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
    value: "trainingExperience",
    question: "How long have you been working out?",
    answers: [
      { id: "1", text: "I have never worked out before" },
      { id: "2", text: "1 year" },
      { id: "3", text: "2-3 years" },
      { id: "4", text: "More than 3 years" }
    ]
  },
  {
    value: "workoutsPerWeek",
    question: "How many times per week can you workout?",
    answers: [
      { id: "3", text: "3 times" },
      { id: "4", text: "4 times" },
      { id: "5", text: "5 times" },
      { id: "6", text: "More than 5 times" }
    ]
  },
  {
    value: "trainingDuration",
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
  //   question: "Do you have any complications (past contusions, etc.) that we should be aware of?",
  //   answers:
  //     [
  //       constitems = [
  //         {
  //           name: 'Complications',
  //           id: 0,
  //           children:
  //             [
  //               {
  //                 name: 'Contusion',
  //                 id: 1,
  //               },
  //               {
  //                 name: 'Recurring health issue',
  //                 id: 2,
  //               },
  //               {
  //                 name: 'Disability',
  //                 id: 3,
  //               }

  //             ]
  //         }
  //       ]
  // }
  // {
  //   question: "Are you satisfied with the plan we have prepared for you?",
  //   answers: [
  //     { id: "1", text: "Yes" },
  //     { id: "2", text: "I'd like to change something" },
  //   ]
  // }
];

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 10
  },
  prefix: {
    paddingHorizontal: 10,
    fontWeight: 'bold',
    color: 'black'
  },
  numberInput: {
    width: "50%",
    textAlign: "right"
  },
  numberInputNoSuffix: {
    width: "100%",
    textAlign: "center"

  }
})
