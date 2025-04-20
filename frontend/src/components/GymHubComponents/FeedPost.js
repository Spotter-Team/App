import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

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

            <View style={styles.userInfoContainer}>
                <Image source={require('../../mock/GymHub/feedpfp1.jpg')} style={styles.userAvatar}/>

                <View style={{ paddingLeft: 7 }}>
                    <Text style={styles.userName}>User Name</Text>
                    <Text style={styles.userLocation}>Florida, United States</Text>
                </View>
            </View>

            <View style={styles.postContentContainer}>
                <Text style={styles.postContentText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit!

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam alias rem eum accusantium fugit, assumenda ad suscipit porro dolor modi repellendus velit iste aliquam voluptate nulla consectetur, id cumque. Voluptatem. 
                </Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0D0E0D',
        width: 340,
        marginTop: 17,
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