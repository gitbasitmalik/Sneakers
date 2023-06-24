<<<<<<< HEAD
import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated, ScrollView } from 'react-native';
import { RadioButton, Button, TextInput,Card } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';

const PlaceOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState('cashOnDelivery');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationOpacity] = useState(new Animated.Value(0));

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };

  const placeOrderFunction = () => { 

    if(validateFields()) {
      setShowConfirmation(true);
      Animated.timing(confirmationOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          setShowConfirmation(false);
        }, 2500);
      });
    }
  };

  const validateFields = () => {
    if (
      name.trim() === '' ||
      email.trim() === '' ||
      phone.trim() === '' ||
      address.trim() === '' ||
      city.trim() === ''
    ) {
      
      return false;
    }
    return true;
  };

  return (
    <ScrollView style={styles.container}>
    
      <Text style={styles.title}> Contact  Information </Text>
      <TextInput
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Phone"
        value={phone}
        onChangeText={(text) => setPhone(text)}
        mode="outlined"
        style={styles.input}
      />

      <Text style={styles.title}>Address</Text>
      <TextInput
        label="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="City"
        value={city}
        onChangeText={(text) => setCity(text)}
        mode="outlined"
        style={styles.input}
      />
      

      <Text style={styles.title}>Payment Method</Text>
      <View style={styles.paymentOptionContainer}>
        <RadioButton.Group onValueChange={handlePaymentMethodChange} value={paymentMethod} >
          <View style={styles.paymentOption}>
            <RadioButton value="cashOnDelivery" />
            <Text>Cash on Delivery</Text>
            <MaterialIcons name="local-shipping" size={24} color="black" />
          </View>
          <View style={styles.paymentOption}>
            <RadioButton value="creditCard" />
            <Text>Credit Card</Text>
            <MaterialIcons name="credit-card" size={24} color="black" />
          </View>
        </RadioButton.Group>
      </View>

      <Card style={styles.mapCard}>
        <Card.Content>
          <MapView style={styles.map} initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
            <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
          </MapView>
        </Card.Content>
      </Card>

      <Button style={styles.btn} mode="contained" onPress={placeOrderFunction}>
        Place Order
      </Button>

      {showConfirmation && (
        <Animated.View style={[styles.confirmationContainer, { opacity: confirmationOpacity }]}>
          <MaterialIcons name="check-circle" size={64} color="green" />
          <Text style={styles.confirmationText}>Order Placed Successfully!</Text>
        </Animated.View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop:45,
  },
  input: {
    marginBottom: 8,
  },
  paymentOptionContainer: {
    marginBottom: 16,
    
  },
  mapCard: {
    marginBottom: 18,
    marginTop:-15,
  },
  map: {
    
    height: 140,
    width:350,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    
  },
  confirmationContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -100 }, { translateY: -25 }],
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  confirmationText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btn:{
    backgroundColor:'#0D6EFD'
  },
});

=======
import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated, ScrollView } from 'react-native';
import { RadioButton, Button, TextInput,Card } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';

const PlaceOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState('cashOnDelivery');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationOpacity] = useState(new Animated.Value(0));

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };

  const placeOrderFunction = () => { 

    if(validateFields()) {
      setShowConfirmation(true);
      Animated.timing(confirmationOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          setShowConfirmation(false);
        }, 2500);
      });
    }
  };

  const validateFields = () => {
    if (
      name.trim() === '' ||
      email.trim() === '' ||
      phone.trim() === '' ||
      address.trim() === '' ||
      city.trim() === ''
    ) {
      
      return false;
    }
    return true;
  };

  return (
    <ScrollView style={styles.container}>
    
      <Text style={styles.title}> Contact  Information </Text>
      <TextInput
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Phone"
        value={phone}
        onChangeText={(text) => setPhone(text)}
        mode="outlined"
        style={styles.input}
      />

      <Text style={styles.title}>Address</Text>
      <TextInput
        label="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="City"
        value={city}
        onChangeText={(text) => setCity(text)}
        mode="outlined"
        style={styles.input}
      />
      

      <Text style={styles.title}>Payment Method</Text>
      <View style={styles.paymentOptionContainer}>
        <RadioButton.Group onValueChange={handlePaymentMethodChange} value={paymentMethod} >
          <View style={styles.paymentOption}>
            <RadioButton value="cashOnDelivery" />
            <Text>Cash on Delivery</Text>
            <MaterialIcons name="local-shipping" size={24} color="black" />
          </View>
          <View style={styles.paymentOption}>
            <RadioButton value="creditCard" />
            <Text>Credit Card</Text>
            <MaterialIcons name="credit-card" size={24} color="black" />
          </View>
        </RadioButton.Group>
      </View>

      <Card style={styles.mapCard}>
        <Card.Content>
          <MapView style={styles.map} initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
            <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
          </MapView>
        </Card.Content>
      </Card>

      <Button style={styles.btn} mode="contained" onPress={placeOrderFunction}>
        Place Order
      </Button>

      {showConfirmation && (
        <Animated.View style={[styles.confirmationContainer, { opacity: confirmationOpacity }]}>
          <MaterialIcons name="check-circle" size={64} color="green" />
          <Text style={styles.confirmationText}>Order Placed Successfully!</Text>
        </Animated.View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop:45,
  },
  input: {
    marginBottom: 8,
  },
  paymentOptionContainer: {
    marginBottom: 16,
    
  },
  mapCard: {
    marginBottom: 18,
    marginTop:-15,
  },
  map: {
    
    height: 140,
    width:350,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    
  },
  confirmationContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -100 }, { translateY: -25 }],
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  confirmationText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btn:{
    backgroundColor:'#0D6EFD'
  },
});

>>>>>>> 976fde6e4477b301f6b2bb864d9edbbc84792e08
export default PlaceOrder;