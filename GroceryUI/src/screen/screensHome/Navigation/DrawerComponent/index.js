import React from 'react';
import { DrawerContentScrollView , DrawerItem} from '@react-navigation/drawer';

import {Container , ContainerAvatar , Avatar , ContainerAvatarText , ContainerListButton , ConainerLabelBottom , LabelP} from './styles'
import {Bold,Label} from '../../../../styles';

import { AntDesign , EvilIcons , Octicons} from '@expo/vector-icons';

export default function DrawerComponent(props) {
 return (
   <DrawerContentScrollView {...props} style={{backgroundColor:'#FEC63E'}}>

                <Container>

                <ContainerAvatar>

                <Avatar source={require('../../../../image/perfilUser.png')} resizeMode='cover'/>

                <ContainerAvatarText>

                <Bold color='#fff'>Name User</Bold>
                <Label color='#f1f2f6'>Description</Label>

                </ContainerAvatarText>
                
                </ContainerAvatar>

                <ContainerListButton>

                <DrawerItem
                
                label='Home'
                labelStyle={{
                    color:'#fff',
                    marginLeft:-20
                    
                }}
                icon={({size}) => <AntDesign name='home' size={size} color={'#fff'}/>}
                onPress={() => props.navigation.navigate('Home')}
                
                />
                    <DrawerItem
                label='Location'

                labelStyle={{
                    color:'#fff',
                    marginLeft:-20
                    
                }}
                
                icon={({size}) => <EvilIcons name='location' size={size} color={'#fff'}/>}
                onPress={() => props.navigation.navigate('Location')}
                
                />
                    <DrawerItem
                label='Lista de produtos'
                labelStyle={{
                    color:'#fff',
                    marginLeft:-20
                }}

                icon={({size}) => <AntDesign name="shoppingcart" size={size} color="#fff" />}
                onPress={() => props.navigation.navigate('Search')}
                    
                />
                    <DrawerItem
                label='Curtidas'
                labelStyle={{
                    color:'#fff',
                    marginLeft:-20
                }}

                icon={({size}) => <AntDesign name="hearto" size={size} color="#fff" />}
                onPress={() => props.navigation.navigate('Star')}
                
                />
                    <DrawerItem
                label='Usuário'
                labelStyle={{
                    color:'#fff',
                    marginLeft:-20
                }}

                icon={({size}) => <AntDesign name="user" size={size} color="#fff" />}
                onPress={() => props.navigation.navigate('User')}
                
                />

                <DrawerItem
                label='Sair'
                labelStyle={{
                    color:'#fff',
                    marginLeft:-20
                }}

                icon={({size}) => <Octicons name="sign-out" size={size} color="#fff" />}
                onPress={() => props.navigation.navigate('User')}
                
                />

                </ContainerListButton>

                <ConainerLabelBottom>

                <LabelP style={{marginVertical:5}} color='#fff'>Doações para orfanatos</LabelP>
                <LabelP style={{marginVertical:5}} color='#fff'>Muito Obrigado pela visita</LabelP>
                <LabelP style={{marginVertical:5}} color='#fff'>www.lojaGrocery.com.br</LabelP>

                </ConainerLabelBottom>

                </Container>

   </DrawerContentScrollView>
  );
}