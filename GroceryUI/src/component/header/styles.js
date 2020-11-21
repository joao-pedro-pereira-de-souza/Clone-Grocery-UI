import styled from 'styled-components/native';
import {colors , heightScreen} from '../../styles'

export const ContainerTop = styled.View`
  
  flex-direction:row;
  justify-content:space-between;
  margin:${heightScreen * 0.02}px 0;
  
`;

export const ContainerSeach = styled.View`

margin: ${heightScreen * 0.01}px 0px;
justify-content:space-between;
flex-direction:row;

`;

export const ContainerSeachInput = styled.View`

display:flex;
align-items:center;
flex-direction:row;

width:81%;
height: ${heightScreen * 0.08}px;
padding: 0px 10px;

background:  ${colors.GreyLight};
border-radius: ${heightScreen * 0.01}px;

`;

export const SeachInput = styled.TextInput`
margin-left: 10px;
overflow:hidden;
font-size: ${heightScreen * 0.02}px;
`;

export const ButtonSeach = styled.TouchableOpacity`

margin-left:10px;
background: ${colors.yello};
flex:1;

display:flex;
align-items:center;
justify-content:center;
border-radius: ${heightScreen * 0.01}px;

`;
