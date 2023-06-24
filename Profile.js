
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppBar } from "@react-native-material/core";
import {  IconButton  } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';
// import DrawerButton from './Navigator/DrawerNavigator/DrawerButton';
// import {Nike} from './firebase/firebaseConfig'
// import { doc, setDoc } from "firebase/firestore";
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Profile() {
  const navigation = useNavigation();
  return (
    <View >

<AppBar
    title="Title"
    leading={props => (
      <IconButton icon={props => <Icon name="menu" onPress={(openDrawer)=>{navigation.openDrawer()}} {...props}  />} {...props} />
    )}/>
 
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
});