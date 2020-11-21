import React,{useState} from 'react';
import { 
  
  Container,
  ContainerIlustration,
  ContainerTextIlustration,
  ImgIlustration,
  LabelDiscountIlustration,
  LabelNameIlistration,
  LabelDescriptIlustration,
  ContainerMiniCards,
  ContainerMiniCardsScroll,
  ContainerCardMax,
  ContainerCardsMax,
  ContainerCardText,

} 
from './styles';

import {Title} from '../../../styles';

import Header from '../../../component/header/index';
import CardMini from '../../../component/cardMini01/index';
import CardMax from '../../../component/cardMax01/index';
import CardText from '../../../component/cardProdText/index';

import {state} from '../../../server/api';
import ScreenProd from '../../produto/Index';
import { Modal } from 'react-native';

export default function home({navigation}) {

  const [isVisib , setIsVisib] = useState(false);

  const [selectItem , setSelectItem ] = useState(0);

 return (

   <Container>

        {/* component Top + Search */}
          <Header/>

          <ContainerIlustration>

              <ContainerTextIlustration>

                  <LabelDiscountIlustration>50%</LabelDiscountIlustration>

                  <LabelNameIlistration color='#fff'>

                    Cashback

                  </LabelNameIlistration>

                  <LabelDescriptIlustration>

                  ON  GROCERIs

                  </LabelDescriptIlustration>

            </ContainerTextIlustration>

            <ImgIlustration source={require('../../../image/imgIlus50off.png')} resizeMode='contain'/>

          </ContainerIlustration>

          <ContainerMiniCards >

              <ContainerMiniCardsScroll>

              {state.map((item) =>(

              <CardMini 
              key={item.key} 
              // Set variável para alterar o Visibli do Modal(Modal do Produtp).
              getVisib={setIsVisib} 
              //Set variável de Seleção de item para o Modal.
              getSelectItem={setSelectItem} 
              //ID do produto para guardar no setSelectItem no onPress do Card.
              keyProd={item.key} 
              // Confugurações Front Card.
              background={item.bg} 
              img={item.img} 
              color={item.color} 
              name={item.label}>

              </CardMini>
                
              ))}

              </ContainerMiniCardsScroll>

          </ContainerMiniCards>

          <ContainerCardMax>

              <Title >Verggies</Title>

              <ContainerCardsMax>

                {state.map((item) => {
                  
                  if (item.porcValue != '0%') {
                    return(
                    <CardMax  key={item.key} 
                    // Set variável para alterar o Visibli do Modal(Modal do Produtp).
                    getVisib={setIsVisib} 
                    //Set variável de Seleção de item para o Modal.
                    getSelectItem={setSelectItem} 
                    //ID do produto para guardar no setSelectItem no onPress do Card.
                    keyProd={item.key} 
                    // Confugurações Front Card. 
                    background={item.bg} img={item.img} color={item.color} name={item.label} porcentage={item.porcValue}/>
                    )
                  }

                } )}
               

           
              </ContainerCardsMax>

          </ContainerCardMax>
          
          <ContainerCardText>

            <CardText img={require('../../../image/carrot.png')} background={'#FFEABE'} name={'Carrot'} descript='fresh produce from the garden'/>

            <CardText img={require('../../../image/apple.png')} background={'#D6EBAF'} name={'Apple'} descript='prepared for the new harvest'/>

          </ContainerCardText>

          <Modal visible={isVisib}>

            <ScreenProd getVisib={setIsVisib} selectProd={selectItem} navigation={navigation}/>

          </Modal>
          
   </Container>


  );
}