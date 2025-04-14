import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ChatHeader from '../../components/ChatsComponents/ChatHeader';


const Chat = () => {
    return (
        <SafeAreaView style={styles.safeArea}>

            <ChatHeader />

            <ScrollView style={styles.chatArea} contentContainerStyle={{ flex: 1 }}>
                <View style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontFamily: 'Bebas Neue', fontSize: 50 }}>
                        Chat Area
                    </Text>
                </View>
            </ScrollView>

            

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
});

export default Chat;