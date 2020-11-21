import styled from 'styled-components/native';
import {widthScreen , heightScreen , colors} from '../../styles';

export const Container = styled.View`

width: ${widthScreen * 0.40}px;
height: ${heightScreen * 0.25}px;
border-radius: ${heightScreen * 0.018}px;

background: ${({bg})=>bg || colors.GreyLight};
display:flex;
align-items:center;
margin: 16px 8px;

  
`;

export const Img = styled.Image`
margin-top: ${heightScreen * 0.02}px;
margin-bottom: ${heightScreen * 0.01}px;
width: ${widthScreen * 0.22}px;
height: ${heightScreen * 0.12}px;


`;

export const ContainerLeft = styled.View`

align-self:flex-start;
margin-left:${widthScreen * 0.03}px;

`;

export const ButtonLeft = styled.TouchableOpacity`

display:flex;
align-items :center;
justify-content:center;
background: #fff;
height: ${ heightScreen * 0.034}px;
width:${ widthScreen * 0.20}px;
border-radius: 20px;
margin-top:10px
    
`;
