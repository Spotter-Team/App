import { View, Text, StyleSheet, Image } from 'react-native';
import { ChatItem } from '../../components/ChatsComponents/ChatItem';

const ChatList = () => {
    return (
        <View style={{ marginTop: 10 }}>
            <ChatItem />
        </View>
    );
};

export default ChatList;