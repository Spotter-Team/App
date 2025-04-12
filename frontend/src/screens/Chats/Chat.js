import { View, Text, StyleSheet } from 'react-native';
 
 const Chat = () => {
     return (
         <View style={styles.chatScreen}>
             <Text style={styles.chatText}>CHAT SCREEN</Text>
         </View>
     );
 };
 
 const styles = StyleSheet.create({
     chatScreen: {
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         height: '100%',
         backgroundColor: 'black',
     },
     chatText: {
         color: 'white',
         fontFamily: 'Bebas Neue',
         fontSize: 50,
     }
 });
 
 export default Chat;