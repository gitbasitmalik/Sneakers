
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Dimensions } from 'react-native';
import { AppBar } from "@react-native-material/core";
import { Stack, Button, IconButton,Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Category from './Shoes'
import { FontAwesome5 } from '@expo/vector-icons';



const { height, width } = Dimensions.get('window')



export default function Home() {
  const navigation = useNavigation();
  const [active1,setActive1]=useState(false);
  const [active2,setActive2]=useState(true);
  const [active3,setActive3]=useState(true);
  const [active4,setActive4]=useState(true);

  const [showMore,setShowMore]=useState(false);



const handlepress=(id)=>{
  if (id==1) {
    
    setActive1(false)
    setActive2(true)
    setActive3(true)
    setActive4(true)
    navigation.navigate('Home');
  }else if(id==2){
    setActive2(false)
    setActive1(true)
    setActive3(true)
    setActive4(true)

    navigation.navigate('Profile');
  }else if(id==3){

    setActive1(true)
    setActive2(true)
    setActive3(false)
    setActive4(true)
    navigation.navigate('Notifications');
  }else
  if(id==4){
    setActive1(true)
    setActive2(true)
    setActive3(true)
    setActive4(false)
    navigation.navigate('Checkout');
  }
};


  const show=()=>{

    setShowMore(!showMore)
  }


  return (
    <View style= {styles.mainconatiner} >
        <AppBar
        style={{paddingTop:25,backfaceVisibility:'hidden',backgroundColor:'#F7F7F9',elevation:0}}
    title="Explore"
    titleStyle={styles.title}
    centerTitle={true}
    leading={props => (
  //  <IconButton icon={props => <Icon name="menu" onPress={(openDrawer)=>{navigation.openDrawer()}} {...props}  />} {...props} /> 
    <IconButton icon={props=>
      <Avatar label="Kent Dodds" color='whitesmoke' style={{backgroundColor:"white"}} size={40}/>} onPress={(openDrawer)=>navigation.openDrawer()}/> 
    )}
    trailing={props => (
      <IconButton
        icon={props => <FontAwesome5 onPress={()=>handlepress(1)} name="shopping-bag" style={{padding:9,color:'gray',backgroundColor:'white',borderRadius:50}} size={26} />}
        {...props}
      />
    )}
  />
  <View>
  <View style={{
                            flexDirection: 'row', padding: 10,
                            borderRadius:10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null
                            
                        }}>
                            <Icon name="search-web" size={20} style={{ marginRight: 10 }} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Nike jordan"
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
                            />
  </View>
  <ScrollView
                        // scrollEventThrottle={16}
                        style={{backgroundColor:"#F7F7F9"}}
                    >
                        <View style={{ flex: 1, backgroundColor: '#F7F7F9', paddingTop: 20 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500', paddingHorizontal: 20 ,paddingBottom:10}}>
                               Select Category
                            </Text>
                            <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                <TouchableOpacity style={styles.buttons}>
                                  <Text>All Shoes</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.buttons,{backgroundColor:'blue'}]}>
                                  <Text style={{color:'white'}}>Outdoor</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttons}>
                                  <Text>Tennis</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttons}>
                                  <Text>Sneakers</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttons}>
                                  <Text>All Shoes</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttons}>
                                  <Text>All Shoes </Text>
                                </TouchableOpacity>
                                </ScrollView>
                                <View style={{flexDirection:'row',width:width}}>

                                <Text style={{ fontSize: 18, fontWeight: '500', padding: 20,}}>
                               Popular Shoes
                            </Text>
                               <TouchableOpacity onPress={show} style={{color:'blue',padding:20,marginLeft:155,}} >
                               <Text style={{color:'blue',fontWeight:'bold',padding:2}}>See all</Text>
                               </TouchableOpacity>
                            
                                </View>
                
                            {showMore ? <View style={{ height: 460, marginTop: 5,flexDirection:'row'}}>
                                <ScrollView 
                               
                                ><View style={{flexDirection:'row',width:width,flexWrap:'wrap',justifyContent:'space-evenly'}}>

                                    <Category imageUri={require('../Sneakers/assets/images/NikeAirMax.png')}
                                        name="Nike AirMax" price="300$"
                                     />
                                    <Category imageUri={require('../Sneakers/assets/images/NikeJordan.png')}
                                        name="Nike Jordan" price="300$"
                                    />
                                   <Category imageUri={require('../Sneakers/assets/images/NikeAirMax.png')}
                                        name="Nike AirMax" price="300$"
                                    />
                                    <Category imageUri={require('../Sneakers/assets/images/NikeJordan.png')}
                                        name="Nike Jordan" price="300$"
                                    />
                                    <Category imageUri={require('../Sneakers/assets/images/NikeAirMax.png')}
                                        name="Nike AirMax" price="300$"
                                    />
                                     <Category imageUri={require('../Sneakers/assets/images/NikeAirMax.png')}
                                        name="Nike AirMax" price="300$"
                                    />
                                     <Category imageUri={require('../Sneakers/assets/images/NikeAirMax.png')}
                                        name="Nike AirMax" price="300$"
                                    />
                                     <Category imageUri={require('../Sneakers/assets/images/NikeAirMax.png')}
                                        name="Nike AirMax" price="300$"
                                    />
                                    <Category imageUri={require('../Sneakers/assets/images/NikeAirMax.png')}
                                        name="Nike AirMax" price="300$"
                                    />
                                     <Category imageUri={require('../Sneakers/assets/images/NikeAirMax.png')}
                                        name="Nike AirMax" price="300$"
                                    />
                                     <Category imageUri={require('../Sneakers/assets/images/NikeAirMax.png')}
                                        name="Nike AirMax" price="300$"
                                    />
                                </View>
                                </ScrollView>
                            </View>
                            
                            :
                            <View style={{ height: 190, marginTop: 5 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../Sneakers/assets/images/NikeAirMax.png')}
                                        name="Nike AirMax" price="300$"
                                    />
                                    <Category imageUri={require('../Sneakers/assets/images/NikeJordan.png')}
                                        name="Nike Jordan" price="300$"
                                    />
                                   <Category imageUri={require('../Sneakers/assets/images/NikeAirMax.png')}
                                        name="Nike AirMax" price="300$"
                                    />
                                    <Category imageUri={require('../Sneakers/assets/images/NikeJordan.png')}
                                        name="Nike Jordan" price="300$"
                                    />
                                    <Category imageUri={require('../Sneakers/assets/images/NikeAirMax.png')}
                                        name="Nike AirMax" price="300$"
                                    />
                                </ScrollView>
                            </View>
                            }
                            
                        </View>
                        
                    </ScrollView>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{ fontSize: 18, fontWeight: '500', padding: 20,}}>
                               New Arrivals
                            </Text>
                               <TouchableOpacity onPress={show} style={{color:'blue',padding:20,marginLeft:155}} >
                               <Text style={{color:'blue',fontWeight:'bold',padding:2}}>See all</Text>
                               </TouchableOpacity>
      </View>
      <View style={styles.NewArrivals}>
        <View>
          <Text style={{color:'grey'}}>
            Summer Sale
          </Text>
          <Text style={[styles.off,{marginTop:10}]}>15% OFF</Text>
          <Image source={require('../Sneakers/assets/images/NikeMoc.png')}
                        style={{ flex: 1, width: 140, height: 200, resizeMode:'contain',position:'absolute',marginLeft:160,marginTop:-66 }}
                    />
        </View>
      </View>
  </View>
 
              


{/* NavBar */}
<View style={styles.bottom}>


<Image
          resizeMode="cover"
          style={styles.cover}
          source={require('../Sneakers/assets/images/bottom.png')}
        />
        <FontAwesome5 onPress={()=>handlepress(1)} name="shopping-bag" size={26} style={styles.mainButton}  />
        
        <FontAwesome5 onPress={()=>handlepress(1)} name="home" size={26} style={[styles.close,{ color: active1 ? "grey" : "blue" }]}  />

 
     <FontAwesome5 onPress={()=>handlepress(2)} name="heart" size={26} style={[styles.close1,{ color: active2 ? "grey" : "blue" }]}  />
  
     <FontAwesome5 onPress={()=>handlepress(3)} name="bell" size={26} style={[styles.close2,{ color: active3 ? "grey" : "blue" }]}  />
  
     <FontAwesome5 onPress={()=>handlepress(4)} name="shopping-cart" size={26} style={[styles.close3,{ color: active4 ? "grey" : "blue" }]}  />
 
    
</View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  mainconatiner:
  {
    flex : 1,
    marginVertical : 60,
  },
  AppBar:{
    textAlign:'left',
   
  },
  title:{
    // width: "118px",
    // height: "38px",
    fontWeight:'bold',
    fontSize:32,
    // fontFamily:'',
    fontStyle: "normal",
    fontWeight: 'bold',
    // fontSize: "32px",
    // lineHeight: "38px",
    /* identical to box height */
    
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    
    /* #2B2B2B */
    
    color: '#2B2B2B',
  },
  
  bottom:{
    position: 'absolute',
    //  bottom: 0,
    width: '100%',
  top:710,
  

},
  cover: {
    flex: 1,
    borderRadius: 5,
    width:width,

  },
  close: {
    
    margin: 5,
    position: "absolute",
    top: 45,
    left: 25,
    width: 55,
    height: 55,
    
  },
  close1: {
    
    margin: 5,
    position: "absolute",
    top: 45,
    left: 90,
    width: 55,
    height: 55,
    
  },
  close2: {
    
    margin: 5,
    position: "absolute",
    top: 45,
    right:65,
    width: 55,
    height: 55,
    
  },
  close3: {
    
    margin: 5,
    position: "absolute",
    top: 45,
    right:0,
    width: 55,
    height: 55,
    
  },
  buttons:{
    backgroundColor:'white',flexDirection: 'row', padding: 10,
    borderRadius:8,
    backgroundColor: 'white', marginHorizontal: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 3,

  },
  mainButton:{
    margin: 5,
    position: "absolute",
    top: 1,
    right:160,
    width: 60,
    color:'white',
   backgroundColor:'blue',
   paddingLeft:19,
   paddingTop:15,
   borderRadius:100,
   height: 60,
  
   shadowColor: "#003DD3",
   shadowOffset: {
     width: 10,
     height: 10,
   },
   shadowOpacity: 0.9,
   shadowRadius: 10,
   
   elevation: 15,
  },
 NewArrivals:{
  backgroundColor:'white',
 height:110,
  marginLeft:20,
  padding:5,
  borderRadius:10,
  marginRight:20,
 },
 off: {
  padding:5,
  fontSize: 40,
  letterSpacing: -0.7,
  lineHeight: 37,
  fontWeight: "800",
  color: "#674DC5",
  marginTop: 4,
  textAlign: "left",
},
summerSale: {
  letterSpacing: -0.2,
  color: "#3b3b3b",
  fontSize: 12,

},
summerSaleTypo: {
  margin:5,
  fontWeight: "500", 
  textAlign: "left",
},
  
});











{/* <IconButton icon={props => <Icon name="menu" onPress={(openDrawer)=>{navigation.openDrawer()}} {...props}  />}/>     */}

{/* <AppBar
style={styles.bottom}
title="Explore"
    titleStyle={styles.title}
    variant='bottom'
    centerTitle={true}
    <IconButton icon={props => <Icon name="menu" onPress={(openDrawer)=>{navigation.openDrawer()}} {...props}  />} {...props} /> 
>>>>>>> 976fde6e4477b301f6b2bb864d9edbbc84792e08
    /> */}