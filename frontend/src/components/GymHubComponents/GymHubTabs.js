import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GymHubTabs = ({ activeTab, setActiveTab }) => {

    const handleFeedPress = () => {
        setActiveTab('feed');  
    };

    const handleCommunitiesPress = () => {
        setActiveTab('communities');
    }


    return (
        <View style={styles.tabContainer}>
            <TouchableOpacity onPress={handleFeedPress}>
                <Text style={activeTab === 'feed' ? styles.activeTab : styles.inactiveTab}>My Feed</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCommunitiesPress}>
                <Text style={activeTab === 'communities' ? styles.activeTab : styles.inactiveTab}>Communities</Text>
            </TouchableOpacity>
            
        </View>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 26,
        marginHorizontal: 47,
    },
    activeTab: {
        color: '#B42B23',
        fontFamily: 'Bebas Neue',
        fontSize: 26,
    },
    inactiveTab: {
        color: 'white',
        fontFamily: 'Bebas Neue',
        fontSize: 26,
    },
});

export default GymHubTabs;