import { StyleSheet, Image, FlatList, Button } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import * as React from 'react';
import { IconButton, MD3Colors } from 'react-native-paper';


import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View} from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

import styles from './styles';
import categories from '../../assets/data/categories';

const firstCategory = categories.items[0];

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    
    <View style={styles.container}>
      
        <View style={styles.heroSection}>
          <Image 
            style={styles.heroImage}
            source={{uri:'https://m.media-amazon.com/images/I/515sDuU241L._AC_SY580_.jpg'}}
          />            
      </View>
      <View style={styles.heroGrid}>
      <Grid>
       
        <Col>
          <IconButton 
            style={styles.heroButton}          
            icon="plus"
            iconColor={MD3Colors.neutral0}
            size={33.3}
            onPress={() => console.log('Pressed')}
          />
        </Col>
        <Col>
          <IconButton 
            style={styles.heroButton}          
            icon="play"
            containerColor={MD3Colors.error50}                  
            iconColor={MD3Colors.error100}            
            size={33.3}
            onPress={() => console.log('Pressed')}
          />
        </Col>
        <Col>
          <IconButton 
            style={styles.heroButton}          
            icon="information-outline"
            iconColor={MD3Colors.primary0}
            size={33.3}
            onPress={() => console.log('Pressed')}
          />
        </Col>        
        </Grid>
        </View>
        <View style={styles.categories}>
       <Text style={styles.title}>Popular on Elimu</Text>
      <FlatList
        data={firstCategory.movies}
        renderItem={({item}) => (         
          <Image style={styles.image} source={{uri: item.poster }}/>          
        )}
        horizontal
      />
      </View>
    </View>
  );
}
