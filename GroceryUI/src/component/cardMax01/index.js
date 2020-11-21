import React from 'react';
import {Bold , Label , colors} from '../../styles';
import { Container , Img, ContainerLeft , ButtonLeft} from './styles';

export default function cardMax01(props) {


  function ShowScreen(){

    props.getSelectItem(props.keyProd)
    props.getVisib(true)

  }
 return (
   <Container bg={props.background || colors.GreyLight} onPress={ShowScreen}>

       <Img source={props.img || require('../../image/image-gallery.png')} resizeMode='contain'/>

       <ContainerLeft>

           <Bold color={props.color || colors.GreyDark}>{ props.name || 'sem titulo'}</Bold>
           <ButtonLeft onPress={ShowScreen}>

           <Label color={props.color || colors.GreyDark}>{ props.porcentage || '0%'}</Label>

           </ButtonLeft>

       </ContainerLeft>

   </Container>
  );
}