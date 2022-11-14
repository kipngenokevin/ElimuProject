import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        padding:20,
        flex: 1
    },
    heroSection:{
        flex: 1,
    },
    heroImage: {
        flex: 1,
        borderRadius: 4,
        resizeMode: 'cover'
    },
    heroGrid: {
        padding: 20,
        height: 100,
    },
    heroButton:{
        width: 100,
        borderRadius: 8,    
        shadowColor: '#042'
        
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
        resizeMode: 'cover',
        borderRadius: 12
    }
});
export default styles;