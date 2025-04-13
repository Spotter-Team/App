import { View, Text, StyleSheet } from 'react-native';

const Settings = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.settingsText}>SETTINGS</Text>
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
    settingsText: {
        fontFamily: 'Bebas Neue',
        color: 'white',
        fontSize: 50,
    },
});

export default Settings;