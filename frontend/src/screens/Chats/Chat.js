import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ChatHeader from '../../components/ChatsComponents/ChatHeader';
import ChatBubbleSender from '../../components/ChatsComponents/ChatBubbleSender';
import ChatBubbleReceiver from '../../components/ChatsComponents/ChatBubbleReceiver';


const Chat = () => {

    const [value, onChangeText] = useState('Type a message ...')

    return (
        <SafeAreaView style={styles.safeArea}>

            <ChatHeader />

            <ScrollView style={styles.chatArea} contentContainerStyle={{ flex: 1, marginTop: 10 }}>


                <ChatBubbleSender />                
                <ChatBubbleReceiver />
                
            </ScrollView>

            <View style={styles.inputContainer}>
                <TextInput
                    multiline
                    maxLength={200}
                    style={styles.input}
                    placeholder='Type a message...'
                    placeholderTextColor={'#737373'}
                    onChangeText={text => onChangeText(text)}
                >
                </TextInput>

                <Text style={styles.sendBtn}>
                    SEND
                </Text>
            </View>

            <View style={styles.inputFooter}>
                <Ionicons name="images-outline" size={25} style={styles.footerIcon}></Ionicons>
                <Ionicons name="camera-outline" size={25} style={styles.footerIcon}></Ionicons>
            </View>

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
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingVertical: 15,
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
        width: 45,
    },
    inputFooter: {
        flexDirection: 'row',
        backgroundColor: '#141417',
        paddingLeft: 10,
        paddingTop: 10,
    },
    footerIcon: {
        color: "#737373",
        paddingLeft: 10,
    }
});

export default Chat;