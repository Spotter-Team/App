import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChatInput = ({ value, onChangeText, onSend }) => {
    return (
        <>
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
                <TouchableOpacity onPress={onSend} style={styles.sendBtnContainer} >
                    <Text style={styles.sendBtn}>SEND</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputFooter}>
                <Ionicons name="images-outline" size={28} style={styles.footerIcon}></Ionicons>
                <Ionicons name="camera-outline" size={28} style={styles.footerIcon}></Ionicons>
            </View>      
        </>
    );
};

const styles = StyleSheet.create({
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
    sendBtnContainer: {
        width: '20%',
        marginRight: 20,
    },
    sendBtn: {
        color: '#B42B23',
        fontSize: 16,
        fontWeight: 600,
    },
    inputFooter: {
        flexDirection: 'row',
        backgroundColor: '#141417',
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 13,
    },
    footerIcon: {
        color: "#737373",
        paddingLeft: 25,
    }
});

export default ChatInput;