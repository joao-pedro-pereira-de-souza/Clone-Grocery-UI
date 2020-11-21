import React from 'react';
import {Container ,
   ContainerCardScroll , 
   ContainerFooter , 
   ContainerFrete , 
   ContainerInputSearch,
   InputSearchPoit , 
   ContainerFooterList ,
   ContainerFooterListText ,
   ButtonFooter
  } from './styles';

import {Title , colors , heightScreen , Bold} from '../../../styles'

import Header from '../../../component/headerArrow/index';
import CardMini from '../../../component/CardMiniRows/index';
import {state} from '../../../server/api';

export default function checkout({navigation}) {
  function ScreenShow (){
    navigation.navigate('Payment');
  }

 return (

  <Container>

      <Header route={1} navigation={navigation} titulo='Checkout'/>

      <ContainerCardScroll>

       {state.map((item) =>(
         <CardMini key={item.key} img={item.img} name={item.label} value={item.valor}/>
       ))}

     </ContainerCardScroll>

     <ContainerFooter>

        <Title style={{marginVertical:10}}>Order Teral</Title>

        <ContainerFrete>

          <ContainerInputSearch>

             <InputSearchPoit placeholder='put address' placeholderTextColor={colors.GreyLightFont}/>

          </ContainerInputSearch>    

          <ContainerFooterList>

            <ContainerFooterListText>

                <Bold>
                solid value
                </Bold>

                <Bold>
                  R$ 00,00
                </Bold>

              </ContainerFooterListText>

            <ContainerFooterListText>

                <Bold>
                Shipping cost
                </Bold>

                <Bold>
                  R$ 10,00
                </Bold>

              </ContainerFooterListText>

            <ContainerFooterListText>

                  <Bold>
                  amount
                  </Bold>

                  <Bold>
                    R$ 10,00
                  </Bold>

              </ContainerFooterListText>

          </ContainerFooterList>

        </ContainerFrete>

        <ButtonFooter onPress={ScreenShow}>

          <Bold color='#fff'>define place</Bold>

        </ButtonFooter>

     </ContainerFooter>

  </Container>

  );
}