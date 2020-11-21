
import styled from 'styled-components/native';
import { heightScreen , widthScreen , colors} from '../../../styles'


export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator:false
})`
  
  padding:25px;
  background:#fff;
  flex:1;

`;

//Styles Texts
export const LabelDiscountIlustration = styled.Text`

font-size:${ heightScreen * 0.047}px;
font-family:'Montserrat_500Medium';
color: #fff;

`;

export const LabelNameIlistration = styled.Text`

font-size:${ heightScreen * 0.029}px;

font-family: 'Montserrat_500Medium';
color: #fff;


`;

export const LabelDescriptIlustration = styled.Text`

font-size:${ heightScreen * 0.020}px;
font-family: 'Montserrat_300Light'
color: #fff;

`;
//

export const ContainerIlustration = styled.View`

margin:${heightScreen * 0.03}px 0;
flex-direction:row;
background: ${colors.yello};
border-radius: ${heightScreen * 0.01}px;
height:${heightScreen * 0.20}px;

overflow:hidden;
`;

export const ContainerTextIlustration = styled.View`

display:flex;
align-items:center;
justify-content:center;
text-align:center;

flex:1;

`;

export const ImgIlustration = styled.Image`

width:55%;
align-self:center;

`;

export const ContainerMiniCards = styled.View``;

export const ContainerMiniCardsScroll = styled.ScrollView.attrs({
  horizontal:true,
  showsHorizontalScrollIndicator:false
})``;

export const ContainerCardMax = styled.View`

margin: ${heightScreen * 0.01}px 0px;

`;
export const ContainerCardsMax = styled.View`

flex-direction:row;

`;

export const ContainerCardText = styled.View`

margin:${heightScreen * 0.01}px 5px;
flex-direction:row;
padding-bottom:${heightScreen * 0.06}px;

`;

