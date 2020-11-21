import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native'

import { Montserrat_400Regular , Montserrat_600SemiBold} from '@expo-google-fonts/montserrat'

import { Poppins_400Regular } from '@expo-google-fonts/poppins';


export const widthScreen = Dimensions.get('window').width;
export const heightScreen = Dimensions.get('window').height;

export const colors = {
    
    yello: '#FEC63E',
    GreyLight:'#F0F4F8',
    GreyDark : '#3F3D56',
    GreyLightFont: '#748A9D'
    
}


export const Bold = styled.Text`

font-size:${ heightScreen * 0.02}px;
font-weight:bold;
color: ${ ({color}) => color || colors.GreyDark};
font-family : 'Poppins_500Medium';

`;

export const Title = styled.Text`

font-family : 'Poppins_500Medium';
font-size:${ heightScreen * 0.030}px;
font-weight:bold;
color: ${({color}) => color || colors.GreyDark};

`;

export const Label = styled.Text`

font-size:${ heightScreen * 0.02}px;
color: ${ ({color}) => color || colors.GreyLightFont};
font-family: 'Montserrat_400Regular';

`;

export const ButtonToucha = styled.TouchableOpacity``;

export const StylesShadow = StyleSheet.create({
    Shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.48,
        shadowRadius: 16.00,

        elevation: 24,
    }
})