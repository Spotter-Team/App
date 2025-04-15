import { View, Text, StyleSheet } from 'react-native';
import { MatchItem } from './MatchItem';

const MatchList = () => {
    return (
        <View style={styles.container}>
            <MatchItem />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
});

export default MatchList;