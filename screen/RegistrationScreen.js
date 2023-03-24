import React,{useState} from "react";
import {View, Text, Button,StyleSheet, Image, ScrollView,TouchableOpacity, KeyboardAvoidingView, TextInput} from 'react-native'

const RegistrationScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userAddress, setUserAddress] = useState('');

  const [errorUserEmailText, setUserEmailError] = useState('')
  const [errorUserNameText, setUserNameError] = useState('')
  const [errorUserAgeText, setUserAgeError] = useState('')
  const [errorUserAddress, setUserAddressError] = useState('')

  const [checkEmail,setCheckEmail] = useState(false)
  const [checkName,setCheckName] = useState(false)
  const [checkAge, setCheckAge] = useState(false)
  const [checkAddress, setCheckAddress] = useState(false)

  const [loading, setLoading] = useState(false)

  const handleSubmitPress = () => {
    if(userEmail.trim() == ''){
      setUserEmailError('Please enter email id')
      setCheckEmail(true)
    }else if(userName.trim() == ''){
      setUserNameError('Please enter user name')
      setCheckName(true)
    }else if(userAge.trim() == ''){
      setUserAgeError('Please enter age')
      setCheckAge(true)
    }else if(userAddress.trim() == ''){
      setUserAddressError('Please enter address')
      setCheckAddress(true)
    }else{
      navigation.navigate("DrawerNavigationRoutes")
      // navigation.replace(
      //   value === null ? 'Auth' : 'DrawerNavigationRoutes'
      // )
     // navigation.navigate('DrawerNavigationRoutes')
    }
  }
    return (
        <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
        <View style={{alignItems:'center'}}>
           <Image
            source={require('../image/aboutreact.png')}
            style={{ width: '50%',
            height: 100,
            resizeMode: 'contain',
           }}/>
           </View>

           <Text style={styles.labelText}>Name</Text>
           <TextInput
            style={checkName == true ? styles.errorTextInput : styles.textInput}
             placeholder='Enter your name'
             placeholderTextColor="#ffffff"
             selectionColor={'white'}
             keyboardType='default'
             returnKeyType='next'
             onChangeText={(actualData) =>{setUserName(actualData), setCheckName(false)}}
           />
           {checkName == true ? <Text>{errorUserNameText}</Text> : null}

           <Text style={styles.labelText}>Email</Text>
           <TextInput 
            style={checkEmail == true ? styles.errorTextInput : styles.textInput}
             placeholder='Enter your email id'
             placeholderTextColor="#ffffff"
             selectionColor={'white'}
             keyboardType='email-address'
             returnKeyType="next"
             onChangeText={(actualData) => {setUserEmail(actualData),setCheckEmail(false)}}
            />
             {checkEmail == true ? <Text>{errorUserEmailText}</Text> : null}

            <Text style={styles.labelText}>Age</Text>
            <TextInput
             style={checkAge? styles.errorTextInput: styles.textInput}
            placeholder="Enter your age"
            placeholderTextColor='#ffffff'
            selectionColor={'white'}
            keyboardType='default'
            returnKeyType="next"
            onChangeText={(actualData) => {setUserAge(actualData), setCheckAge(false)}}
            />
             {checkAge == true ? <Text>{errorUserAgeText}</Text> : null}

            <Text style={styles.labelText}>Address</Text>
            <TextInput
             style={checkAddress? styles.errorTextInput : styles.textInput}
            placeholder="Enter your address"
            placeholderTextColor='#FFFFFF'
            selectionColor={'white'}
            keyboardType='default'
            returnKeyType="next"
            onChangeText={(actualData) => {setUserAddress(actualData), setCheckAddress(false)}}
            />
             {checkAddress == true ? <Text>{errorUserAddress}</Text> : null}

             <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>Register</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
   mainContainer:{
    flex:1,
    backgroundColor:'#307ecc',
        width:'100%',
        height:'100%',
        justifyContent: 'center',
   },
   innerContainer:{
    marginLeft:35,
    marginRight:35,  
},
labelText:{
  color:'#FFFFFF',
  fontSize:16,
  fontWeight:'bold',
  marginTop:10
},
textInput:{
  borderWidth:1,
  borderColor:'#cccccc',
  padding:8,
  borderRadius:10,
},
errorTextInput:{
  borderWidth:1,
  borderColor:'#FF0000',
  padding:8,
  borderRadius:10,
},
buttonStyle: {
  backgroundColor: '#7DE24E',
  borderWidth: 0,
  color: '#FFFFFF',
  borderColor: '#7DE24E',
  height: 40,
  alignItems: 'center',
  borderRadius: 30,
  marginLeft: 35,
  marginRight: 35,
  marginTop: 20,
  marginBottom: 25,
},
buttonTextStyle: {
  color: '#FFFFFF',
  paddingVertical: 10,
  fontSize: 16,
  fontWeight:'bold'
},
})

export default RegistrationScreen

