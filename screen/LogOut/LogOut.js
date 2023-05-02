import { View, Text, Button,StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import HomeUIButton from '../../components/CustomButton/HomeUIButton'



const LogOut = () => {
    const navigation = useNavigation();

 
    const LogOut = () =>{
      navigation.navigate('SigninScreen');
    }
    const Back = () =>{
        navigation.navigate('HomeUI');
      }
  return (
    <View>
        <View   >
        <Button onPress={Back}  title="< BACK" color="#841584"/>
        <Text style={styles.UILogOut}>SETTING</Text>
        </View>
      <View style={styles.ButtonLogOut} >
      <HomeUIButton onPress={LogOut}   text="log out"/>
      </View>
    </View>
  )
}

export default LogOut

const styles = StyleSheet.create({
  UILogOut: {
    textAlign:'center'
  },
  ButtonLogOut:{
    alignItems:'center'
  }
});