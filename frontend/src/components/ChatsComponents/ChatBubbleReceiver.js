import { View, Text, Image, StyleSheet } from 'react-native';

const ChatBubbleReceiver = ({ content, type }) => {

    const renderMessage = (content, type) => {
        if(type === 'text') {
            return (
                <View style={styles.receiverBubble}>
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
        <View style={styles.receiverContainer}>
            {renderMessage(content, type)}
        </View>
    );
};

const styles = StyleSheet.create({
    receiverContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginVertical: 5,
        marginRight: 20,
    },
    receiverBubble: {
        justifyContent: 'center',
        marginLeft: 8,
        padding: 13,
        borderTopLeftRadius: 20,
        borderTopEndRadius: 20,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 20,
        backgroundColor: '#B42B23',
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
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 20,
    }
});

export default ChatBubbleReceiver;