import React from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import MessagesTabs from '../../components/ChatsComponents/MessagesTabs';
import ChatList from '../../components/ChatsComponents/ChatList';
import MatchList from '../../components/ChatsComponents/MatchList';

const Messages = () => {

    const [activeTab, setActiveTab] = useState('chats');

    const renderContent = () => {
        if(activeTab === 'chats') {
            return (
                <ChatList />
            );
        }
        else if(activeTab === 'matches') {
            return (
                <MatchList />
            );
        };
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <MessagesTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <ScrollView>
                {renderContent()}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Messages;