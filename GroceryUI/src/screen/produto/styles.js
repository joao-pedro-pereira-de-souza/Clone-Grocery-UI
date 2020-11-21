import styled from 'styled-components/native';
import {widthScreen , heightScreen , colors} from '../../styles';

export const Container = styled.ScrollView.attrs({
    showsVerticalScrollIndicator:false,
})`


background:#fff;

flex:1;
  
`;

export const ContainerHeader = styled.View`

flex-direction:row;
justify-content:space-between;
margin: 10px 0px;
align-items:center;

padding: 0px 25px;

`;

export const ContainerImg = styled.View`

margin: 4% 0px;

width: 90%;
height: ${heightScreen * 0.35}px;
border-radius: ${heightScreen * 0.01}px;
background: ${colors.GreyLight};

display:flex;
align-items:center;
justify-content:center;
align-self:center;

`;

export const Img = styled.Image`

width:70%;
height:70%;

`;

export const ContainerInfoProd = styled.View`

margin: 4% 0px;
width: 90%;
height: ${heightScreen * 0.10}px;
border-radius: ${heightScreen * 0.01}px;
background: ${colors.GreyLight};

display:flex;
align-items:center;
justify-content:space-between;
align-self:center;
padding: 0px 6%;
flex-direction:row;

`;
export const ContainerDescription = styled.View`

padding: 0px ${widthScreen * 0.06}px;
margin: 4% 0px;

`;

export const ContainerButton = styled.View`

padding: 0px ${widthScreen * 0.06}px;
margin: 4% 0px;

padding-bottom: ${widthScreen * 0.04}px;

`;

export const ButtonFinish = styled.TouchableOpacity`

margin: 2% 0px;

width: 100%;
height: ${heightScreen * 0.067}px;
border-radius: ${heightScreen * 0.037}px;

background: ${({bg}) => bg || colors.GreyLight};

display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
`;

export const ContainerDiscount = styled.View`

width:${heightScreen * 0.10}px;
height:${heightScreen * 0.10}px;
border-radius: ${heightScreen * 0.05}px; 

position:absolute;
top:-6%;
left:-3%;
background: ${colors.yello};

display:flex;
opacity:${({opaco}) => opaco};
align-items:center;
justify-content:center;

`;
