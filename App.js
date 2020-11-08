import React, { Component } from "react";
import { Provider } from "react-redux";
import { createAppContainer, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/screens/HomeScreen";
import store from "./store";
import QuestionnaireScreen from "./src/screens/QuestionnaireScreen";
import FeedScreen from "./src/screens/FeedScreen";
import { useFonts, OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold,
  OpenSans_800ExtraBold_Italic 
 } from '@expo-google-fonts/open-sans';


const Stack = createStackNavigator();

const App = () => {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen 
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
          /> */}
          <Stack.Screen 
            name="Feed"
            component={FeedScreen}
            options={{
              headerShown: false
            }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;