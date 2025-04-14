import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ChatHeader = () => {

    const navigation = useNavigation();
    const handleBackBtnPress = () => navigation.goBack();

    return (
        <View style={styles.chatHeaderContainer}>
            <TouchableOpacity onPress={() => handleBackBtnPress()}>
                <Ionicons name="chevron-back" size={25} style={styles.backButton}></Ionicons>                
            </TouchableOpacity>

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
        borderBottomWidth: 0.5,
        borderBottomColor: '#3C444F',
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
    },
    userAvatar: {
        height: 34,
        width: 34,
        borderRadius: '100%'
    },
    userName: {
        color: 'white',
        fontSize: 15,
        marginLeft: 10,
    }
});

export default ChatHeader;