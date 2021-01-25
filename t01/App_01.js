/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect} from 'react';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
// import auth from '@react-native-firebase/auth';
import {Text,View,Image } from 'react-native';

//==============================================================
GoogleSignin.configure({
  webClientId : '690411860703-7pdv7tv0r9ugmqvh5fv6j9f0qaucg5c9.apps.googleusercontent.com' ,
  offlineAccess: true,
})

const App: () => React$Node = () => {

  const [googleInfo, setGoogleInfo] = React.useState();
  const [loaded , setLoaded] = React.useState(false);


   //==============================================================
   signIn = async()=>{
     try{
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn();
      
      setGoogleInfo(userInfo);
      setLoaded(true);
      
     }catch(error){
       console.log(error.message);
     }
   }
   //==============================================================

 
     return (
      <View>
          <GoogleSigninButton onPress={this.signIn}/>
          {loaded ?  
           <View>
             <Text>{googleInfo.user.name}</Text>
             <Text>{googleInfo.user.email}</Text>
             {/* <Image source={{uri:googleInfo.user.photo}}/> */}
             <Text>tttt</Text>
           </View>  :

          <Text>Not login</Text>
        }
      </View>
     ); 

}



export default App;
