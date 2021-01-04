import React from 'react';
import { StyleSheet,Button, View} from 'react-native';

const AboutMe = ({ navigation }) => {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        
      },
    });
    return (
      <View style={styles.container}>
            <Button
                onPress={() => navigation.goBack()} 
                title="Go back Home"
            />
           </View>
      
    );
  };
  export default AboutMe;