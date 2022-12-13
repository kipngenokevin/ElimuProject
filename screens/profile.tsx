import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import styles from "./profilestyles";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          //source={{ uri: "https://cdn.thecoolist.com/wp-content/uploads/2021/10/Superhero-comic-book.jpg",}}
          style={styles.profileSection}
        >
          <View style={styles.titleBar}>
            <Text style={styles.text}>Profile</Text>
          </View>
          <View style={styles.profileImage}>
            <Image
              source={{
                uri: "https://www.shutterstock.com/image-photo/cute-black-kid-boy-child-260nw-1648695016.jpg",
              }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        </View>
        <View style={styles.bodySection}>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
