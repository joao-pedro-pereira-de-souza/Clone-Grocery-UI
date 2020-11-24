import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ButtonTab from './Tab/index'
import ContentDrawer from './DrawerComponent/index';

const Drawer = createDrawerNavigator();

export default function Navigation() {
 return (
   <Drawer.Navigator drawerContent={props => 
   { 
       return<ContentDrawer {...props}/>
       
   }}>
       <Drawer.Screen name='Screens'>
           {props => <ButtonTab {...props}/>}
       </Drawer.Screen>
       
   </Drawer.Navigator>
  );
}