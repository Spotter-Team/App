import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../../utils/theme';

export default function Settings() {
    const navigation = useNavigation();

    const settings = [
        { label: 'Account', icon: 'person', action: () => navigation.navigate('AccountInfo') },
        { label: 'Privacy Policy', icon: 'lock-closed', action: () => { } },
        { label: 'Terms and Conditions', icon: 'document-text', action: () => { } },
        { label: 'Contact', icon: 'mail', action: () => { } },
        { label: 'Feedback', icon: 'chatbox-ellipses', action: () => { } },
        { label: 'Logout', icon: 'log-out-outline', action: () => { } },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                <Text style={styles.header}>Settings</Text>

                {settings.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.row} onPress={item.action}>
                        <View style={styles.rowLeft}>
                            <Icon name={item.icon} size={20} color={COLORS.text} style={styles.icon} />
                            <Text style={styles.tabText}>{item.label}</Text>
                        </View>
                        <Icon name="chevron-forward" size={20} color={COLORS.text} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 20,
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        color: COLORS.text,
        alignSelf: 'center',
        marginBottom: 25,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.button,
        padding: 15,
        borderRadius: 12,
        marginBottom: 12,
    },
    rowLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 12,
    },
    tabText: {
        fontSize: 20,
        color: COLORS.text,
    },
});
