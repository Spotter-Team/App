import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import React, { useRef } from 'react';
import COLORS from '../../utils/theme';
import DumbbellLogo from '../../assets/dumbbell-logo.png';
import { LinearGradient } from 'expo-linear-gradient';

const MatchUserCard = ({ user, handleAction }) => {
    const fadeAnimation = useRef(new Animated.Value(0)).current;
    const shakeAnimation = useRef(new Animated.Value(0)).current;
    const slideAnimation = useRef(new Animated.Value(0)).current;
    const scaleAnimation = useRef(new Animated.Value(1)).current;

    const handleImageLoad = () => {
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    };

    const handlePass = () => {

      const shake = Animated.sequence([
        Animated.timing(shakeAnimation, {
          toValue: -10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: 10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: -10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      ]);

      const slideDown = Animated.timing(slideAnimation, {
        toValue: 1000,
        duration: 500,
        useNativeDriver: true,
      });

      Animated.sequence([shake, slideDown]).start(() => {
        handleAction(user.userId, 'reject');
      });
    };

    const handleMatch = () => {

      const scaleUp = Animated.timing(scaleAnimation, {
        toValue: 1.05,
        duration: 200,
        useNativeDriver: true,
      });

      const slideUp = Animated.timing(slideAnimation, {
        toValue: -1000,
        duration: 300,
        useNativeDriver: true,
      });

      Animated.sequence([scaleUp, slideUp]).start(() => {
        handleAction(user.userID, 'accept');
      })
    };

    const animatedCardStyles = {
      ...styles.card,
      transform: [
        { translateX: shakeAnimation },
        { translateY: slideAnimation },
        { scale: scaleAnimation }, 
      ],
      borderColor: COLORS.accent,
    };

    const animatedCardImageStyles = {
      ...styles.avatar,
      opacity: fadeAnimation,
    };

    return (
        <Animated.View style={animatedCardStyles}>
            <Animated.Image source={user.avatar} style={animatedCardImageStyles} onLoad={handleImageLoad} />
            <LinearGradient 
              colors={['rgba(0,0,0,1)', 'transparent']} 
              style={styles.gradient} 
              start={{ x: 0.1, y: 0.8 }}
              end={{ x: 0.1, y: 0.4 }}
            />

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
                    onPress={handlePass}
                >
                    <Text style={styles.buttonText}>Pass</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.matchButton]}
                    onPress={handleMatch}
                >
                    <Text style={styles.buttonText}> Match</Text>
                </TouchableOpacity>

            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'black',
        borderRadius: 20,
        paddingTop: 26,
        width: '100%',
        height: '100%',
        marginBottom: 30,
        position: 'relative',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        marginHorizontal: 14,
      },
      avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 11,
        marginBottom: 15,
        alignSelf: 'center',
      },
      textWrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        paddingBottom: 50,
        paddingLeft: 25,
        width: '100%',
        alignItems: 'flex-start',
        marginBottom: 100,
      },
      name: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 4,
      },
      fitnessContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
      },
      fitness: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 700,
      },
      fitnessLevel: {
        flexDirection: 'row',
        marginLeft: 4,
      },
        info: {
          fontSize: 14,
          color: '#FFF',
          marginTop: 4,
        },
        buttonWrapper: {
          position: 'absolute',
          bottom: 15,
          left: 20,
          right: 20,
          marginBottom: 33,
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        button: {
          paddingVertical: 12,
          paddingHorizontal: 45,
          borderRadius: 10,
          borderColor: COLORS.border
        },
        passButton: {
          backgroundColor: '#2B2A2A',
        },
        matchButton: {
          backgroundColor: '#B5382B',
        },
        buttonText: {
          fontWeight: 600,
          color: '#fff',
          fontSize: 24,
        },
        gradient: {
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '80%',
        }
});

export default MatchUserCard;