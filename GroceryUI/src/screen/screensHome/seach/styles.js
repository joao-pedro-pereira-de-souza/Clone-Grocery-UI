import styled from 'styled-components/native';
import {widthScreen} from '../../../styles'

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator:false
})`
  
background:#fff;
flex:1;
padding: ${widthScreen * 0.06}px;

`;

export const ContainerCardsMini = styled.ScrollView.attrs({
  horizontal:true,
  showsHorizontalScrollIndicator:false
})`

margin: 10px 0px;

`;

export const ContainerCards = styled.View`

  flex-direction:row;
  flex-wrap:wrap;
   padding-bottom:20px;
`;
