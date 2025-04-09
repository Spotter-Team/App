import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import MessagesTabs from '../components/MessagesTabs';

const Messages = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <MessagesTabs />
            <ScrollView>
                <Text style={styles.chatPage}>
                    Test
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    chatPage: {
        color: 'white',
    },
});

export default Messages;