import React from 'react';
import { Container , ContainerInfo , LabelTitle , ContainerControl} from './styles';

import {colors , ButtonToucha , Label , Bold } from '../../styles';

import { Entypo , Ionicons} from '@expo/vector-icons';

import ContainerImg from  '../containerImg/index';

export default function CardMiniRows(props) {
 return (
   <Container>
        <ContainerImg img={props.img}/>

        <ContainerInfo>

            <LabelTitle>{props.name || 'sem titulo'}</LabelTitle>

            <Label color={colors.yello}>{ props.value || 'R$00,00'}</Label>

            <ContainerControl>

                <ButtonToucha>

                  <Ionicons name="ios-add" size={24} color={colors.GreyLightFont} />

                </ButtonToucha>

                <Bold color={colors.GreyDark}>Cart</Bold>

                <ButtonToucha>

                   <Entypo name="minus" size={24} color={colors.GreyLightFont} />

                </ButtonToucha>

            </ContainerControl>

        </ContainerInfo>

   </Container>
  );
}