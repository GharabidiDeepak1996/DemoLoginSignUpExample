import React, {useState,useEffect} from 'react'
import {View, Image, ActivityIndicator, StyleSheet} from 'react-native'


// interface SplashScreenProps{
//     navigation: any
// }

const SplashScreen = ({navigation}) => {
    //state for activity animation
    const [animating, setAnimating] = useState(true)

    useEffect(() =>{
        setTimeout(() =>{
                setAnimating(false)
                navigation.navigate("Auth")
                //navigation.navigate("LoginScreen")
            },1000)
    })
    return(
        <View style={styles.container}>
            <Image
        source={require('../image/aboutreact.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}/>

        <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        //style={styles.activityIndicator}
      />
     
        </View>
    )
} 

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#307ecc'
    },
    activityIndicator:{
        alignItems:'center',
        height:80
    }
})
export default SplashScreen
