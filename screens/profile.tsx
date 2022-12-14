import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  ImageBackground,
  Pressable,
} from "react-native";
import styles from "./profilestyles";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";

import { Auth } from "aws-amplify";

export default function App() {

  const onLogout = () =>{
      Auth.signOut();
  }

  const onEditProfile = () =>{
    Auth.configure();
  }

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
          <View style={styles.buttonSection}>
          <Pressable
            onPress={() => {
              Auth.currentUserInfo();
            }}
            style={styles.playButton}
          >
            <Text style={styles.playButtonText}>
              {" "}
              <FontAwesome name="gear" size={23} color="black" /> Edit Profile{" "}
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              console.warn("Play");
            }}
            style={styles.playButton}
          >
            <Text style={styles.playButtonText}>
              {" "}
              <FontAwesome name="heart" size={23} color="black" /> Favorites{" "}
            </Text>
          </Pressable>
          <Pressable
            onPress={onLogout}
            style={styles.playButton}
          >
            <Text style={styles.playButtonText}>
              {" "}
              <FontAwesome name="sign-out" size={23} color="black" /> Logout {" "}
            </Text>
          </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
