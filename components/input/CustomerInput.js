import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'

const CustomerInput = ({value,setvalue,placeholder,secureTextEntry}) => {
  return (
    <View style={styles.container}>
     <TextInput 
        value={value}
        onChangeText={setvalue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
     />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
      backgroundColor:'#FFFFFF',
      borderColor:'#e8e8e8',
      borderWidth:2,
      paddingHorizontal:10,
      marginVertical:5,
      width:'80%',
      height:50,
      padding:10,
      marginTop:10,
      alignItems:'center',
      justifyContent:'center',

    },
    input:{
    }
  });

export default CustomerInput