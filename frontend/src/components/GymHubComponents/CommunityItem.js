import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const communityItem = ({ name, banner, rating, members }) => {
    return (
        <View style={styles.communityItemContainer}>
            <Image source={banner} style={styles.communityImage} />
            
            <View style={styles.communityInfoContainer}>
                <Text style={styles.communityText}>
                    {name}
                </Text>
                <Text style={{ color: 'white', fontFamily: 'Roboto', fontSize: 14, fontWeight: 500 }}>
                    <Ionicons name="star" size={16} style={styles.ratingLogo} /> {rating} ({members} members)
                </Text>

                <TouchableOpacity style={styles.viewCommunityBtn}>
                    <Text style={styles.viewCommunityBtnText}>View Community</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    communityItemContainer: {
        marginVertical: 8.5,
    },
    communityImage: {
        height: 153,
        width: 377,
        borderRadius: 13,
        opacity: 0.4,
        borderColor: 'red',
        borderWidth: 2,
    },
    communityInfoContainer: {
        position: 'absolute',
        top: '20%',
        left: '5%',
        flexDirection: 'column',
    },
    communityText: {
        color: 'white',
        fontSize: 32,
        fontWeight: 700,
        fontFamily: 'Bebas Neue',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        flexDirection: 'column',
    },
    ratingLogo: {
        color: '#FFCC01',
    },
    viewCommunityBtn: {
        alignItems: 'center',
        marginTop: 20,
        width: 150,
        paddingVertical: 5,
        paddingHorizontal: 7,
        borderRadius: 10,
        backgroundColor: '#9F301C',
    },
    viewCommunityBtnText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 600,
    },
});

export default communityItem;