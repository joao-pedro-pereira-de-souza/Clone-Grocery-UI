import { color } from 'react-native-reanimated';
import styled from 'styled-components/native';
import {colors , widthScreen , heightScreen} from '../../styles';

export const Container = styled.View`

width:100%;
flex-direction:row;

margin: ${heightScreen * 0.02}px 0px;
  
`;

export const ContainerInfo = styled.View`

flex-direction:column;
flex:1;
margin:0px ${widthScreen * 0.05}px;
`;

export const LabelTitle = styled.Text`

font-size:${widthScreen * 0.04}px;
color: ${colors.GreyDark};
font-family: 'Poppins_500Medium';

`;

export const ContainerControl = styled.View`

position: absolute;
bottom:10px;

background: ${colors.GreyLight}; 

width:${widthScreen * 0.36}px;
height: ${heightScreen * 0.06}px;
border-radius: ${widthScreen * 0.02}px;
padding: 0px ${widthScreen * 0.02}px;

display:flex;
align-items:center;
justify-content:space-between;
flex-direction:row;

`;

