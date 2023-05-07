import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../components/CustomButton'
import HomeUIButton from '../../components/CustomButton/HomeUIButton'

const HomeUI = () => {
  
  const navigation = useNavigation();

 
  const clickSearch = () =>{
    navigation.navigate('HomeScreen');
  }

  const clickSetTing = () =>{
    navigation.navigate('LogOut');
  }


  return (
    <View >
      <View style={styles.UI}>
      <HomeUIButton  onPress={clickSearch} text="SEARCH" />
      <HomeUIButton  text="ACCOUNT" />
      <HomeUIButton  onPress={clickSetTing}  text="SETTING" />
      {/* <HomeUIButton text="SEARCH" />
      <HomeUIButton  text="ACCOUNT" />
      <HomeUIButton  text="SETTING" /> */}
      </View>
   
    </View>
  )
}

export default HomeUI

const styles = StyleSheet.create({
  UI: {
    alignItems:'center',
  },
  UIText:{
    textAlign:'center',
  }
});