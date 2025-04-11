import { View, Text, StyleSheet, Image } from 'react-native';
import { ChatItem } from './ChatItem';
import { useNavigation } from '@react-navigation/native';

const ChatList = () => {
    return (
        <View style={{ marginTop: 10 }}>
            <ChatItem />
        </View>
    );
};

export default ChatList;