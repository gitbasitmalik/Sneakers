import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppIntro from './AppIntro'
import Login from './Login'
import Home from './Home';
import Signup from './Signup';
import Profile from './Profile';
import ForgetPassword from './ForgetPassword';
import Notifications from './Notifications';
import Checkout from './Checkout';
import PlaceOrder from './PlaceOrder';
import Cart from './Cart';
import Admin from './Admin';

const App = () => {
  const Stack = createStackNavigator();
  return (
    
    <NavigationContainer>
    <Stack.Navigator initialRouteName="AppIntro" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AppIntro" component={AppIntro} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Forget" component={ForgetPassword} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Admin" component={Admin} />
    </Stack.Navigator>
  </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})


 
// import { StyleSheet,  View } from 'react-native'
// import React from 'react'
// import Task from './Task'
// const App = () => {
//   return (
//     <View>
//       <Task/>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})