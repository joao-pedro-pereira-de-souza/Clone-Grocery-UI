import React from 'react';
import { Container , ContainerImg , Img , ContainerText} from './styles';
import { Bold , colors , Label} from '../../styles';

export default function cardProdText(props) {
 return (
   <Container>

     <ContainerImg bg={props.background || colors.GreyLight}>

       <Img source={props.img || require('../../image/image-gallery.png')} resizeMode='contain'/>

     </ContainerImg>

     <ContainerText>

      <Bold>{props.name || 'Titulo'}</Bold>

       <Label>

       {props.descript || 'Description'}
       
       </Label>

     </ContainerText>
       
   </Container>
  );
}