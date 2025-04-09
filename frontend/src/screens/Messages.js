import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Messages = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <Text style={styles.chatPage}>
                Test
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    chatPage: {
        color: 'white',
    },
});

export default Messages;