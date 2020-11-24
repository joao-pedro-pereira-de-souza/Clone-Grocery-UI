import React,{useState} from 'react';
import {Modal} from 'react-native'
import { Container , ContainerCardsMini , ContainerCards} from './styles';

import Header from '../../../component/header/index';
import CardMini from '../../../component/cardMini01/index'
import CardMax from '../../../component/cardMax02/index';

import ScreenProd from '../../produto/Index';
import {state} from '../../../server/api';

export default function seach({navigation}) {

  const [isVisib , setIsVisib] = useState(false);

  const [selectItem , setSelectItem ] = useState(0);

 return (
   
   <Container>

     <Header navigation={navigation}/>

     <ContainerCardsMini>

     {state.map((item) =>(

      <CardMini 
      key={item.key} 
      //ID do produto para guardar no setSelectItem no onPress do Card.
      keyProd={item.key} 
      // Confugurações Front Card.
      background={item.bg} 
      img={item.img} 
      color={item.color} 
      name={item.label}>

      </CardMini>
        
      ))}

     </ContainerCardsMini>

     <ContainerCards>

          {state.map((item) => (
            
            <CardMax  key={item.key} 
                  // Set variável para alterar o Visibli do Modal(Modal do Produtp).
                getVisib={setIsVisib} 
                //Set variável de Seleção de item para o Modal.
                getSelectItem={setSelectItem} 
                //ID do produto para guardar no setSelectItem no onPress do Card.
                keyProd={item.key} 
                // Confugurações Front Card. 
                background={item.bg} img={item.img} name={item.label}
                
                value={item.valor}
                />

          ))}
         
      </ContainerCards>

      
      <Modal visible={isVisib}>

        <ScreenProd getVisib={setIsVisib} selectProd={selectItem} navigation={navigation}/>

      </Modal>
        
   </Container>
  );
}