import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FeedPost = () => {
    return (
        <View style={styles.container}>
            <View style={styles.postHeader}>
                <Text style={styles.postHeaderText}>
                    Posted in <Text style={styles.postHeaderHub}>Bodybuilding</Text>
                </Text>
                <TouchableOpacity>
                    <Text style={styles.viewHubText}>
                        view hub
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0D0E0D',
        width: 340,
        marginVertical: 17,
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 10,
        borderColor: '#222525',
        borderWidth: 1,
    },
    postTextColor: {
        color: 'white',
    },
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    postHeaderText: {
        color: 'white',
        fontSize: 12,
    },
    postHeaderHub: {
        color: '#9F301C',
        fontWeight: 700,
    },
    viewHubText: {
        fontSize: 12,
        color: '#9F301C',
    }
});

export default FeedPost;