import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width+10
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH )

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
       source={{ uri: item.url }}
        style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height:300,
    backgroundColor: '#F7F7F9',
    borderRadius: 8,
    width: ITEM_WIDTH,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    justifyContent:'center'
  },
  image: {
    marginLeft:50,
    width:272.84882,
    height:341.061,
    marginTop:30,
    resizeMode:'stretch',
    
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#F7F7F9",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem