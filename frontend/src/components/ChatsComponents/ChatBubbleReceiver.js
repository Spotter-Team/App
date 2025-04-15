import { View, Text, StyleSheet } from 'react-native';

const ChatBubbleReceiver = ({ content }) => {
    return (
        <View style={styles.receiverContainer}>
            <View style={styles.receiverBubble}>
                <Text style={styles.textMessage}>
                    {content}
                </Text>
            </View>
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
});

export default ChatBubbleReceiver;