import { View, Text, StyleSheet, Image } from 'react-native';

const ChatItem = () => {
    return (
            <View style={styles.chatItemContainer}>
                <Image source={require('../../mock/Chats/pfp/haley.png')} style={styles.avatar} />
                <View style={styles.chatInfoContainer}>
                    <View>
                        <Text style={styles.name}>Haley</Text>
                        <Text style={styles.lastMessage}>Great job on the deadlifts!</Text>
                    </View>

                    <View style={styles.chatMetaContainer}>
                        <Text style={styles.timestamp}>2:15 PM</Text>

                        <View style={styles.unreadBadge}>
                            <Text style={styles.unreadText}>1</Text>
                        </View>
                    </View>
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    chatItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 10,
        paddingRight: 15,
        paddingBottom: 10,
        paddingLeft: 15,
    },
    chatInfoContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginLeft: 10,
    },
    avatar: {
        height: 55,
        width: 55,
        borderRadius: '100%'
    },
    name: {
        color: 'white',
        fontSize: 17,
        fontWeight: 600,
    },
    lastMessage: {
        color: '#959395',
        fontSize: 14,
        marginTop: 5,
    },
    chatMetaContainer: {
        alignItems: 'flex-end'
    },
    timestamp: {
        color: '#959395',
    },
    unreadBadge: {
        backgroundColor: '#B42B23',
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },
    unreadText: {
        alignItems: 'center',
        color: 'white'
    },
});

export { ChatItem };