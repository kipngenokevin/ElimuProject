import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        padding:10,
        flex: 1,
    },
    heroSection:{
        height:'20%',
        //padding:20,
    },
    heroImage: {
        height: 200,
        borderRadius: 4,
        resizeMode: 'cover',
    },
    categories:{
         padding: 10
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        padding: 2
    },
    image: {
        margin: 2,        
        width: 120,
        height: 160,
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 12
    }
});
export default styles;