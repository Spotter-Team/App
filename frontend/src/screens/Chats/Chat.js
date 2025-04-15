import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ChatHeader from '../../components/ChatsComponents/ChatHeader';
import ChatBubbleSender from '../../components/ChatsComponents/ChatBubbleSender';
import ChatBubbleReceiver from '../../components/ChatsComponents/ChatBubbleReceiver';


const Chat = () => {
    return (
        <SafeAreaView style={styles.safeArea}>

            <ChatHeader />

            <ScrollView style={styles.chatArea} contentContainerStyle={{ flex: 1, marginTop: 10 }}>


                <ChatBubbleSender />                
                <ChatBubbleReceiver />

            </ScrollView>

            

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#141417',
    },
    chatArea: {
        backgroundColor: 'black',
    },
});

export default Chat;