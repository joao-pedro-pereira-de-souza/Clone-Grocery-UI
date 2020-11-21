import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenPayment from './payment/index';
import ScreenCart from './cart/index';
import ScreenProduto from '../produto/Index';
import ScreenCheckout from './checkout/index';

export default function ScreensPayment() {

    const Stack = createStackNavigator();

 return (
    <Stack.Navigator headerMode={false}>
           
           <Stack.Screen name='Cart' component={ScreenCart} />
           <Stack.Screen name='Checkout' component={ScreenCheckout}/>
           <Stack.Screen name='Payment' component={ScreenPayment}/>
          <Stack.Screen name='Produto' component={ScreenProduto} />

       </Stack.Navigator>
  );
}