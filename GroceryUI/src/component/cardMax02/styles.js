import styled from 'styled-components/native';
import {colors , widthScreen , heightScreen} from '../../styles'

export const Container = styled.View`

width: ${ widthScreen * 0.401}px;
height: ${ heightScreen * 0.35}px;
border-radius:${ heightScreen * 0.01}px;
background: ${ colors.GreyLight };

margin: ${ widthScreen * 0.018}px ${ widthScreen * 0.018}px;
  
`;

export const ContainerTop = styled.View`

flex-direction: row;
justify-content:space-between;
padding: 16px  8px;
width:100%;

`;

export const Img = styled.Image`

width:60%;
height:35%;
align-self:center;

`;

export const ContainerText = styled.View`

width:100%;
display:flex;
align-items:center;
margin:4px 0px;

`;

export const ButtonPurchase = styled.TouchableOpacity`

margin:4px 0px;
width: 90%;
height: ${heightScreen * 0.045}px;
border-radius: ${heightScreen * 0.22}px;

background: #fff;

display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
align-self:center;

`;
