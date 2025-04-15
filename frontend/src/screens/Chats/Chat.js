import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    KeyboardAvoidingView,
    Platform 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ChatHeader from '../../components/ChatsComponents/ChatHeader';
import ChatBubbleSender from '../../components/ChatsComponents/ChatBubbleSender';
import ChatBubbleReceiver from '../../components/ChatsComponents/ChatBubbleReceiver';

const Chat = () => {

    const [value, onChangeText] = useState('')

    return (
        <KeyboardAvoidingView style={styles.chatScreen} behavior={Platform === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={-40}>
            <SafeAreaView style={styles.safeArea}>
                <ChatHeader />
                <ScrollView style={styles.chatArea} contentContainerStyle={{ flex: 1, marginTop: 10 }}>
                    <ChatBubbleSender />
                    <ChatBubbleReceiver />
                </ScrollView>
            </SafeAreaView>
            <View style={styles.inputContainer}>
                <TextInput
                    multiline
                    maxLength={200}
                    style={styles.input}
                    placeholder='Type a message...'
                    placeholderTextColor={'#737373'}
                    value={value}
                    onChangeText={text => onChangeText(text)}
                >
                </TextInput>
                <Text style={styles.sendBtn}>SEND</Text>
            </View>
            <View style={styles.inputFooter}>
                <Ionicons name="images-outline" size={28} style={styles.footerIcon}></Ionicons>
                <Ionicons name="camera-outline" size={28} style={styles.footerIcon}></Ionicons>
            </View>      
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
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingTop: 10,
        paddingBottom: 15,
        paddingLeft: 20,
        backgroundColor: '#141417',
        color: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#3C444F',
        borderTopColor: '#3C444F',
        borderTopWidth: 1,
    },
    input: {
        color: 'white',
        fontSize: 16,
        width: '80%',
    },
    sendBtn: {
        marginRight: 20,
        color: '#B42B23',
        fontSize: 16,
        fontWeight: 600,
        width: '20%',
    },
    inputFooter: {
        flexDirection: 'row',
        backgroundColor: '#141417',
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    footerIcon: {
        color: "#737373",
        paddingLeft: 25,
    }
});

export default Chat;