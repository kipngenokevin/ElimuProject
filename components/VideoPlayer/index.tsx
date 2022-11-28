import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Episode } from '../../types'
import { Playback } from 'expo-av/build/AV'
import { Video, AVPlaybackStatus } from 'expo-av';
import styles from './styles';
import { unloadAsync } from 'expo-font';



interface VideoPlayerProps {
    episode: Episode
}

const VideoPlayer = (props: VideoPlayerProps) => {
    const {episode} = props;
    const video = useRef<Playback>(null);
    const [status, setStatus] = useState({});

    useEffect(()=>{
        if(!video){
            return;
        }
        (async () => {
            await video?.current?.unloadAsync()
            await video?.current?.loadAsync(
                {uri: episode.video},
                {},
                false

            )
        })();
    }, [episode])

    return (
        
        <Video
            ref={video}
            style={styles.video}
            source={{
             uri: episode.video,
            }}
            posterStyle = {{
                resizeMode: 'cover'
            }}
            usePoster = {true}
            useNativeControls
            posterSource={{
                uri: episode.poster,
            }}
            resizeMode="contain"
            onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        
    )
}

export default VideoPlayer;