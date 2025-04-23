import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';
import { API_BASE_URL } from '@env';
import { useRoute } from '@react-navigation/native';
import COLORS from '../../utils/theme';
import DumbbellLogo from '../../assets/dumbbell-logo.png';
import MatchUserCard from '../../components/HomeComponents/MatchUserCard';
import MatchUsers from '../../mock/Matches/mockMatchUsers';

const MatchScreen = () => {
  //const route = useRoute();
  //const { name: userID } = route.params;
  const [matches, setMatches] = useState(MatchUsers);
  const [ currentIndex, setCurrentIndex ] = useState(0);

  //useEffect(() => {
    //axios.get(`${API_BASE_URL}/api/match/${userID}`)
      //.then(res => setMatches(res.data))
      //.catch(err => console.error('Match fetch error:', err));
  //}, [userID]);

  const handleAction = (userID, action) => {
    setMatches(prev => prev.filter(m => m.userID !== userID));
    setCurrentIndex(currentIndex + 1);
  };

  const renderContent = () => {
    if(currentIndex < MatchUsers.length) {
        return (
            <MatchUserCard
                key={MatchUsers[currentIndex].userID}
                user={MatchUsers[currentIndex]}
                handleAction={handleAction} 
            />
        );
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <View style={styles.container}>
        {renderContent()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
  },
});

export default MatchScreen;

