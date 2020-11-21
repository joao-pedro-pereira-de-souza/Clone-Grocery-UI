import React from 'react';
import { Container , ContainerSearch} from './styles';
import { colors } from '../../styles'
import { Feather } from '@expo/vector-icons';

export default function ButtonSearch({onPress , focused}) {
 return (
     <Container onPress={onPress}  focu={focused ?  colors.yello : "#fff" }>

         <ContainerSearch >

         <Feather name="search" size={24} color="#fff" />

         </ContainerSearch>

     </Container>
   
  );
}