import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import mockCommunities from '../../mock/GymHub/mockCommunities';

const HubCommunityScroll = ({ hubURI, hubName }) => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.communityListContainer} >
     
            {mockCommunities.map((val, index) => (
                <TouchableOpacity style={styles.communityItemContainer} key={index}>
                    <Image source={val.logo} style={styles.communityLogo} />
                    <Text style={styles.communityName}>{val.nickname}</Text>
                </TouchableOpacity>
            ))}
          
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    communityListContainer: {
        flexDirection: 'row',
        paddingHorizontal: 17,
    },
    communityItemContainer: {
        alignItems: 'center',
        marginVertical: 8,
        marginRight: 40,
    },
    communityLogo: {
        height: 60,
        width: 60,
        borderRadius: '100%',
        borderColor: 'red',
        borderWidth: 2,
    },
    communityName: {
        color: 'white',
        marginTop: 6,
        fontFamily: 'Bebas Neue',
        fontSize: 18,
        fontWeight: 800,
    }
});

export default HubCommunityScroll;