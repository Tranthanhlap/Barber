import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from '../screen/SigninScreen';
import SignUpScreen from '../screen/SignUpScreen';
import ConfirmEmailScreen from '../screen/confirmEmailScreen';
import ForgotPassWord from '../screen/forgotPasswordScreen';
import NewPassWord from '../screen/newPassWord';
import HomeScreen from '../screen/HomeScreen';
import HomeUI from '../screen/HomeUI';
import LogOut from '../screen/LogOut/LogOut';
import Homepage from '../screen/Homepage';



const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SigninScreen" component={SigninScreen}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <Stack.Screen name="ConfirmEmailScreen" component={ConfirmEmailScreen}/>
        <Stack.Screen name="ForgotPassWord" component={ForgotPassWord}/>
        <Stack.Screen name="NewPassWord" component={NewPassWord}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="HomeUI" component={HomeUI}/>
        <Stack.Screen name="Homepage" component={Homepage}/>
        <Stack.Screen name="LogOut" component={LogOut}/>
    </Stack.Navigator>

    </NavigationContainer>
  )
}

export default Navigation