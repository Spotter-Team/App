import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import SettingsHeader from '../../components/SettingsComponents/SettingsHeader';

const Settings = () => {
    return (
        <SafeAreaView style={styles.container}>
            <SettingsHeader />
            <ScrollView style={{ backgroundColor: 'black' }} contentContainerStyle={{ justifyContent: 'center',
        alignItems: 'center' }}>
                <Text style={styles.settingsText}>SETTINGS</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141417',
    },
    settingsText: {
        fontFamily: 'Bebas Neue',
        color: 'white',
        fontSize: 50,
        marginTop: '400',
    },
});

export default Settings;