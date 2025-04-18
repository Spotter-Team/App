import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const HubCommunityScroll = ({ hubURI, hubName }) => {
    
    const communities = [
        {
            name: 'UF',
            logo: require('../../mock/GymHub/uflogo.jpg'),
        },
        {
            name: 'Workouts',
            logo: require('../../mock/GymHub/workoutlogo.jpg'),
        },
        {
            name: 'Cardio',
            logo: require('../../mock/GymHub/cardiologo.jpg'),
        },
        {
            name: 'Yoga',
            logo: require('../../mock/GymHub/yogalogo.jpg'),
        },
    ]

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.communityListContainer} >
     
            {communities.map((val) => (
                <TouchableOpacity style={styles.communityItemContainer} >
                    <Image source={val.logo} style={styles.communityLogo} />
                    <Text style={styles.communityName}>{val.name}</Text>
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