import React from 'react';
import { StyleSheet,Button, View, Text} from 'react-native';

const Contact = ({ navigation }) => {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        
      },
    });
    return (
      <View style={styles.container}>
          <Text>Contact Me Here</Text>   
      </View>
      
    );
  };
  export default Contact;