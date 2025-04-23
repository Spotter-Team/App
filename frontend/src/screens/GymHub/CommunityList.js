import { View, Text, StyleSheet } from 'react-native';

const CommunityList = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.communitiesText}>Communities</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    communitiesText: {
        color: 'white',
        fontSize: 50,
        fontFamily: 'Bebas Neue',
    },
});

export default CommunityList;