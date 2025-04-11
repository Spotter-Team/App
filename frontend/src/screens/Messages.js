import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import MessagesTabs from '../components/MessagesTabs';

const Messages = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <MessagesTabs />
            <ScrollView>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 280 }}>
                    <Text style={styles.chatPage}>
                        CHAT SCREEN
                    </Text>
                </View>
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