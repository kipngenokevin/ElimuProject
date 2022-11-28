import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        alignItems: 'center'
    },
    image: {
        height: 75,
        aspectRatio: 16/9,
        resizeMode: 'cover',
        borderRadius: 4
    },
    titleContainer: {
        flex: 1,
        padding: 6,
        justifyItems: 'center'
    },
    title: {

    },
    duration: {
        color: '#6b6d6e',
        fontSize: 10
    },
    plot: {
        color: '#6b6b6b'
    }
    
})
export default styles;
