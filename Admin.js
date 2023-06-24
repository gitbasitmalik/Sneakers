
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList , Button, Image } from 'react-native';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from './config';


const Admin = () => {
  const [sneakerID, setSneakerID] = useState('');
  const [sneakerName, setSneakerName] = useState('');
  const [sneakerPrice, setSneakerPrice] = useState('');
  const [sneakerImage, setSneakerImage] = useState(null);
  const [sneakerData, setSneakerData] = useState([]);

  useEffect(() => {
    readData();
  }, []);

  const writeData = async () => {
    try {
      await addDoc(collection(db, 'Sneaker'), {
        id: sneakerID,
        name: sneakerName,
        price: sneakerPrice,
        url: sneakerImage,
      });
      console.log('Sneaker Added successfully!');
      setSneakerID('');
      setSneakerName('');
      setSneakerPrice('');
      setSneakerImage('');
      readData(); 
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };

  const readData = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'Sneaker'));
      const sData = snapshot.docs.map((doc) => doc.data());
      setSneakerData(sData);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  const deleteData = async()=>
  {
     const sneakerRef = doc(db, 'Sneaker', sneakerID);
     await deleteDoc(sneakerRef);
console.log("data deleted Successfully");
 
  }
  const  updateData = async ()=>
  {
    const ref = doc(db, "Sneaker", sneakerID);
    await updateDoc(ref, {
        id: sneakerID,
        name: sneakerName,
        price: sneakerPrice,
        url: sneakerImage});
    console.log("data updated Successfully");

  }
  const addImageToFirestore = async () => {
    try {
      const docRef = await db.collection('Sneaker').add({ url: sneakerImage });
      console.log('Image added with ID: ', docRef.id);
      setSneakerImage(''); 
    } catch (error) 
    {
      console.error('Error adding image to Firestore: ', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.employeeItem}>
    <Image source={{ uri: item.url }} style={styles.sneakerImage} />
      <Text style={styles.employeeText}>Sneaker ID: {item.id}</Text>
      <Text style={styles.employeeText}>Sneaker Name: {item.name}</Text>
      <Text style={styles.employeeText}>Sneaker Price: {item.price}</Text>
    
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={{fontSize : 30 , color : "red" }}>Sneaker Admin</Text>
      <TextInput
        style={styles.input}
        placeholder="Sneaker ID"
        value={sneakerID}
        onChangeText={(text) => setSneakerID(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Sneaker Name"
        value={sneakerName}
        onChangeText={(text) => setSneakerName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Sneaker Price"
        value={sneakerPrice}
        onChangeText={(text) => setSneakerPrice(text)}
      />
      <TextInput
      style={styles.input}
        value={sneakerImage}
        onChangeText={text => setSneakerImage(text)}
        placeholder="Enter image URL"
      />
      <TouchableOpacity 
      style={styles.imageButton}
      onPress={addImageToFirestore}>
        <Text 
        style={styles.imageButtonText}>
            Add Image
        </Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={writeData}>
          <Text style={styles.buttonText}>Add Sneaker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={readData}>
          <Text style={styles.buttonText}>View Sneaker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={updateData}>
          <Text style={styles.buttonText}>Update Sneaker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={deleteData}>
          <Text style={styles.buttonText}>Delete Sneaker</Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.flatList}>
        <FlatList
        data={sneakerData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
      />
      </View>
    </View>
  );
};

export default Admin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    marginVertical  : 400
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    height: 50,
    marginTop: 20,
    paddingHorizontal: 10,
    fontSize: 16,
    
  },
  imageButton:{
    backgroundColor: 'brown',
    padding: 20,
    borderWidth: 1,
    flex: 1,
    marginRight: 10,

  },
  imageButtonText:
  {
    fontSize : 20,
    backgroundColor  :"pink",
    color : "black",
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {

    backgroundColor: 'blue',
    padding: 10,
    borderWidth: 1,
    flex: 1,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  employeeItem: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  employeeText: {
    fontSize: 16,
  },
 
  sneakerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },

});


