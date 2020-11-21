import styled from 'styled-components/native';
import {colors , widthScreen , heightScreen} from '../../styles'

export const Container = styled.View`

width: ${widthScreen * 0.28}px;
height: ${heightScreen * 0.16}px;
border-radius: ${heightScreen * 0.01}px;
background: ${colors.GreyLight};

display:flex;
align-items:center;
justify-content:center;

margin: 0px 5px;
`;

export const Img = styled.Image`

width:50%;

`;
