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

  //useEffect(() => {
    //axios.get(`${API_BASE_URL}/api/match/${userID}`)
      //.then(res => setMatches(res.data))
      //.catch(err => console.error('Match fetch error:', err));
  //}, [userID]);

  const handleAction = (userID, action) => {
    setMatches(prev => prev.filter(m => m.userID !== userID));
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <ScrollView contentContainerStyle={styles.container}>
        {matches.map((user) => (
            <MatchUserCard key={user.userID} user={user} handleAction={handleAction} />
        ))}
      </ScrollView>
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

