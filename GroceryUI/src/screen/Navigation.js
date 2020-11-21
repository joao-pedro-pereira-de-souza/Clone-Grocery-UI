import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NaviHome from './screensHome/Navigation';
import NaviPayment from './ScreensPayment/Navigation'

export  const Stack = createStackNavigator();

export default function screen() {

 return (
   <NavigationContainer>

       <Stack.Navigator headerMode={false}> 
       
           <Stack.Screen name='HomeIndex' component={NaviHome} />
           <Stack.Screen name='PaymentScreen' component={NaviPayment}/>
           
       </Stack.Navigator>

   </NavigationContainer>
  );
}
