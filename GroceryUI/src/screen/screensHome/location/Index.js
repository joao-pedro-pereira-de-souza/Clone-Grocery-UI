import React from 'react';
import { View , TouchableOpacity} from 'react-native';

export default function location({navigation}) {
  
function teste(){
  navigation.navigate('Payment')
}

 return (
   <View>

     <TouchableOpacity style={{width:100, height:100, backgroundColor:'#000'}} onPress={teste}></TouchableOpacity>
     
   </View>
  );
}