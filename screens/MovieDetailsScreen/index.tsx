import React, { useState } from "react";
import { Image, Pressable, FlatList } from "react-native";
import { Text, View } from "../../components/Themed";
import styles from "./styles";
import { Picker } from "@react-native-picker/picker";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";

import movie from "../../assets/data/movie";
import EpisodeItem from "../../components/EpisodeItem";
import VideoPlayer from "../../components/VideoPlayer";

const firstSeason = movie.seasons.items[0];
const firstEpisode = firstSeason.episodes.items[0];

const MovieDetailsScreen = () => {

  const [currentSeason, setCurrentSeason] = useState(firstSeason)
  const [currentEpisode, setCurrentEpisode] = useState(firstSeason.episodes.items[0]);
  const SeasonNames = movie.seasons.items.map(season => season.name);

  return (
    <View>
      <VideoPlayer episode={currentEpisode} />

      {/* Episode item*/}
      <FlatList
        data={currentSeason.episodes.items}
        renderItem={({ item }) => 
          (<EpisodeItem episode={item} 
          onPress={setCurrentEpisode}/>)}        
        style={{ marginBottom: 250 }}
        ListHeaderComponent={
          <View style={{ padding: 12 }}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.match}>98% Match</Text>
              <Text style={styles.year}>{movie.year}</Text>
              <View style={styles.ageContainer}>
                <Text style={styles.age}>12+</Text>
              </View>
              <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
              <MaterialIcons name="hd" size={24} color="black" />
            </View>

            {/* Play Button */}
            <Pressable
              onPress={() => {
                console.warn("Play");
              }}
              style={styles.playButton}
            >
              <Text style={styles.playButtonText}>
                {" "}
                <FontAwesome name="play" size={19} color="black" /> Play{" "}
              </Text>
            </Pressable>
            {/* Download Button */}
            <Pressable
              onPress={() => {
                console.warn("Download");
              }}
              style={styles.downloadButton}
            >
              <Text style={styles.downloadButtonText}>
                {" "}
                <Octicons name="download" size={24} color="white" />
                {""} Download{" "}
              </Text>
            </Pressable>
            <Text style={{ marginVertical: 7 }}>{movie.plot}</Text>
            <Text style={styles.year}>Cast: {movie.cast}</Text>
            <Text style={styles.year}>Creator: {movie.creator}</Text>

            {/*Row with Icon Buttons */}
            <View style={{ flexDirection: "row", marginTop: 12 }}>
              <View style={{ alignItems: "center", marginHorizontal: 30 }}>
                <AntDesign name="plus" size={30} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>My List</Text>
              </View>

              <View style={{ alignItems: "center", marginHorizontal: 30 }}>
                <Feather name="thumbs-up" size={30} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Rate</Text>
              </View>

              <View style={{ alignItems: "center", marginHorizontal: 30 }}>
                <FontAwesome name="send-o" size={24} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Share</Text>
              </View>
            </View>
            <Picker
              style={{color: 'white', width:'40%' }}  
              dropdownIconColor={'white'}
              dropdownIconRippleColor={'white'}
              mode = {'dropdown'}
              selectedValue={currentSeason.name}
              onValueChange={(itemValue, itemIndex) => {
                setCurrentSeason(movie.seasons.items[itemIndex])
              }}>
                {SeasonNames.map(seasonName=>(
                  <Picker.Item label={seasonName} value={seasonName} key={seasonName} />
                ))}  
                           
            </Picker>
          </View>
        }
      />
    </View>
  );
};

export default MovieDetailsScreen;
