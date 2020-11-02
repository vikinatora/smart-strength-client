import React, { Component } from "react";
import { Provider } from "react-redux";
import { createAppContainer, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/screens/HomeScreen";
import store from "./store";
import QuestionnaireScreen from "./src/screens/Questionnaire";


const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="Home" 
              component={HomeScreen}
              options={{
                headerShown: false
              }} 
            />
            <Stack.Screen 
              name="Questionnaire"
              component={QuestionnaireScreen}
              options={{
                headerShown: false
              }} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}