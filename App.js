import React, { Component } from 'react';

import 'react-native-gesture-handler';
//import screen
import SplashScreen from './screen/SplashScreen';
import LoginScreen from './screen/LoginScreen';
import RegistrationScreen from './screen/RegistrationScreen';
import DrawerNavigationRoutes from './DrawerNavigationRoutes';


import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';




const Stack = createStackNavigator();

//headerMode='false'

 const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName="SplashScreenName">
        
        {/* SplashScreen which will come once for 5 Seconds */}
       <Stack.Screen name="SplashScreenName" component={SplashScreen} z={{headerShown: false}}/>

        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
      
        {/* Navigation Drawer as a landing page */}
          <Stack.Screen
            name="DrawerNavigationRoutes"
            component={DrawerNavigationRoutes}
            // Hiding header for Navigation Drawer
            options={{headerShown: false}}
          />

        {/* Auth Navigator which includer Login Signup will come once */}
     
   
      </Stack.Navigator>
      </NavigationContainer>
  );
}

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />

            <Stack.Screen name="RegistrationScreen" component={RegistrationScreen}  
     options={{ title:'Register',
     headerStyle: {
      backgroundColor: '#307ecc', //Set Header color
    },
    headerTintColor: '#fff', //Set Header text color
    headerTitleStyle: {
      fontWeight: 'bold', //Set Header text style
    }, 
    headerTitleAlign:'center', //Header title on center
    headerShadowVisible: false, //set Header shadowvisible gone
    }} />

    </Stack.Navigator>
  );
};
export default App;

