import { color } from 'react-native-reanimated';
import styled from 'styled-components/native';
import { widthScreen , heightScreen ,colors} from '../../styles';


export const Container = styled.TouchableOpacity`

display:flex;
align-items: center;
justify-content:center;

width: ${ widthScreen * 0.18}px;
height: ${ heightScreen * 0.10}px;
border-radius: ${ heightScreen * 0.008}px;
margin: 0px ${ widthScreen * 0.01}px ;

background: ${({bg})=>bg || colors.GreyLight};

`;

export const Img = styled.Image`

width: ${ widthScreen * 0.09}px;
height: ${ heightScreen * 0.05}px;
align-self:center;
margin-bottom:2px;
`;

export const ContainerItens = styled.View`

align-self:center;

`;