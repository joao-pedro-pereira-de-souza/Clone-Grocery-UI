import styled from 'styled-components/native';
import {widthScreen , heightScreen , colors } from '../../styles'

export const Container = styled.View`

width: ${widthScreen * 0.40}px;
height: ${heightScreen * 0.08}px;
margin: 0px 5px;
flex-direction:row;

`;

export const ContainerImg = styled.View`

background: ${({bg})=>bg || colors.GreyLight};
width: ${widthScreen * 0.13}px;
height: ${heightScreen * 0.08}px;
border-radius: ${heightScreen * 0.02}px;

display:flex;
align-items:center;
justify-content:center;


`;
export const Img = styled.Image`

width:55%;

`;
export const ContainerText = styled.View`
margin-left: 5px;
flex:1;
overflow:hidden;

`;