import { View, Text, StyleSheet, Image } from 'react-native';
import { ChatItem } from './ChatItem';
import { useNavigation } from '@react-navigation/native';

const ChatList = () => {

    const navigation = useNavigation();
 
    const handleChatPress = () => navigation.navigate('Chat');

    return (
        <View style={styles.container}>
             <View onTouchEnd={handleChatPress}>
                 <ChatItem />
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