import react from 'react';
import { StyleSheet, Text,SafeAreaView } from 'react-native';
import HomeScreen from './screen/HomeScreen';
import Homepage from './screen/Homepage';
import HomeUI from './screen/HomeUI';
import { NavigationContainer } from '@react-navigation/native';
import LogOut from './screen/LogOut/LogOut';
import MainContainer from './navigation/MainContainer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <MainContainer/>
    
     {/* <Navigation/> */}
     {/* <LogOut/> */}
     {/* <HomeUI/> */}
     {/* <HomeScreen/> */}
     {/* <Homepage/> */}

    </SafeAreaView>    
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F9FBFC'
  },
});
