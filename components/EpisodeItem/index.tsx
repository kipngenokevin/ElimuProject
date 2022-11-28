import { Text, View } from "../../components/Themed";
import { Image, Pressable } from 'react-native';
import React from 'react';
import styles from "./styles";
import { Octicons } from "@expo/vector-icons";
import { Episode } from "../../types";


interface EpisodeItemProps{
    episode: Episode;
    onPress: (episode: Episode) => {

    }
}

const EpisodeItem = (props: EpisodeItemProps) => {
    const {episode, onPress} = props;
    return (
        <Pressable style={{margin: 20 }} onPress={() => onPress(episode)}> 
            <View style={styles.row}>
                <Image style={styles.image} source={{ uri: episode.poster }}></Image>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{episode.title}</Text>
                    <Text style={styles.duration}>{episode.duration}</Text>
                </View>
                <Octicons name="download" size={24} color="white"/>
            </View>
            <Text style={styles.plot}>{episode.plot}</Text>
        </Pressable>
    );
};
export default EpisodeItem;