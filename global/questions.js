import React, { Component } from 'react';
import { View } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

const questions = [
{
  question: "What is your gender?",
  answers:
  [
    { id:"1", text: "Male" },
    { id:"2", text: "Female" },
  ]
},
{
  question: "How much do you weigh (in kilograms)?",
  answers:
  [
    <TextInput 
   style={styles.textInput}
   keyboardType='numeric'
   onChangeText={(text)=> this.onChanged(text)}
   value={this.state.myNumber}
   maxLength={3}
/>
  ]
},

{
  question: "How tall are you (in centimeters)?",
  answers:
  [
    <TextInput 
   style={styles.textInput}
   keyboardType='numeric'
   onChangeText={(text)=> this.onChanged(text)}
   value={this.state.myNumber}
   maxLength={3}  
/>
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
    question: "How long have you been working out?",
    answers: [
      { id: "1", text: "I have never worked out before" },
      { id: "2", text: "1 year" },
      { id: "3", text: "2-3 years" },
      { id: "4", text: "More than 3 years"}
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
    question: "How fast would you like to make progress?",
    answers:
    [
    /* how do we "measure" this? */
    ]
  },

  {
    question: "Do you have any complications (past contusions, etc.) that we should be aware of?",
    answers: 
    [
      constitems = [
        {
          name: 'Complications',
          id: 0,
          children: 
          [
            {
              name: 'Contusion',
              id: 1,
            },
            {
              name: 'Recurring health issue',
              id: 2,
            },
            {
              name: 'Disability',
              id: 3,
            }
            
          ]
        }
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

export default questions;
