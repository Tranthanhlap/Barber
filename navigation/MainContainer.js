import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from '../screen/HomeScreen';
import DetailsScreen from '../screen/DetailsScreen';
import SettingsScreen from '../screen/SettingsScreen';
import SigninScreen from '../screen/SigninScreen';
import SignUpScreen from '../screen/SignUpScreen';

//Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// const MainContainer = () => {
function Tabb() {
  return (

      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />

      </Tab.Navigator>
  );
}

function SettingsScreenLogOut(){
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <Button title='Logout' onPress={() => navigation.navigate('SigninScreen')} />
    </View>
  )
}



export default function MainContainer() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown:false }}>
       <Stack.Screen name="SigninScreen" component={SigninScreen}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <Stack.Screen name='tabb' component={Tabb} />

        </Stack.Navigator>
    </NavigationContainer>
  );
}
