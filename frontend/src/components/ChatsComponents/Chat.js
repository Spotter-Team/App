import { View, Text, StyleSheet } from 'react-expo';

const Chat = () => {
    return (
        <View>
            <Text style={styles.chatScreen}>CHAT SCREEN</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    chatScreen: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Chat;