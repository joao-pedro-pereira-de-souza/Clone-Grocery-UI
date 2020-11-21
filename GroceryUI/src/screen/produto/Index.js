import React, {useState} from 'react';

import { Container , ContainerHeader , ContainerImg , Img ,  ContainerInfoProd , 
  ContainerDescription , ContainerButton , ButtonFinish , ContainerDiscount} from './styles';


import { colors , ButtonToucha , Bold , Title , Label , widthScreen} from '../../styles';
import { AntDesign , MaterialIcons} from '@expo/vector-icons';

import {state} from '../../server/api'

export default function produto(props) {

  const [isHeart , setIsHeart] = useState(false);

  const list = state[props.selectProd];

  function CheckOut(){

    props.navigation.navigate('Checkout')
    BackProd()

  }

  function ShowScreen(){
    
    props.navigation.navigate('PaymentScreen')
    BackProd()
  }

  let descontOpa = false

  if(list.porcValue == '0%'){

    descontOpa = false

  }
  else{

    descontOpa = true

  }
  
  function BackProd(){

    props.getVisib(false)
    
  }

  function IsHeartVisib(){

    setIsHeart((dataHeart) => !dataHeart)

  }

 return (

   <Container>

     <ContainerHeader>

        <ButtonToucha onPress={BackProd}>

        <MaterialIcons name="keyboard-arrow-left" size={widthScreen *0.06} color={colors.GreyDark} />

        </ButtonToucha>

            <Title>{list.label || 'Sem nome'}</Title>

        <ButtonToucha onPress={IsHeartVisib}>
        
          <AntDesign name={isHeart ? 'heart' : 'hearto'} size={widthScreen *0.06} color={isHeart ? '#e74c3c' : colors.GreyDark} />

        </ButtonToucha>
       
     </ContainerHeader>

     <ContainerImg>

       <ContainerDiscount opaco={ descontOpa ? 1 : 0} >
          <Bold color='#fff'>{ list.porcValue }</Bold>
       </ContainerDiscount>

        <Img source={ list.img || require('../../image/image-gallery.png')} resizeMode='contain'/>

     </ContainerImg>

     <ContainerInfoProd>

       <Bold color={colors.GreyLightFont}>{list.label || 'Sem nome'}</Bold>
       <Bold color={colors.GreyLightFont}>{ list.quant || '00' }</Bold>
       <Bold color={colors.GreyLightFont}>{list.valor || 'R$ 00,00'}</Bold>

     </ContainerInfoProd>

     <ContainerDescription>

       <Title color={colors.yello} style={{marginBottom:8}}>Description</Title>

       <Label>
       {list.descript || 'Sem Descrição'}
       </Label>

     </ContainerDescription>

     <ContainerButton>

       <ButtonFinish onPress={CheckOut}>

         <Bold color={colors.yello}>Finish</Bold>

       </ButtonFinish>

       <ButtonFinish bg={colors.yello} onPress={ShowScreen}>

          <Bold color='#fff'>ADD to Cart</Bold>

       </ButtonFinish>

     </ContainerButton>

   </Container>

  );

}