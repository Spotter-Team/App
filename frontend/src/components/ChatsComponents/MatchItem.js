import { View, Text, StyleSheet, Image } from 'react-native';

const MatchItem = ({ name, isProfessionalTrainer, workouts, avatarUri, isNew }) => {
    return (
        <View style={styles.matchItemContainer}>
            
            <View style={styles.matchInfoContainer}>

                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.userInfo}>
                        {isProfessionalTrainer ? 'Professional Trainer' : workouts.join(', ')}
                    </Text>
                </View>
                
                <View style={styles.avatarContainer}>
                    <Image source={avatarUri} style={styles.avatar} />
                    {isNew && <View style={styles.newBadge}><Text style={styles.newText}>NEW</Text></View>}
                </View>

            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    matchItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    matchInfoContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 3,
        marginLeft: 10,
    },
    avatar: {
        height: 66,
        width: 66,
        borderRadius: '100%'
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 600,
    },
    userInfo: {
        color: '#959395',
        fontSize: 17,
        marginTop: 5,
    },
    avatarContainer: {
        alignItems: 'flex-end'
    },
    newBadge: {
        position: 'absolute',
        right: -10,
        top: -5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 5,
        backgroundColor: '#B42B23',
    },
    newText: {
        alignItems: 'center',
        color: 'white',
        fontSize: 12,
        fontWeight: 700,
    },
});

export { MatchItem };

