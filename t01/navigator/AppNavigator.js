import React from 'react';
import  {createStackNavigator}  from '@react-navigation/stack';

import  Database  from "../pages/Database";
import  Googlelogin  from "../pages/GoogleLogin";
import Form from '../pages/Form'
import View from '../pages/View'
import ModifyView from '../pages/ModifyView'
import AxiosView from '../pages/AxiosView'


const Stack = createStackNavigator();


function AppNavigator(props) {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Database" component={Database} />
        <Stack.Screen name="Googlelogin" component={Googlelogin} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="View" component={View} />
        <Stack.Screen name="ModifyView" component={ModifyView} />
        <Stack.Screen name="AxiosView" component={AxiosView} />
      </Stack.Navigator>
    )
}

export default AppNavigator;