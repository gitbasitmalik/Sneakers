import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Category(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      
      <View style={styles.imageContainer}>
        <Image
          source={{uri: props.imageUri}}
          style={styles.image}
        />
      </View>
      <Text style={styles.label}>Best Seller</Text>
      <View style={styles.detailsContainer}>
        <Text>{props.name}</Text>
        <Text>{props.price}</Text>
      </View>
      <FontAwesome5
        onPress={() => { navigation.navigate('Checkout', { item: props }) }}
        name="plus"
        style={styles.plusIcon}
        size={18}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 170,
    width: 140,
    marginLeft: 20,
    borderColor: '#dddddd',
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: 'white'
  },
  imageContainer: {
    flex: 2
  },
  image: {
    flex: 1,
    width: "auto",
    height: "auto",
    resizeMode: 'cover'
  },
  label: {
    color: 'blue',
    paddingLeft: 10
  },
  detailsContainer: {
    flex: 1,
    paddingLeft: 10
  },
  plusIcon: {
    color: 'white',
    position: 'absolute',
    backgroundColor: 'blue',
    padding: 8,
    borderColor: 'blue',
    marginLeft: 105,
    marginTop: 133,
    borderRadius: 10
  }
});
