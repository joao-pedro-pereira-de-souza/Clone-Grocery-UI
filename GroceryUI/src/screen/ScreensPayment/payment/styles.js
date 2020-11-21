import styled from 'styled-components/native';
import  {widthScreen , heightScreen , colors} from '../../../styles'

export const Container = styled.View`
flex:1;
background:#fff;
padding:25px;

`;

export const ContainerCards = styled.View`

margin: 10px 0px;

`;

export const ContainerHeader = styled.View`

display:flex;
width:100%;
flex-direction:row;
margin: 10px 0px;
align-items:center;

`;

export const ContainerTitulo = styled.View`
flex:1;
align-items:center;

`;

export const ScrollCards = styled.ScrollView.attrs({
    showsHorizontalScrollIndicator:false,
    horizontal:true,
})``;

export const ContainerInfos = styled.View`

padding-top: ${heightScreen * 0.06}px;

`;

export const Label = styled.Text`

font-size: ${heightScreen * 0.025}px;
color: ${colors.GreyDark};

`;

export const ContainerPayments = styled.View`

flex-direction:row;
width:100%;
display:flex;
align-items:center;

`;

export const ImgPaymentCard = styled.Image`

width:15%;

`;
export const ContainerInfoPayment = styled.View`
flex:1;
flex-direction:column;
margin: 0px 9px;

`;

export const ButtonFinish = styled.TouchableOpacity`

 width:90%;
 height:13%;
 border-radius: ${heightScreen *0.10}px;
 background: ${colors.yello};

 display:flex;

 align-items:center;
 justify-content:center;
 align-self:center;

`;


