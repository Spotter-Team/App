import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import ChatHeader from '../../components/ChatsComponents/ChatHeader';
import ChatBubbleSender from '../../components/ChatsComponents/ChatBubbleSender';
import ChatBubbleReceiver from '../../components/ChatsComponents/ChatBubbleReceiver';
import ChatInput from '../../components/ChatsComponents/ChatInput';
import mockChat from '../../mock/Chats/mockChat';
import mockUserId from '../../mock/Chats/mockUserId';

const Chat = () => {

    const route = useRoute();
    const { chatId } = route.params;
    const chatData = mockChat.find((val) => val.id === chatId);

    const [value, onChangeText] = useState('');
    const [messages, setMessages] = useState(chatData.messages);

    const renderContent = (chat, userId, userAvatar) => {
        if(chat.senderId === userId) {
            return <ChatBubbleReceiver key={chat.id} content={chat.content} type={chat.type} />
        }
        else {
            return <ChatBubbleSender key={chat.id} content={chat.content} avatar={userAvatar} type={chat.type} />
        }
    }

    const handleSendMessage = () => {

        if(value.trim() === '') {
            return;
        };

        const newMessage = {
            id: `msg${messages.length + 1}`,
            senderId: mockUserId,
            content: value,
            type: 'text',
        };

        setMessages([...messages, newMessage]);
        onChangeText('');
    }

    return (
        <KeyboardAvoidingView style={styles.chatScreen} behavior={Platform === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={-45}>
            <SafeAreaView style={styles.safeArea}>
                <ChatHeader avatar={chatData.avatarUri} name={chatData.name} />
                <ScrollView style={styles.chatArea} contentContainerStyle={{ marginTop: 10 }}>
                    {messages.map((val) => renderContent(val, mockUserId, chatData.avatarUri))}
                </ScrollView>
            </SafeAreaView> 
            <ChatInput value={value} onChangeText={onChangeText} onSend={handleSendMessage} />
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    chatScreen: {
        flex: 1,
        backgroundColor: '#141417',
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#141417',
    },
    chatArea: {
        backgroundColor: 'black',
    },
});

export default Chat;