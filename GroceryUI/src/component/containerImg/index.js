import React from 'react';
import { Container , Img} from './styles';

export default function cardMini02(props) {
 return (
    <Container>

        <Img source={props.img || require('../../image/image-gallery.png')} resizeMode='contain'/>

    </Container>
  );
}