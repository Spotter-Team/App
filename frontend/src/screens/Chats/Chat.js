import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ChatHeader from '../../components/ChatsComponents/ChatHeader';
import ChatBubbleSender from '../../components/ChatsComponents/ChatBubbleSender';
import ChatBubbleReceiver from '../../components/ChatsComponents/ChatBubbleReceiver';
import ChatInput from '../../components/ChatsComponents/ChatInput';

const Chat = () => {

    const [value, onChangeText] = useState('')

    return (
        <KeyboardAvoidingView style={styles.chatScreen} behavior={Platform === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={-45}>
            <SafeAreaView style={styles.safeArea}>
                <ChatHeader />
                <ScrollView style={styles.chatArea} contentContainerStyle={{ flex: 1, marginTop: 10 }}>
                    <ChatBubbleSender />
                    <ChatBubbleReceiver />
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