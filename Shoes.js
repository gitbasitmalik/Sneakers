
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// class Category extends Component {
//     render() {
        
//         return (
//             <View style={{ height: 170, width: 140, marginLeft: 20, borderColor: '#dddddd' ,borderRadius:10,borderEndWidth:2}}>
//                 <View style={{ flex: 2 }}>
//                     <Image source={this.props.imageUri}
//                         style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
//                     />
//                 </View>
            
//                 <View style={{ flex: 1, paddingLeft: 10, }}>
//                     <Text>{this.props.name}</Text>
//                 </View>
                
//                 <FontAwesome5 onPress={()=>{navigation.navigate('MyCart')}} name="plus" style={{color:'white',position:'absolute',backgroundColor:'blue',padding:8,borderColor:'blue',marginLeft:107,marginTop:135,borderRadius:10}} size={18} />
//             </View>
            

// );
//     }
// }
// export default Category;


export default function Category(props) {
    const navigation=useNavigation()
    return(
<View style={{ height: 170, width: 140, marginLeft: 20, borderColor: '#dddddd' ,borderRadius:10,borderWidth:2,backgroundColor:'white'}}>
                <View style={{ flex: 2 }}>
                    <Image source={props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <Text style={{color:'blue',paddingLeft:10}}>Best Seller</Text>
                <View style={{ flex: 1, paddingLeft: 10, }}>
                    <Text>{props.name}</Text>
                    <Text>{props.price}</Text>
                </View>
                
                <FontAwesome5 onPress={()=>{navigation.navigate('Cart') }} name="plus" style={{color:'white',position:'absolute',backgroundColor:'blue',padding:8,borderColor:'blue',marginLeft:105,marginTop:133,borderRadius:10}} size={18} />
            </View>


    )
    
}















const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});