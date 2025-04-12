import { View, Text, StyleSheet, Image } from 'react-native';

const ChatItem = ({ avatar, name, lastMessage, timestamp, unread }) => {
    return (
            <View style={styles.chatItemContainer}>

                <Image source={avatar} style={styles.avatar} />

                <View style={styles.chatInfoContainer}>

                    <View>
                        <Text style={styles.name}>
                            {name}
                        </Text>
                        <Text style={styles.lastMessage}>
                            {lastMessage}
                        </Text>
                    </View>

                    <View style={styles.chatMetaContainer}>
                        <Text style={styles.timestamp}>
                            {timestamp}
                        </Text>
                        
                        {unread > 0 && (
                            <View style={styles.unreadBadge}>
                                <Text style={styles.unreadText}>
                                    {unread}
                                </Text>
                            </View>
                        )}
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