import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Chat = () => {
    return (
        <SafeAreaView style={styles.safeArea}>

            <View style={styles.chatHeader}>
                <Ionicons name="chevron-back" size={25} style={styles.backButton}></Ionicons>
                <View style={styles.userInfo}>
                    <Image source={require('../../mock/Chats/pfp/haley.jpg')} style={styles.chatAvatar}></Image>
                    <Text style={styles.name}>Haley Smith</Text>
                </View>
                <Ionicons name="ellipsis-horizontal" size={25} style={styles.moreButton}></Ionicons>
            </View>

            <ScrollView style={styles.chatArea} contentContainerStyle={{ flex: 1 }}>
                <View style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontFamily: 'Bebas Neue', fontSize: 50 }}>
                        Chat Area
                    </Text>
                </View>
            </ScrollView>

            

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#141417',
    },
    chatHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#141417',
        paddingTop: 5,
        paddingBottom: 10,
    },
    backButton: {
        color: '#B42B23',
        paddingLeft: 20,
    },
    moreButton: {
        color: '#B42B23',
        paddingRight: 20,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 130,
    },
    chatAvatar: {
        height: 34,
        width: 34,
        borderRadius: '100%'
    },
    name: {
        color: 'white',
        fontSize: 15,
    },
    chatArea: {
        backgroundColor: 'black',
    },
});

export default Chat;