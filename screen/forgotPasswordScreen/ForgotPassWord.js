import {StyleSheet, View, Text} from 'react-native'
import React,{useState} from 'react'
import CustomerInput from '../../components/input'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'


const ForgotPassWord = () => {

  const [username,setUsername] = useState('');

  const navigation = useNavigation();

  const onSendPressed = () =>{
    navigation.navigate('NewPassWord');
  }

  const onSignInPressed = () =>{
    navigation.navigate('SigninScreen');
  }


  return (
    <View style={styles.root}>
      <Text style={styles.title}>Confirm Your Email </Text>

      <CustomerInput placeholder="user name" value={username} setvalue={setUsername}/>
    
      <CustomButton text="send" onPress={onSendPressed}/>

       <CustomButton 
        text="Back To Sign In" 
        onPress={onSignInPressed}  
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
export default ForgotPassWord