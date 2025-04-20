import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const FeedPost = ({ category, name, location, avatarURI, content }) => {
    return (
        <View style={styles.container}>
            <View style={styles.postHeader}>
                <Text style={styles.postHeaderText}>
                    Posted in <Text style={styles.postHeaderHub}>{category}</Text>
                </Text>
                <TouchableOpacity>
                    <Text style={styles.viewHubText}>
                        view hub
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.userInfoContainer}>
                <Image source={avatarURI} style={styles.userAvatar}/>

                <View style={{ paddingLeft: 7 }}>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userLocation}>{location}</Text>
                </View>
            </View>

            <View style={styles.postContentContainer}>
                <Text style={styles.postContentText}>
                    {content}
                </Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0D0E0D',
        width: 340,
        marginVertical: 8.5,
        paddingHorizontal: 10,
        paddingTop: 12,
        paddingBottom: 16,
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
    },
    userInfoContainer: {
        flexDirection: 'row',
        paddingVertical: 12,
        alignItems: 'center',
    },
    userAvatar: {
        height: 50,
        width: 50,
        borderRadius: 10,
        borderColor: '#9F301C',
        borderWidth: 2,
    },
    userName: {
        color: 'white',
        fontSize: 16,
        fontWeight: 700,
    },
    userLocation: {
        color: 'white',
        fontSize: 12,
    },
    postContentContainer: {

    },
    postContentText: {
        color: 'white',
        fontSize: 14,
    }
});

export default FeedPost;