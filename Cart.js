import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Cart({route,navigation}) {

  const {name,price,imageUri}=route.params;
  const data=[
    {productname:name,price:price,imageUri:imageUri}
  ]

  return (
    <View style={styles.container}>
    <StatusBar hidden={true} />
    {data.map((card)=>(
      <Checkout1 imageUri={card.imageUri} name={card.productname} price={card.price} />
    ))

    }

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F7F7F9",
    alignItems: 'center',

  },
});