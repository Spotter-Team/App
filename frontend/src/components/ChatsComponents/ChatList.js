import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ChatItem } from './ChatItem';
import { useNavigation } from '@react-navigation/native';
import formatDate from '../../utils/formatDate';
import userId from '../../mock/Chats/mockUserId';
import mockChatList from '../../mock/Chats/mockChatList';

const ChatList = () => {
    
    const navigation = useNavigation();
    const handleChatPress = (chatId) => navigation.navigate('Chat', { chatId });

    const formatLastMessage = (userId, lastMessage) => {
        let message = '';
        if(lastMessage.type === 'image') {
            message = 'Sent an image';
        }
        else {
            message = lastMessage.content;
        }

        return lastMessage.senderId === userId ? 'You: ' + message : message;
    }

    return (
        <View style={styles.container}>
                {mockChatList.map((val, index) => (
                    <TouchableOpacity
                        key={val.id || index}
                        onPress={() => handleChatPress(val.id)}
                        activeOpacity={0.7}
                    >
                        <ChatItem    
                            avatar={val.avatarUri}
                            name={val.name}
                            lastMessage={formatLastMessage(userId, val.lastMessage)}
                            timestamp={formatDate(val.lastMessage.timestamp)}
                            unread={val.unreadCount}
                        />
                    </TouchableOpacity>
                ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
});

export default ChatList;