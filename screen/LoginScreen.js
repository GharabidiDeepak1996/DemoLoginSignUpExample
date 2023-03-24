
import React,{useState} from 'react';
import {View,Text,KeyboardAvoidingView,Image, StyleSheet, 
    TextInput, TouchableOpacity} from 'react-native';
// interface LoginScreen{
//   navigation: any
// }

const LoginScreen = ({navigation}) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [errorUserEmailText, setUserEmailError] = useState('');
    const [errorUserPasswordText, setUserPasswordError] = useState('')
    const [checkEmail,setCheckEmail] = useState(false)
    const [checkPassword,setCheckPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    
    // function userEmailInputHandler(enteredText){
    //     setUserEmail(enteredText)
    // }

    // function userPasswordInputHandler(enteredText){
    //     setUserPassword(enteredText)
    // }

    const handleSubmitPress = () => {
        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        
        if(userEmail.trim() == ""){
            setUserEmailError('Email Field canot be empty')
            setCheckEmail(true)
            return false
        }else if(!emailRegex.test(userEmail.trim())){
            setUserEmailError('Please enter valid email id.')
            setCheckEmail(true)
            return false
        }else if(userPassword.trim() == ""){
            setUserPasswordError('Password field cannot be empty')
            setCheckPassword(true)
            return false
        }else{
          navigation.navigate('RegistrationScreen')
            
          let dataToSend = {email: userEmail.trim(), password: userPassword.trim()};
            // let formBody = [];

            // for (let key in dataToSend) {
            //     let encodedKey = encodeURIComponent(key);
            //     let encodedValue = encodeURIComponent(dataToSend[key]);
            //     formBody.push(encodedKey + '=' + encodedValue);
            //   }
            //   formBody = formBody.join('&');
            ////////////////////////////////////
            setLoading(true);
            // fetch('',{
            //     method: 'POST',
            //     headers: {
            //       Accept: 'application/json',
            //       'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         params: dataToSend,
            //       })
            
            // }).then((response) => response.json())
            // .then((responseJson) =>{
            //      //Hide Loader
            //    setLoading(false);
            //    console.log(responseJson);

            // }).catch((error) =>{
            //     setLoading(false);
            //     console.error(error);
            // })

        }
    }
    return(
        <View style={styles.mainContainer}>
           <View style={styles.innerContainer}>
           <KeyboardAvoidingView enabled>
          
           <View style={{alignItems:'center'}}>
           <Image
            source={require('../image/aboutreact.png')}
            style={{ width: '50%',
            height: 100,
            resizeMode: 'contain',
           }}/>
           </View>

            <Text style={styles.labelText}>Email</Text>

            <TextInput 
            style={checkEmail == true ? styles.errorTextInput : styles.textInput}//Add boarder color for error
             placeholder='Enter your email id'
             placeholderTextColor="#ffffff"
             selectionColor={'white'}
             keyboardType='email-address'
             returnKeyType="next"
             //  blurOnSubmit={false}
         // onEndEditing
             onChangeText={(actualData) => {setUserEmail(actualData),setCheckEmail(false)}}
            />

             {checkEmail == true ? <Text>{errorUserEmailText}</Text> : null}  

            <Text style={styles.labelText}>Password</Text>

            <TextInput 
            style={ checkPassword == true ? styles.errorTextInput : styles.textInput}
            placeholder='Enter your password'
            placeholderTextColor="#ffffff"
            selectionColor={'white'}
            keyboardType='visible-password'
          //  blurOnSubmit={false}
         // onEndEditing
            secureTextEntry={true}
            returnKeyType="next"
            onChangeText={(actualData) => {setUserPassword(actualData),setCheckPassword(false)}} />

             {checkPassword == true ? <Text>{errorUserPasswordText}</Text> : null}  

          
             <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>


            <Text
                style={styles.registerTextStyle}
                onPress={() => navigation.navigate('RegistrationScreen')}>
                New Here ? Register
              </Text>

            </KeyboardAvoidingView>
           </View>
        </View>
    )
}

const styles=StyleSheet.create({
    mainContainer:{
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
       // marginRight:8,
        padding:8,
        borderRadius:10,
    },
    errorTextInput:{
        borderWidth:1,
        borderColor:'#FF0000',
       // marginRight:8,
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
      registerTextStyle: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
        padding: 10,
      },
})
export default LoginScreen
