import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const GymHub = () => {
    return (
        <View style={styles.container}>
                    
            <Text style={styles.text}>
                Gym Hub Screen
            </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%',
        display: 'flex',
        justifyContent: 'center', alignItems: 'center' 
    },
    text: {
        fontFamily: 'Bebas Neue',
        color: 'white',
        fontSize: 50,
    }
});

export default GymHub;