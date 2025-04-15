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
    const chatData = mockChat.find((val) => val.id === chatId).messages;

    const [value, onChangeText] = useState('');

    const renderContent = (chat, userId) => {
        if(chat.senderId === userId) {
            return <ChatBubbleReceiver content={chat.content} />
        }
        else {
            return <ChatBubbleSender content={chat.content} />
        }
    }

    return (
        <KeyboardAvoidingView style={styles.chatScreen} behavior={Platform === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={-45}>
            <SafeAreaView style={styles.safeArea}>
                <ChatHeader />
                <ScrollView style={styles.chatArea} contentContainerStyle={{ flex: 1, marginTop: 10 }}>
                    {chatData.map((val) => renderContent(val, mockUserId))}
                </ScrollView>
            </SafeAreaView> 
            <ChatInput value={value} onChangeText={onChangeText} />
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