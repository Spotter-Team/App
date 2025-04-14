import { View, Text, StyleSheet } from 'react-native';

const Filter = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.filterText}>FILTER SCREEN</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        height: '100%',
    },
    filterText: {
        color: 'white',
        fontSize: 50,
        fontFamily: 'Bebas Neue',
    },
});

export default Filter;