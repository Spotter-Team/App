import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AccountHeader = () => {

    const navigation = useNavigation();
    const handleBackBtnPress = () => navigation.goBack();

    return (
        <View style={styles.settingsHeaderContainer}>
            <TouchableOpacity onPress={() => handleBackBtnPress()}>
                <Ionicons name="chevron-back" size={25} style={styles.backButton}></Ionicons>                
            </TouchableOpacity>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Account</Text>
            </View>
            <View style={styles.placeHolder} ></View>
        </View>
    );
};

const styles = StyleSheet.create({
    settingsHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#141417',
        paddingTop: 3,
        paddingBottom: 10,
    },
    backButton: {
        color: '#B42B23',
        paddingLeft: 20,
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 15,
        fontWeight: 600,
        paddingRight: 20,
    },
    placeHolder: {
        paddingRight: 20,
    }
});

export default AccountHeader;