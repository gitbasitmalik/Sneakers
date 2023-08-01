import React from 'react'
import { View,Image,Text, ScrollView } from "react-native"
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'

import Cards from './DetailCards'
import { StyleSheet } from 'react-native'
import { FlatList} from 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { useState,useEffect } from 'react'
import { addDoc, collection, doc, getDocs, setDoc ,query, where,deleteDoc,updateDoc, documentId} from "firebase/firestore";
import { db } from "./config";
const CarouselCards = ({navigation}) => {

const [details,setDetails]=useState([])
const [refresh,setRefresh]=useState(1)
async function fetchData(){
  try{
 await getDocs(collection(db,"Sneakers"))
 .then((querySnapshot)=>{               
  const newData = querySnapshot.docs
      .map((doc) => ({...doc.data(), id:doc.id }));
  setDetails(newData)
  console.log("Data retrieved")

} )
  }catch(e){
    console.log(e)
  }
 
}



useEffect(() => {
  fetchData()

},[refresh] )




  const isCarousel = React.useRef(null)
  const [hidden,setHidden]=useState(false)
  const showMore =[{
    Description:'The Max Air 270 unit delivers unrivaled, all-day comfort.Nike Air is our iconic innovation that uses pressurized air in a durable, flexible membrane to provide lightweight cushioning. The air compresses on impact and then immediately returns to its original shape and volume, ready for the next impact.'
  }]
  return (
    <View style={{backgroundColor:'#F7F7F9',height:'100%'}}>
    <View style={{height:120,display:'flex',justifyContent:'center',alignItems:'center'}}>
      

    </View>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={details}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
      <Image
        source={require('./assets/images/Ellipse5.png')}
        style={{position:'absolute',marginLeft:20,marginRight:20,marginTop:400}}    
      />
       <Image
        source={require('./assets/images/Slider.png')}
        style={{position:'absolute',marginLeft:180,marginRight:20,marginTop:410,height:20}}
        
      />
      <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:'#F7F7F9',marginTop:90}}>
        <Cards  imageUri={require('./assets/images/Hero.png')}/>
        <Cards  imageUri={require('./assets/images/NikeAirMax.png')}/>
        {/* <Cards  imageUri={require('./assets/images/pngaaa.png')}/> */}
        {/* <Cards  imageUri={require('./assets/images/Nike-Shoe.png')}/> */}
        {/* <Cards  imageUri={require('./assets/images/NikeAirMax.png')}/> */}
        {/* <Cards  imageUri={require('./assets/images/NikeAirMax.png')}/> */}
      </View>
      <View style={{justifyContent:'center',marginLeft:10,flexDirection:'row',marginTop:10,backgroundColor:'#F7F7F9',height:200}}>
        <ScrollView>

        {hidden ?
           <FlatList
        data={showMore}
        style={{backgroundColor:'#F7F7F9',overflow:'scroll'}}
        keyExtractor={(item) => item.Description}
        renderItem={({ item }) => (
  <View style={{marginTop:10,borderColor:'black'}}>
    <Text style={styles.text}>{item.Description}</Text>
    <TouchableOpacity
        style={{width:40}}
        onPress={()=>{setHidden(false)}}
        >
        <Text style={{color:'blue',fontWeight:'bold'}}>hide</Text>
        </TouchableOpacity>
  </View>

)}
      />
      :
      <Text style={styles.text}>The Max Air 270 unit delivers unrivaled, all-day comfort. The sleek, running-inspired design roots you to everything Nike........<TouchableOpacity  onPress={()=>{setHidden(true)}}><Text style={{color:'blue'}}>Read more</Text></TouchableOpacity></Text>


     }
        </ScrollView>
      </View>
      <View style={{backgroundColor:'#F7F7F9',flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
        <TouchableOpacity
        >
        <FontAwesome5 name="heart" size={24} style={{color:'black',backgroundColor:'#ebebec',padding:20,borderRadius:50}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("MyCart")}
        style={{backgroundColor:'#0d6efd',padding:20,borderRadius:18,flexDirection:'row',paddingRight:29,paddingLeft:29}}
        ><FontAwesome5 name="shopping-bag" size={24} style={{color:'white'}} /><Text style={{color:'white',fontSize:16,marginLeft:5}}>Add to Cart</Text></TouchableOpacity>
      </View>
    </View>
  )
}


export default CarouselCards

const styles=StyleSheet.create({
text:{
  color:'#b3b3b3',
  fontStyle:'normal',
  fontWeight:400,
  fontSize:16,
}


})