import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../Home';
import Favourite from '../../Favourite';
import Notifications from '../../Notifications';
import MyCart from '../../Cart';
import Orders from '../../Orders';
import Profile from '../../Profile';
import SignOut from '../../SignOut';
import TabNavigator from '../TabNavigator/TabScreen';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {



  return (
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
        drawerStyle: {
          width: 260,
          paddingTop: 60,
          backgroundColor:'blue',
          
        },
        headerShown:false,
      }} >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home', headerShown: false ,drawerActiveBackgroundColor:'white'}}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{ title: 'Profile', headerShown: false ,drawerActiveBackgroundColor:'white'}}
        />
        <Drawer.Screen
          name="MyCart"
          component={MyCart}
          options={{ title: 'My Cart', headerShown: true,drawerActiveBackgroundColor:'white'}}
        />
        <Drawer.Screen
          name="Favourite"
          component={Favourite}
          options={{ title: 'Favourites', headerShown: false,drawerActiveBackgroundColor:'white' }}
        />
        <Drawer.Screen
          name="Orders"
          component={Orders}
          options={{ title: 'Orders', headerShown: false,drawerActiveBackgroundColor:'white' }}
        />
        <Drawer.Screen
          name="Notifications"
          component={Notifications}
          options={{ title: 'Notifications', headerShown: false }}
        />
        <Drawer.Screen
          name="Sign Out"
          component={SignOut}
          options={{ title: 'Sign Out', headerShown: false }}
        />

        {/* Hidden Items from the drawer */}
        {/* <Drawer.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false, drawerItemStyle: { height: 0 } }}
        /> */}
        {/* <Drawer.Screen
          name='Favourites'
          component={Favourite}
          options={{ headerShown: false, drawerItemStyle: { height: 0 } }}
        /> */}
        {/* <Drawer.Screen
          name="Notifications"
          component={Notifications}
          options={{ headerShown: false, drawerItemStyle: { height: 0 } }}
        /> */}
        {/* <Drawer.Screen
          name="My Cart"
          component={MyCart}
          options={{ headerShown: false, drawerItemStyle: { height: 0 } }}
        /> */}






      </Drawer.Navigator>

  
  );
};