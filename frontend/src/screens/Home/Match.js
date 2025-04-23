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
          <View key={user.userID} style={styles.card}>
            <Image source={user.avatar} style={styles.avatar} />

            <View style={styles.textWrapper}>
              <Text style={styles.name}>{user.username}</Text>

              <View style={styles.fitnessContainer}>
                <Text style={styles.fitness}>Fitness Level: </Text>
                <View style={styles.fitnessLevel}>
                  {[...Array(4)].map((_, i) => (
                    <Image
                      key={i}
                      source={DumbbellLogo}
                      style={{
                        width: 16,
                        height: 16,
                        tintColor: i < user.fitnessLevel ? COLORS.accent : 'gray',
                        marginHorizontal: 2,
                      }}
                    />
                  ))}
                </View>
              </View>

              <Text style={styles.info}>
                {user.userLocation} | {user.preferredWorkout}
              </Text>
            </View>

            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={[styles.button, styles.passButton]}
                onPress={() => handleAction(user.userID, 'reject')}
              >
                <Text style={styles.buttonText}> Pass ❌</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.matchButton]}
                onPress={() => handleAction(user.userID, 'accept')}
              >
                <Text style={styles.buttonText}> Match ❤️</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 25,
    width: '100%',
    marginBottom: 30,
    position: 'relative',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    alignSelf: 'center',
  },
  textWrapper: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 50,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e1e1e',
    marginBottom: 4,
  },
  fitnessContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  fitness: {
    fontSize: 16,
    color: '#444',
  },
  fitnessLevel: {
    flexDirection: 'row',
    marginLeft: 4,
  },
  info: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 25,
    borderColor: COLORS.border
  },
  passButton: {
    backgroundColor: '#ccc',
  },
  matchButton: {
    backgroundColor: COLORS.accent,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default MatchScreen;

