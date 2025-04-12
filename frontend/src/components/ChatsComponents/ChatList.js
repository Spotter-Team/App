import { View, Text, StyleSheet, Image } from 'react-native';
import { ChatItem } from './ChatItem';
import { useNavigation } from '@react-navigation/native';
import formatDate from '../../utils/formatDate';
import mockChatList from '../../mock/Chats/mockChatList';

const ChatList = () => {
    
    const navigation = useNavigation();
    const handleChatPress = () => navigation.navigate('Chat');

    return (
        <View style={styles.container}>
             <View onTouchEnd={handleChatPress}>
                {mockChatList.map((val) => (
                    <ChatItem 
                        avatar={val.avatarUri}
                        name={val.name}
                        lastMessage={val.lastMessage.type === 'image' ? 'Sent an image' : val.lastMessage.content}
                        timestamp={formatDate(val.lastMessage.timestamp)}
                        unread={val.unreadCount}
                    />
                ))}
             </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
});

export default ChatList;