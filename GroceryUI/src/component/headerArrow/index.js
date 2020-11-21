import React from 'react';
import { Container , ContainerText} from './styles';
import { MaterialIcons} from '@expo/vector-icons';
import {colors , widthScreen , ButtonToucha , Title} from '../../styles'

export default function headerArrow(props) {

  function RouteOptions(){

    switch(props.route){
      case 0:
        props.navigation.navigate('HomeIndex')
      break;
      case 1:

        props.navigation.navigate('Cart')
      break;
     
      case 2:
        props.navigation.navigate('Checkout')
      break;

      case 3:
        props.navigation.navigate('Payment')
      break;

    }
  }

 return (
   <Container>

         <ButtonToucha onPress={RouteOptions} style={{position:"absolute" , left:10}}>

           <MaterialIcons name="keyboard-arrow-left" size={widthScreen *0.06} color={colors.GreyDark} />

        </ButtonToucha>
        <Title >{props.titulo || 'Voltar'}</Title>

   </Container>
  );
}