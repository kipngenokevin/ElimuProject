import { StyleSheet, Image, FlatList, Button } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import * as React from "react";
import { IconButton, MD3Colors } from "react-native-paper";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View,  } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";

import styles from "./styles";
import categories from "../../assets/data/categories";
import HomeCategory from "../../components/HomeCategory";


const firstCategory = categories.items[0];

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container}>
       
      
        {/*List of categories*/}
          <FlatList style={styles.container}
            data={categories.items}
            renderItem={({item}) =><HomeCategory category={item}/>}
          />
        
      
    </View>
  );
}
