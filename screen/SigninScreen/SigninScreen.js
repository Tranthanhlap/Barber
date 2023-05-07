import {StyleSheet, View, Text ,Image,Alert} from 'react-native'
import React,{useState} from 'react'
import logo from '../../assets/Image/barbershop-logo.webp'
import CustomerInput from '../../components/input'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import {initializeApp } from 'firebase/app';
import {firebaseConfig} from '../../firebase-config'


const SigninScreen = () => {

  const [username,setUsername] = React.useState('');
  const [password,setPassword] = React.useState('');
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () =>{
    createUserWithEmailAndPassword (auth,username,password)
    .then ((userCredential)=>{
      console.log('account created')
      const user = userCredential.user;
      console.log(user)
    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message)
    })
  }
  const handleSignIn= () =>{
    signInWithEmailAndPassword (auth,username,password)
    .then ((userCredential)=>{
      console.log('Sign in')
      const user = userCredential.user;
      console.log(user)
      navigation.navigate('tabb')
    })
    .catch(error => {
      console.log(error)
    })
  }




  // const {height}=useWindowDimensions();


  const onSignInPressed = () =>{
    navigation.navigate('tabb');
  }

  const onForgotThePasswordPressed = () =>{
    navigation.navigate('ForgotPassWord');
  }

  const onSignInGoogle = () =>{
    console.warn("Sign in");
  }

  const onSignInFacbook = () =>{
    console.warn("Sign in");
  }

  const onSignUpPressed = () =>{
    navigation.navigate('SignUpScreen');
  }

  return (
    <View style={styles.root}>
      <Image source={logo} 
      // style={[styles.logo,{height:height*0.3}]} resizeMode="contain"/>
      style={[styles.logo]} resizeMode="contain"/>
      <Text style={styles.text1}>Email</Text>
      <CustomerInput placeholder="example@gmail.com" value={username} setvalue={setUsername} secureTextEntry={false}/>
      <Text style={styles.text1}>Password</Text>
      <CustomerInput placeholder="Password" value={password} setvalue={setPassword} secureTextEntry={true}/>
    
      {/* <CustomButton onPress={signInWithEmailAndPassword} text="Sign In" /> */}
      <CustomButton onPress={handleSignIn} text="Sign In" />
      <CustomButton 
        text="Forgot the password" 
        onPress={onForgotThePasswordPressed} 
        type="TERTIARY"
      />
      {/* <CustomButton text="Sign In Google" onPress={onSignInGoogle} bgColor='#E7EAF4' fgColor='red'/> */}
      <CustomButton onPress={handleCreateAccount} text="Sign In Google" bgColor='#E7EAF4' fgColor='red'/>
      <CustomButton text="Sign In Facebook" onPress={onSignInFacbook} bgColor='#E7EAF4' fgColor='blue'/>

      <CustomButton 
        text="Don't Have An Account ? Creat one" 
        onPress={onSignUpPressed} 
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
  text1:{
    fontSize:24,
    fontWeight:'bold',
    color:'black',
    margin:10,
}
});
export default SigninScreen