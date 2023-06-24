import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Home from './Home';

const slides = [
  {
    key: '1',
    title: 'Hello Sneakers',
    text: '',
    image: require('../Sneakers/assets/image3.png'),
    description: ""
  },
  {
    key: '2',
    title: '',
    text: 'Let’s Start Journey With Sneakers',
    image: require('../Sneakers/assets/sneaker1.png'),
    description: "Smart, Gorgeous & Fashionable Collection Explore Now"
  },
  {
    key: '3',
    title: '',
    text: 'You Have the Power To',
    image: require('../Sneakers/assets/sneaker2.png'),
    description: "There Are Many Beautiful And Attractive Plants To Your Room"
  },
  
];

const AppIntro = ({ navigation }) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const handleGetStarted = () => {
    navigation.navigate("Login");
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  };

  const renderNextButton = () => {
    return <Text style={styles.buttonText}>Next</Text>
  };

  const renderDoneButton = () => {
    return (
      <TouchableOpacity style={styles.buttonText} onPress={handleGetStarted}>
      <Text>Get Started</Text>
    </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <AppIntroSlider style = {{backgroundColor: "#1483C2"}}
        renderItem={renderItem}
        data={slides}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        onDone={() => setShowRealApp(true)}
      />
      {showRealApp && (
        <Home/>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1483C2',
  },
  title: {
    fontSize: 40,
    bottom :40,
    fontWeight: "900",
    color : "white",
    textTransform : "uppercase",
    fontFamily : "Optima",
  },
  image: {
    width: 400,
    height: 400,
    resizeMode : "cover",
    backgroundColor: '#1483C2',
  },
  text: {
    fontSize: 34,
    marginBottom: 20,
    textAlign: 'center',
    color: "white",
    fontWeight : "600",
    fontFamily : "Optima",

  },
  buttonText: {
    textAlign : "left",
    fontSize: 20,
    color : "black",
    backgroundColor : "white",
    padding : 15,
    
    
  },
  description:
  {
    color : "#D8D8D8",
    fontSize :18,
    textAlign: 'center'
    
  },
  realAppContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent : "center"
  },
});

export default AppIntro;
