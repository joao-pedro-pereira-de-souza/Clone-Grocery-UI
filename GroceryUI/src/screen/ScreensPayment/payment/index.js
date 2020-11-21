import React from 'react';
import {
  Container , 
  ContainerHeader , 
  ContainerTitulo , 
  ContainerCards , 
  ScrollCards , 
  ContainerInfos , 
  Label , 
  ContainerPayments , 
  ImgPaymentCard , 
  ContainerInfoPayment,
  ButtonFinish
} from './styles';
import { MaterialIcons} from '@expo/vector-icons';
import {colors ,  Title , Bold , heightScreen , widthScreen , ButtonToucha} from '../../../styles'
import CardMini  from '../../../component/CardMiniColumns/index';
import {state} from '../../../server/api';
import Header from '../../../component/headerArrow/index';
export default function payment({navigation}) {

  function ScreenShow (){
    navigation.navigate('HomeIndex');
  }

 return (

   <Container>

<Header route={2} navigation={navigation} titulo='Finish'/>

      <ContainerCards>

      <ScrollCards>

      {state.map((item) =>(
         <CardMini key={item.key} img={item.img} name={item.label} value={item.valor}/>
       ))}

      </ScrollCards>
      
      </ContainerCards>     

      <ContainerInfos>

        <Title style={{marginVertical: heightScreen * 0.005}}>form of payment</Title>

        <Label color={colors.GreyLightFont} style={{marginVertical: heightScreen * 0.008}}>
        Up to 12x without interest
        </Label>

        <Bold color={colors.yello} style={{marginVertical: heightScreen * 0.01}}>card</Bold>

        <Title style={{marginTop: heightScreen * 0.06}}>Payments</Title>
        
        <ContainerPayments>

          <ImgPaymentCard source={require('../../../image/mastercard.png')} resizeMode='contain'/>

          <ContainerInfoPayment>

            <Title>Payment</Title>

            <Label >
            payment completion in 10 minutes
            </Label>

          </ContainerInfoPayment>

        </ContainerPayments>

        <ButtonFinish>

          <Bold color='#fff'>Finish</Bold>

        </ButtonFinish>

      </ContainerInfos>
  
   </Container>

  );
}