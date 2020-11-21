import React from 'react';
import { 
  Container ,
  ContainerCardScroll , 
  ContainerHeader , 
  ContainerTitulo , 
  ContainerFooter ,
  ContainerFooterText,
  ButtonCheckout

} from './styles';

import CardMini from '../../../component/CardMiniRows/index';
import {state} from '../../../server/api';
import Header from '../../../component/headerArrow/index';
import {Title, colors , ButtonToucha , widthScreen , StylesShadow , Bold , Label} from '../../../styles';

export default function cart({navigation}) {

  function ScreenShowHome (){
    navigation.navigate('HomeIndex');
  }

  function ScreenShow (){
    navigation.navigate('Checkout');
  }

 return (
   <Container>

    <Header route={0} navigation={navigation} titulo='Cart'/>

     <ContainerCardScroll>

       {state.map((item) =>(
         <CardMini key={item.key} img={item.img} name={item.label} value={item.valor}/>
       ))}

     </ContainerCardScroll>
     
     <ContainerFooter style={[StylesShadow.Shadow]}>

       <ContainerFooterText>

         <Label>Added value</Label>
         <Title color={colors.yello}>R$ 00,00</Title>

       </ContainerFooterText>

       <ButtonCheckout onPress={ScreenShow}>

         <Bold color='#fff'>Checkout</Bold>

       </ButtonCheckout>

     </ContainerFooter>
     
   </Container>
  );
}