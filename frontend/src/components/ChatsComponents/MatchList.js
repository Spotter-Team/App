import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MatchItem } from './MatchItem';
import { useNavigation } from '@react-navigation/native';
import mockMatchList from '../../mock/Matches/mockMatchList';

const MatchList = () => {

    const navigation = useNavigation();
    const handleMatchPress = () => navigation.navigate('MatchProfile');

    return (
        <View style={styles.container}>
            {mockMatchList.map((val, index) => (
                <TouchableOpacity onPress={handleMatchPress} key={val.id || index}>
                    <MatchItem 
                        name={val.name.split(' ')[0]} 
                        isProfessionalTrainer={val.isProfessionalTrainer}
                        workouts={val.workouts}
                        avatarUri={val.avatarUri}
                        isNew={val.isNew}
                    />
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
});

export default MatchList;