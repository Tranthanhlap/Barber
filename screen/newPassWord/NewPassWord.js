import {StyleSheet, View, Text} from 'react-native'
import React,{useState} from 'react'
import CustomerInput from '../../components/input'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const NewPassWord = () => {

  const [code,setCode] = useState('');
  const [newPassWord,setNewPassWord] = useState('');


  const navigation = useNavigation();

  const onSubmitPressed = () =>{
    navigation.navigate('HomeScreen');
  }

  const onSigninPressed = () =>{
    navigation.navigate('SigninScreen');
  }



  return (
    <View style={styles.root}>
      <Text style={styles.title}>Confirm Your Email </Text>

      <CustomerInput placeholder="Code" value={code} setvalue={setCode}/>
      <CustomerInput placeholder="Enter the password" value={newPassWord} setvalue={setNewPassWord}/>
    
      <CustomButton text="Submit" onPress={onSubmitPressed}/>

      <CustomButton 
        text="Back To Sign In" 
        onPress={onSigninPressed} 
        type="TERTIARY"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root:{
    alignItems:'center',
  },
  logo:{
      width:'100%',
      height:'30%',
  },
  title:{
      fontSize:24,
      fontWeight:'bold',
      color:'black',
      margin:10,
  }
});
export default NewPassWord