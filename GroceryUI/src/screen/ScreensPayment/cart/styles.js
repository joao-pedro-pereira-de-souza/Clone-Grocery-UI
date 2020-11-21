import styled from 'styled-components/native';

import {heightScreen , colors} from '../../../styles'

export const Container = styled.SafeAreaView`

flex:1;
background:#fff;
  
`;


export const ContainerCardScroll = styled.ScrollView.attrs({showsVerticalScrollIndicator:false})`
    padding: 10px;
`;

export const ContainerFooter = styled.View`
width:100%;
height: ${ heightScreen * 0.14 }px;
background:#fff;
flex-direction:row;

display:flex;
align-items:center;
justify-content: space-around;

`;

export const ContainerFooterText = styled.View`

flex-direction:column;

`;

export const ButtonCheckout = styled.TouchableOpacity`

width:40%;
height: ${heightScreen * 0.07}px;
border-radius: ${heightScreen * 0.05}px;
background: ${colors.yello};

display:flex;
align-items:center;
justify-content:center;


`;