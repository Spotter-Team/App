import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ChatHeader = () => {
    return (
        <View style={styles.chatHeaderContainer}>
            <Ionicons name="chevron-back" size={25} style={styles.backButton}></Ionicons>
            <View style={styles.userInfoContainer}>
                <Image source={require('../../mock/Chats/pfp/haley.jpg')} style={styles.userAvatar}></Image>
                <Text style={styles.userName}>Haley Smith</Text>
            </View>
            <Ionicons name="ellipsis-horizontal" size={25} style={styles.moreButton}></Ionicons>
        </View>
    );
};

const styles = StyleSheet.create({
    chatHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#141417',
        paddingTop: 0,
        paddingBottom: 6,
    },
    backButton: {
        color: '#B42B23',
        paddingLeft: 20,
    },
    moreButton: {
        color: '#B42B23',
        paddingRight: 20,
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 130,
    },
    userAvatar: {
        height: 34,
        width: 34,
        borderRadius: '100%'
    },
    userName: {
        color: 'white',
        fontSize: 15,
    }
});

export default ChatHeader;