import { View, Text, Image, StyleSheet } from 'react-native';

const ChatBubbleSender = ({ content, type, avatar }) => {

    const renderMessage = (content, type) => {
        if(type === 'text') {
            return (
                <View style={styles.senderBubble}>
                    <Text style={styles.textMessage}>
                        {content}
                    </Text>
                </View>
            );
        }
        else if(type === 'image') {
            return (
               <Image source={content} style={styles.textImage} />
            );
        };
    };

    return (
        <View style={styles.senderContainer}>
            <Image source={avatar} style={styles.senderAvatar} />
            {renderMessage(content, type)}
        </View>
    );
};

const styles = StyleSheet.create({
    senderContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginVertical: 5,
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
        padding: 13,
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
    textImage: {
        marginLeft: 8,
        height: 200,
        width: 200,
        borderTopLeftRadius: 20,
        borderTopEndRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 4,
    }
});

export default ChatBubbleSender;