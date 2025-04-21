import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FeedInput = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                multiline
                maxLength={200}
                style={styles.input}
                placeholder="Share your grind!"
                placeholderTextColor={'#737373'}
                onChangeText={text => onChangeText(text)}
            />
                
            <View style={styles.inputDivider} />

            <View style={styles.inputSubmitContainer}>
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={styles.hubText}>HUB</Text>
                    <Ionicons name="chevron-down" size={16} style={styles.postInHubButton} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.publishPostBtn}>
                    <Text style={styles.publishBtnText}>PUBLISH POST</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#0D0E0D',
        height: 113,
        width: 340,
        borderColor: '#222525',
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 25,
        paddingVertical: 10,
        justifyContent: 'space-around',
    },
    input: {
        fontSize: 14,
        color: 'white',
    },
    inputDivider: {
        height: 2,
        backgroundColor: '#1F2221',
    },
    inputSubmitContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    hubText: {
        color: 'white',
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontWeight: 800,
    },
    postInHubButton: {
        color: 'white',
    },
    publishPostBtn: {
        backgroundColor: '#9F301C',
        paddingVertical: 5,
        paddingHorizontal: 7,
        borderRadius: 10,
        borderColor: '#AF331E',
        borderWidth: 1,
    },
    publishBtnText: {
        color: 'white',
        fontWeight: 800,
    },
});

export default FeedInput;