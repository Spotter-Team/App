import { View, Text, StyleSheet } from 'react-native';

const ChatList = () => {
    return (
        <View>
            <View>
                <Text>Chat 1</Text>
            </View>
            <View>
                <Text>Chat 2</Text>
            </View>
            <View>
                <Text>Chat 3</Text>
            </View>
            <View>
                <Text>Chat 4</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
});

export default ChatList;