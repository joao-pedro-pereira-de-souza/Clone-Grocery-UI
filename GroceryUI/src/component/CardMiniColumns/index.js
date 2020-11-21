import React from 'react';
import { Container , ContainerText , LabelValue} from './styles';
import {Bold , colors} from '../../styles';
import ContainerImg from  '../containerImg/index';

import { Ionicons } from '@expo/vector-icons';

export default function CardMiniColumns(props) {
 return (
   <Container>

       <ContainerImg img={props.img}/>

       <ContainerText>

           <Bold color={colors.GreyDark}>{props.name}</Bold>
           <LabelValue>{props.value}</LabelValue>

       </ContainerText>

   </Container>
  );
}