import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {useFonts ,Montserrat_500Medium , Montserrat_400Regular , Montserrat_300Light} from '@expo-google-fonts/montserrat';
import {Poppins_400Regular , Poppins_500Medium} from '@expo-google-fonts/poppins'
import { AppLoading } from 'expo'

import Index from './src/screen/Navigation'

export default function App() {

  let[fontloaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_400Regular,
    Poppins_400Regular,
    Montserrat_300Light, 
    Poppins_500Medium,

  })

  if(!fontloaded){
    return <AppLoading/>
  }
  return (
<>
      <StatusBar style="auto" />

      <Index/>

</>
  );
}
// Variavel para guardar o key do item selecionado, para carregar o item selecionado.


