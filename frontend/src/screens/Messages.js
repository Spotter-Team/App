import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import MessagesTabs from '../components/MessagesTabs';

const Messages = () => {

    const [activeTab, setActiveTab] = useState('chats');

    const renderContent = () => {
        if(activeTab === 'chats') {
            return (
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 280 }}>
                    <Text style={styles.chatPage}>
                        CHAT SCREEN
                    </Text>
                </View>
            );
        }
        else if(activeTab === 'matches') {
            return (
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 280 }}>
                    <Text style={styles.chatPage}>
                        MATCHES SCREEN
                    </Text>
                </View>
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

const styles = StyleSheet.create({
    chatPage: {
        fontFamily: 'Bebas Neue',
        color: 'white',
        fontSize: 50,
    },
});

export default Messages;