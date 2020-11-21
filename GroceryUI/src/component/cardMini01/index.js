import React from 'react';
import { Container , ContainerItens , Img } from './styles';
import { Bold , colors} from '../../styles';

export default function cardMini01(props) {

  function ShowScreen(){

    props.getSelectItem(props.keyProd)
    props.getVisib(true)

  }

 return (
   <Container bg={props.background || colors.GreyLight} onPress={ShowScreen}>

     <ContainerItens>
       
      <Img source={props.img || require('../../image/image-gallery.png')} resizeMode='contain'/>

      <Bold color={props.color || colors.GreyDark}>{ props.name || 'sem titulo'}</Bold>

     </ContainerItens>


   </Container>
  );
}