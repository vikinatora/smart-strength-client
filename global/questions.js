import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

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
    value: "weight",
    question: "How much do you weigh (in kilograms)?",
    customAction: true,
    renderAnswerComponent: (onChanged, state) => (<TextInput
      keyboardType='numeric'
      onChangeText={(text) => onChanged(text)}
      value={state}
      maxLength={3}
    />)
  },
  {
    value: "height",
    question: "How tall are you (in centimeters)?",
    customAction: true,
    renderAnswerComponent: (onChanged, state) => (
      <TextInput
        keyboardType='numeric'
        onChangeText={(text) => onChanged(text)}
        value={state}
        maxLength={3}
      />
    )
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
    question: "How many times per week do you workout?",
    answers: [
      { id: "1", text: "I don't workout at all" },
      { id: "2", text: "1-3 times" },
      { id: "3", text: "3-5 times" },
      { id: "4", text: "More than 5 times" }
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
