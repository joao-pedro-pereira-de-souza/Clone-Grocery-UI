import styled from 'styled-components/native';
import { colors } from '../../styles';

export const Container = styled.TouchableOpacity`

width: 55px;
height: 55px;
border-radius:35px;

border-width:1px;
border-color: ${({focu}) => focu};

display:flex;
align-items:center;
justify-content:center;

background:#fff;
margin-bottom:10px;
  
`;

export const ContainerSearch = styled.View`

display:flex;
align-items:center;
justify-content:center;

width: 90%;
height: 90%;
border-radius: 27px;
background: ${colors.yello};

`;
