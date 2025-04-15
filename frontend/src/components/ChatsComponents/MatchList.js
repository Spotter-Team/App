import { View, Text, StyleSheet } from 'react-native';
import { MatchItem } from './MatchItem';
import mockMatchList from '../../mock/Matches/mockMatchList';

const MatchList = () => {
    return (
        <View style={styles.container}>
            {mockMatchList.map((val) => (
                <MatchItem 
                    name={val.name.split(' ')[0]} 
                    isProfessionalTrainer={val.isProfessionalTrainer}
                    workouts={val.workouts}
                    avatarUri={val.avatarUri}
                    isNew={val.isNew}
                />
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