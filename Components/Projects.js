import React from 'react';
import { StyleSheet,Button, View, Text, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Projects = ({ navigation }) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            flexDirection: 'row',
            flexWrap: 'wrap',
            
        },
        box1: {
            height: 200,
            width: 200,
            backgroundColor: 'red',
            marginLeft: '1%'
        },
        box2: {
            height: 200,
            width: 200,
            backgroundColor: 'yellow',
            marginLeft: '1%'
        },
        box3: {
            height: 200,
            width: 200,
            backgroundColor: 'blue',
            marginLeft: '1%',
        },
        box4: {
            height: 200,
            width: 200,
            backgroundColor: 'powderblue',
            marginLeft: '1%',
        },
        box5: {
            height: 200,
            width: 200,
            backgroundColor: 'skyblue',
            marginLeft: '1%'
        }
    });
    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.box1}
                >
                    <Text>Name of Project 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.box2}
                >
                    <Text>Name of Project 2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.box3}
                >
                    <Text>Name of Project 3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.box4}
                >
                    <Text>Name of Project 4</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.box5}
                >
                    <Text>Name of Project 5</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
      
    );
  };
  export default Projects;