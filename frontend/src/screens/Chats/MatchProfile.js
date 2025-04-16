import { View, Text, Image, StyleSheet } from 'react-native';

const MatchProfile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.profileText}>
                Match Profile Screen
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileText: {
        color: 'white',
        fontFamily: 'Bebas Neue',
        fontSize: 50,
    }
});

export default MatchProfile;