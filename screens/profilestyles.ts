import { urlSafeDecode } from '@aws-amplify/core';
import {StyleSheet} from 'react-native'
import { green100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const styles = StyleSheet.create({
    container: {
        padding: 0,
        flex: 1,
    },
    text: {
        padding: 20,
        color: "#000",
        fontSize: 34,
        fontWeight: "bold"
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 24,
        marginHorizontal: 16
    },
    profileSection: {
        width: "100%",
        height: 300,
        alignSelf:"center",
        flex: 1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        backgroundColor: "#fff",
        
    },
    profileImage: {
        marginVertical: 10,
        alignSelf: "center",
        height:120,
        width: 120, 
        borderRadius: 200,
        overflow: "hidden",
        borderWidth: 1
    },
    image: {
        flex: 1,        
        width: undefined,
        height: undefined
    },
    bodySection: {
        backgroundColor: "#222323",
        borderRadius: 20,
        height: 500,
        marginHorizontal: 20,
        marginTop: -50
    },
    buttonSection: {
        marginTop: 100
    },
    playButton: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 7,
        textAlign: 'center',
        color: '#000000',
        alignSelf: 'center',
        width: 300,
        marginTop: 20
    },
    playButtonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 19,
        padding: 2
    },


})
export default styles;