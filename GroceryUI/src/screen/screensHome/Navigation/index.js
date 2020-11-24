import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import ButtonTab from './Tab/index'
import ContentDrawer from './DrawerComponent/index';

const Drawer = createDrawerNavigator();

export default function Navigation() {

    const [progres , setProgres] = React.useState(new Animated.Value(0))
   
    const scale = Animated.interpolate(progres,{
  
        inputRange:[0,1],
        outputRange:[1,0.8]
  
    }) 
  
    const borderRadius =  Animated.interpolate(progres,{
  
        inputRange:[0,1],
        outputRange:[0 , 10]
  
    }) 
  
    const screensStyles =  { borderRadius, transform: [ {scale} ] };

 return (
   <Drawer.Navigator 

        drawerType='slide' 
        overlayColor='transparent' 
        drawerStyle={{width:"50%"}}
        contentContainerStyle={{flex:1}}
        drawerContentOptions={{
            activeBackgroundColor:'transparent',
            activeTintColor:'green',
            inactiveTintColor:'green'
        }}

        drawerContent={props => 
        { 
            setProgres(props.progress);
            return <ContentDrawer {...props}/>;
            
        }}
        
        sceneContainerStyle={{

            backgroundColor:'#FEC63E'

        }}>

       <Drawer.Screen name='Screens'>
           {props => <ButtonTab {...props} style={screensStyles}/>}
       </Drawer.Screen>

   </Drawer.Navigator>
  );
}