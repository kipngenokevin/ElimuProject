import {StyleSheet} from 'react-native'
import { green100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const styles = StyleSheet.create({
    image:{
        width: '100%',
        aspectRatio: 16/9,
        resizeMode: 'cover'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',

    },
    match: {
        color: '#19b328',
        fontWeight: 'bold',
        marginRight: 2,
        padding: 5
    },
    year: {
        color: '#757575',
        marginRight: 2,
        padding: 5
    },
    ageContainer: {
        backgroundColor: '#f3ff0f',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        paddingHorizontal: 3,
        marginRight: 2,
    },
    age: {
        color: 'black',
        fontWeight: 'bold'
    },
    //Buttons
    playButton: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 4,
        marginVertical: 5,
    },
    playButtonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 19,
        padding: 2
    },
    downloadButton: {
        backgroundColor: '#242423',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 4,
        marginVertical: 5,
    },
    downloadButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 19,
        padding: 2
    }

})
export default styles;