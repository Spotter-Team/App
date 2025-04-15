import { View, Text, Image, StyleSheet } from 'react-native';

const ChatBubbleSender = () => {
    return (
        <View style={styles.senderContainer}>
            <Image source={require('../../mock/Chats/pfp/haley.jpg')} style={styles.senderAvatar}></Image>

            <View style={styles.senderBubble}>
                <Text style={styles.textMessage}>
                    Hey, do you want to hit the gym?
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    senderContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 20,
        marginBottom : 20,
        marginLeft: 20,
    },
    senderAvatar: {
        marginTop: 12,
        height: 34,
        width: 34,
        borderRadius: '100%',
    },
    senderBubble: {
        justifyContent: 'center',
        marginLeft: 8,
        padding: 10,
        borderTopLeftRadius: 20,
        borderTopEndRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 4,
        backgroundColor: '#21262E',
        maxWidth: '60%',
    },
    textMessage: {
        color: 'white',
        fontSize: 16,
    },
});

export default ChatBubbleSender;