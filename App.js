import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Components/Home';
import Projects from "./Components/Projects";
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';

const Drawer = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Projects" component={Projects} />
        <Drawer.Screen name="AboutMe" component={AboutMe} />
        <Drawer.Screen name="Contact" component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}




