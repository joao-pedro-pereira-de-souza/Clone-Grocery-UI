import React from 'react';

import { Entypo , AntDesign } from '@expo/vector-icons';

import { 
  
    ContainerTop,
    ContainerSeach,
    ContainerSeachInput,
    SeachInput,
    ButtonSeach,

  } from './styles';

  import{widthScreen , heightScreen , colors , ButtonToucha} from '../../styles'
  
export default function Header() {
 
 return (
      
     <>

    <ContainerTop>

          <ButtonToucha >

             <Entypo name="menu" size={widthScreen * 0.07} color={colors.GreyDark} />

          </ButtonToucha>

          <ButtonToucha>

             <AntDesign name="filter" size={widthScreen * 0.07} color={colors.GreyDark}/>

          </ButtonToucha>

     </ContainerTop>

     <ContainerSeach>

          <ContainerSeachInput>

                <ButtonToucha>

                  <AntDesign name="search1" size={ widthScreen * 0.05} color={colors.GreyDark}/>

                </ButtonToucha>

               <SeachInput placeholder='pesquisar' />

          </ContainerSeachInput>

          <ButtonSeach>
               <Entypo name="shopping-cart" size={ widthScreen * 0.058} color="white" />
          </ButtonSeach>

     </ContainerSeach>

     </>
  );
}