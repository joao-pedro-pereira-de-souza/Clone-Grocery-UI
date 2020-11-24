import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { AntDesign , EvilIcons , Feather , FontAwesome5} from '@expo/vector-icons';

import ScreenHome from '../../home/Index';
import ScreenLocation from '../../location/Index';
import ScreenSearch from '../../seach/Index';
import ScreenStar from '../../star/Index';
import ScreenUser from '../../user/Index';

import ButtonSearch from '../../../../component/ButtonSearch/index';
import {colors} from '../../../../styles';

export default function screen() {

    const Tab = createBottomTabNavigator();
   
    const icons ={

        Home:{
          lab: AntDesign,
          name:'home',
        },
  
        Location:{
          lab: EvilIcons,
          name:'location',
        },
        Search:{
          lab: Feather,
          name:'search',
        },
      
        Star:{
          lab: AntDesign,
          name:'star',
        },
        User:{
            lab: FontAwesome5,
            name:'user-alt',
          },
   
      };

 return (
   
  <Tab.Navigator screenOptions={({ route , navigation}) =>({

    tabBarIcon: ({color , size , focused }) =>{

     if(route.name == 'Search')
     {
         return <ButtonSearch onPress ={ () => navigation.navigate('Search')} focused={focused}/>
     }

     const {lab:Icon , name} = icons[route.name];

     return <Icon name={name} color={color} size={size}/>

    }

     })} 
     
     tabBarOptions={{
       activeTintColor: colors.yello,

         style:{
           
           borderTopWidth:0,
           
           shadowColor: "#000",
           shadowOffset: {
             width: 80,
             height: 10,
           },
           shadowOpacity: 10,
           shadowRadius: 7.49,

           elevation: 12,
           
         }

     }} >

    <Tab.Screen name='Home' component={ScreenHome} />
    <Tab.Screen name='Location' component={ScreenLocation}/>
    <Tab.Screen name='Search' component={ScreenSearch} options={

        {
            title:''
        }
    }
    />
    
    <Tab.Screen name='Star' component={ScreenStar}/>
    <Tab.Screen name='User' component={ScreenUser} />

</Tab.Navigator>

  );

}