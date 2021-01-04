import React from 'react';
import { StyleSheet,Button, Text, View, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const HomeScreen = ({ navigation }) => {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        
      },
      image: {
        width: 200,
        height: 200,
        borderColor: '#fff',
        borderRadius: 10,
        borderWidth: 4,
        position: 'relative',
        marginBottom: '10%',
        marginTop: '10%'
      },
      textClass: {
          color: '#fff',
          fontFamily: 'sans-serif-thin'
      },

      ImageClass: {
          height: 200,
          width: 600,
          justifyContent: 'center',
          marginBottom: '5%'
      },
      Imagetext: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
      },


    });



    return (
    <ScrollView>
        <View style={styles.container}> 
          <Image
              style={styles.image}
              source={require('../myImage.jpeg')}
            />
            <Text style={styles.textClass}>Krunal Mistry</Text>
            <Text style={styles.textClass}>West haven, CT, USA</Text>
            <Text style={styles.textClass}>Masters in Computer Science</Text>
            <StatusBar style="auto" />
            <TouchableOpacity activeOpacity = { .5 } onPress={ () => navigation.navigate('Projects')}>
 
                    <ImageBackground source={require('./projects.png')} style = {styles.ImageClass}>
                        <Text style = {styles.Imagetext}>Projects</Text>
                    </ImageBackground>
 
            </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .5 } onPress={ () => navigation.navigate('AboutMe')}>
 
                    <ImageBackground source={require('./aboutMe.png')} style = {styles.ImageClass}>
                        <Text style = {styles.Imagetext}>About Me</Text>
                    </ImageBackground>
 
            </TouchableOpacity> 
            <TouchableOpacity activeOpacity = { .5 } onPress={ () => navigation.navigate('Contact')}>
 
                    <ImageBackground source={require('./contactMe.png')} style = {styles.ImageClass}>
                        <Text style = {styles.Imagetext}>Contact Me</Text>
                    </ImageBackground>
 
            </TouchableOpacity>
        </View>
    </ScrollView>
    );
  };
  export default HomeScreen;