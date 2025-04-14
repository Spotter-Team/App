import { View, Text, StyleSheet } from 'react-native';

const Match = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Match Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        height: '100%',
    },
    text: {
        fontFamily: 'Bebas Neue',
        color: 'white',
        fontSize: 50,
    },
});

export default Match;
