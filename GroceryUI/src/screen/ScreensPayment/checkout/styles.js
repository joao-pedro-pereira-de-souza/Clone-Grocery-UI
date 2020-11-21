import styled from 'styled-components/native';

import {heightScreen , colors} from '../../../styles'

export const Container = styled.SafeAreaView`
  flex:1;
  background:#fff;
  padding: 10px;
`;

export const ContainerCardScroll = styled.ScrollView.attrs({showsVerticalScrollIndicator:false})`
    
`;

export const ContainerFooter = styled.View`

width:100%;
height: ${ heightScreen * 0.48 }px;

`;

export const ContainerFrete = styled.View`

width:100%;
padding:${heightScreen * 0.03}px;
background: ${colors.GreyLight};
border-radius: ${heightScreen * 0.01}px;
margin:10px 0px;

`;

export const InputSearchPoit = styled.TextInput`

margin: 0px 8px;
flex:1;

`;

export const ContainerInputSearch = styled.View`

width:100%;
height: ${heightScreen * 0.06}px;
background:#fff;
border-radius:${heightScreen * 0.01}px;

`;

export const ContainerFooterList = styled.View`

margin-top:20px;

`;

export const ContainerFooterListText = styled.View`

flex-direction:row;
justify-content:space-between;
margin: 5px 0px;

`;

export const ButtonFooter = styled.TouchableOpacity`

width:90%;
height: ${heightScreen * 0.07}px;
border-radius: ${heightScreen * 0.03}px;

background: ${colors.yello};

display:flex;
align-items:center;
justify-content:center;

align-self:center;

`;