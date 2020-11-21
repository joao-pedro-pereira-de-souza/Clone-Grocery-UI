import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native'

 export const state = [

   {
       key: 0,
       img: require('../image/basil.png'),
       bg: '#DEF4B6',
       color:'#A8E498',
       label: 'Basil',
       porcValue:'0%',
       descript:'Basil, (Ocimum basilicum), also called sweet basil, annual herb of the mint family (Lamiaceae), grown for its aromatic leaves. Basil is likely native to India and is widely grown as a kitchen herb. The leaves are used fresh or dried to flavour meats, fish, salads, and sauces; basil tea is a stimulant.',

       valor:'$12,00',
       quant:'1kilo',
   },

   {
       key: 1,
       img: require('../image/onion.png'),
       bg: '#FEE4D2',
       color:'#BD9771',
       label: 'Onion',
       porcValue:'0%',
       descript:'The onion (Allium cepa L., from Latin cepa "onion"), also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium. Its close relatives include the garlic, scallion, shallot, leek, chive, and Chinese onion.',

       valor:'$9,00',
       quant:'1,50kilo'
   },

   {
       key: 2,
       img: require('../image/bananas.png'),
       bg: '#FFEBAE',
       color:'#F9D438',
       label: 'Banana',
       porcValue:'0%',
       descript:'Banana, fruit of the genus Musa, of the family Musaceae, one of the most important fruit crops of the world. The banana is grown in the tropics, and, though it is most widely consumed in those regions, it is valued worldwide for its flavour, nutritional value, and availability throughout the year.',

       valor:'$8,00',
       quant:'2kilo',
   },

   {
       key: 3,
       img: require('../image/carrot.png'),
       bg: '#FCE097',
       color:'#FF981D',
       label: 'Carrot',
       porcValue:'0%',
       descript:'Carrot, Daucus carota, is an edible, biennial herb in the family Apiaceae grown for its edible root. The carrot plant produces a rosette of 8–12 leaves above ground and a fleshy conical taproot below ground. The plant produces small (2 mm) flowers which are white, red or purple in color. The root can grow to between 5 and 50 cm (2.0–20 in) long and reach 5 cm (2.0 in) in diameter. The foliage of the plant can reach a height of 150 cm (59.1 in) when in flower. The carrot plant can be annual or biennial and may also be referred to as wild carrot. The plant is believed to have originated in Europe or the Western Mediterranean.',
      
      valor:'$13,90',
      quant:'1,30kilo',
   },

 
   {
    key: 4,
    img: require('../image/strawberry.png'),
    bg: '#FFA07D',
    color:'#ee5253',
    label: 'Strawberry',

    porcValue:'50%',
    descript:'Strawberry, (genus Fragaria), genus of more than 20 species of flowering plants in the rose family (Rosaceae) and their edible fruit. Strawberries are native to the temperate regions of the Northern Hemisphere, and cultivated varieties are widely grown throughout the world.',

    valor:'$10,90',
    quant:'1kilo',
    
},


{
    key: 5,
    img: require('../image/broccoli.png'),
    bg: '#8AE899',
    color:'#27ae60',
    label: 'Basil',

    porcValue:'70%',
    descript:'Broccoli, Brassica oleracea, variety italica, form of cabbage, of the mustard family (Brassicaceae), grown for its edible flower buds and stalk. Native to the eastern Mediterranean and Asia Minor, sprouting broccoli was cultivated in Italy in ancient Roman times and was introduced to England and America in the 1700s.',

    valor:'$6,50',
    quant:'2kilo',

},

];

export const stateDescont = [


    {
        key: 4,
        img: require('../image/strawberry.png'),
        bg: '#FFA07D',
        color:'#ee5253',
        label: 'Strawberry',

        porcValue:'50%',
        descript:'Strawberry, (genus Fragaria), genus of more than 20 species of flowering plants in the rose family (Rosaceae) and their edible fruit. Strawberries are native to the temperate regions of the Northern Hemisphere, and cultivated varieties are widely grown throughout the world.',

        valor:'$10,90',
        quant:'1kilo',
        
    },
 

    {
        key: 5,
        img: require('../image/broccoli.png'),
        bg: '#8AE899',
        color:'#27ae60',
        label: 'Basil',

        porcValue:'70%',
        descript:'Broccoli, Brassica oleracea, variety italica, form of cabbage, of the mustard family (Brassicaceae), grown for its edible flower buds and stalk. Native to the eastern Mediterranean and Asia Minor, sprouting broccoli was cultivated in Italy in ancient Roman times and was introduced to England and America in the 1700s.',

        valor:'$6,50',
        quant:'2kilo',

    },

   
 ];
