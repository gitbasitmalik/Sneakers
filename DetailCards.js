import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
export default function Cards(props) {
    // const navigation=useNavigation()
    return(
        <>
    <View style={{display:'flex',marginLeft:15}} >
<View style={{ height: 60, width: 60,marginTop: 8,borderColor: '#dddddd' ,borderRadius:18,borderWidth:1,backgroundColor:'white',display:'flex'}} >
                <View style={{ flex: 2 }}>
                    <Image source={props.imageUri}
                        style={{ flex: 1, width: 55, height: 52,resizeMode:'stretch' }}
                    />
                </View> 
            </View>

    </View>
        </>


    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});