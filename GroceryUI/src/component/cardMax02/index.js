import React, {useState} from 'react';
import { Container , ContainerText , ContainerTop , Img   , ButtonPurchase} from './styles';

import {ButtonToucha , widthScreen , colors , Bold , Label} from '../../styles';

import { Entypo , AntDesign } from '@expo/vector-icons';

export default function cardMax02(props) {

  const [isHeart , setIsHeart] = useState(false);

  function IsHeartVisib(){

    setIsHeart((dataHeart) => !dataHeart)

  }

  function ShowScreen(){

    props.getSelectItem(props.keyProd)
    props.getVisib(true)

  }


 return (
   <Container>

     <ContainerTop>

       <ButtonToucha>

        <Entypo name="shopping-cart" size={ widthScreen * 0.058} color={ colors.GreyLightFont } />

       </ButtonToucha>

       <ButtonToucha onPress={IsHeartVisib}>
        
        <AntDesign name={isHeart ? 'heart' : 'hearto'} size={widthScreen *0.06} color={isHeart ? '#e74c3c' : colors.GreyLightFont } />

      </ButtonToucha>

     </ContainerTop>

     <Img source={props.img || require('../../image/image-gallery.png')} resizeMode='contain'/>

     <ContainerText>

 <Bold color={colors.GreyLightFont}> { props.name || 'Sem nome' } </Bold>
         <Label> {props.value || 'R$00,00'} </Label>

     </ContainerText>

     <ButtonPurchase onPress={ShowScreen}>

        <Bold color={colors.GreyLightFont}>Purchase</Bold>

     </ButtonPurchase>
     
   </Container>
  );
}