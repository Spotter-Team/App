import { View, Text, StyleSheet } from 'react-native';

const MatchList = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.matchList}>
                MATCHES SCREEN
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 280
    },
    matchList: {
        fontFamily: 'Bebas Neue',
        color: 'white',
        fontSize: 50,
    },
});

export default MatchList;