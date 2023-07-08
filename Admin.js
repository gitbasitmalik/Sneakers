
// import React, { useState, useEffect } from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   Image
// } from "react-native";
// import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
// import { db } from "./config";
// import { FlatList } from "react-native";

// const Admin = () => {
//   const [sneakerID, setSneakerID] = useState("");
//   const [sneakerName, setSneakerName] = useState("");
//   const [sneakerPrice, setSneakerPrice] = useState("");
//   const [sneakerUrl, setSneakerUrl] = useState("");
//   const [sneakerData, setSneakerData] = useState([]);

//   const sendSneakerData = async () => {
//     if (sneakerID && sneakerName && sneakerPrice && sneakerUrl) {
//       await setDoc(doc(db, "Sneakers", sneakerID), {
//         id: sneakerID,
//         name: sneakerName,
//         price: sneakerPrice,
//         url: sneakerUrl,
//       });
//       clearInputFields();
//       getSneakerData();
//     }
//   };

//   const getSneakerData = async () => {
//     const querySnapshot = await getDocs(collection(db, "Sneakers"));
//     const data = querySnapshot.docs.map((doc) => doc.data());
//     setSneakerData(data);
//   };

//   const clearInputFields = () => {
//     setSneakerID("");
//     setSneakerName("");
//     setSneakerPrice("");
//     setSneakerUrl("");
//   };

//   const updateSneakerData = async () => {
//     const sneakerRef = doc(db, "Sneakers", sneakerID.toString());
//     await setDoc(sneakerRef, {
//       id: sneakerID,
//       name: sneakerName,
//       price: sneakerPrice,
//       url: sneakerUrl,
//     });
//     getSneakerData();
//   };

//   const deleteSneakerData = async (id) => {
//     await deleteDoc(doc(db, "Sneakers", id));
//     getSneakerData();
//   };

//   const renderSneakerItem = ({ item }) => (
//     <View style={styles.tableRow}>
//       <Text style={styles.tableCell}>{item.id}</Text>
//       <Text style={styles.tableCell}>{item.name}</Text>
//       <Text style={styles.tableCell}>{item.price}</Text>
//        <View style={styles.imageContainer}>
//         <Image source={{ uri: item.url }} style={styles.image} />
//       </View>
//       <TouchableOpacity onPress={() => deleteSneakerData(item.id)}>
//         <Text style={styles.tableCell}>Delete</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   useEffect(() => {
//     getSneakerData();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.inputStyles}
//         value={sneakerID}
//         placeholder="Enter Sneaker ID"
//         onChangeText={(text) => setSneakerID(text)}
//       />
//       <TextInput
//         style={styles.inputStyles}
//         value={sneakerName}
//         placeholder="Enter Sneaker Name"
//         onChangeText={(text) => setSneakerName(text)}
//       />
//       <TextInput
//         style={styles.inputStyles}
//         value={sneakerPrice}
//         placeholder="Enter Sneaker Price"
//         onChangeText={(text) => setSneakerPrice(text)}
//       />
//       <TextInput
//         style={styles.inputStyles}
//         value={sneakerUrl}
//         placeholder="Enter Image URL"
//         onChangeText={(text) => setSneakerUrl(text)}
//       />

//       <TouchableOpacity onPress={getSneakerData}>
//         <Text style={styles.btnCon}>Get Data</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={sendSneakerData}>
//         <Text style={styles.btnCon}>Send Data</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={clearInputFields}>
//         <Text style={styles.btnCon}>Clear Fields</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={updateSneakerData}>
//         <Text style={styles.btnCon}>Update Data</Text>
//       </TouchableOpacity>

//       <View style={styles.tableContainer}>
//         <View style={styles.tableHeader}>
//           <Text style={styles.tableHeaderText}>ID</Text>
//           <Text style={styles.tableHeaderText}>Name</Text>
//           <Text style={styles.tableHeaderText}>Price</Text>
//           <Text style={styles.tableHeaderText}>Image</Text>
//           <Text style={styles.tableHeaderText}>Delete Data</Text>
//         </View>
//         <FlatList
//           data={sneakerData}
//           renderItem={renderSneakerItem}
//           keyExtractor={(item) => item.id}
//           style={styles.tableData}
//         />
//       </View>
//     </View>
//   );
// };

// export default Admin;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 20,
//   },
//   inputStyles: {
//     padding: 15,
//     borderWidth: 1,
//     borderRadius: 3,
//     backgroundColor: "#f3f3f3",
//     marginBottom: 10,
//   },
//   btnCon: {
//     padding: 20,
//     backgroundColor: "#000",
//     color: "#fff",
//     textAlign: "center",
//     borderRadius: 100,
//     marginTop: 5,
//   },
//   tableContainer: {
//     borderWidth: 1,
//     borderRadius: 3,
//     borderColor: "#ccc",
//     marginTop: 20,
//   },
//   tableHeader: {
//     flexDirection: "row",
//     backgroundColor: "#f2f2f2",
//     paddingVertical: 10,
//     paddingHorizontal: 5,
//   },
//   tableHeaderText: {
//     flex: 1,
//     textAlign: "center",
//     fontWeight: "bold",
//   },
//   tableData: {
//     maxHeight: 200,
//   },
//   tableRow: {
//     flexDirection: "row",
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//     paddingVertical: 10,
//     gap: 5,
//     paddingHorizontal: 5,
//   },
//   tableCell: {
//     flex: 1,
//     textAlign: "center",
//   },
//   image: {
//     width: 50,
//     height: 50,
//   },
// });

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView, 
  Alert
} from "react-native";
import { collection, deleteDoc, doc, getDocs, setDoc} from "firebase/firestore";
import { db } from "./config";


const Admin = () => {
  const [sneakerID, setSneakerID] = useState("");
  const [sneakerName, setSneakerName] = useState("");
  const [sneakerPrice, setSneakerPrice] = useState("");
  const [sneakerUrl, setSneakerUrl] = useState("");
  const [sneakerData, setSneakerData] = useState([]);

  const sendSneakerData = async () => {
    if (sneakerID && sneakerName && sneakerPrice && sneakerUrl) {
      await setDoc(doc(db, "Sneakers", sneakerID), {
        id: sneakerID,
        name: sneakerName,
        price: sneakerPrice,
        url: sneakerUrl,
      });
      clearInputFields();
      getSneakerData();
      Alert.alert("Item Added Successfully ❤️")
    }
  };

  const getSneakerData = async () => {
    const querySnapshot = await getDocs(collection(db, "Sneakers"));
    const data = querySnapshot.docs.map((doc) => doc.data());
    setSneakerData(data);
  };

  const clearInputFields = () => {
    setSneakerID("");
    setSneakerName("");
    setSneakerPrice("");
    setSneakerUrl("");
  };

  const updateSneakerData = async () => {
    const sneakerRef = doc(db, "Sneakers", sneakerID.toString());
    await setDoc(sneakerRef, {
      id: sneakerID,
      name: sneakerName,
      price: sneakerPrice,
      url: sneakerUrl,
    });
    clearInputFields();
    getSneakerData();
  };

  const deleteSneakerData = async (id) => {
    await deleteDoc(doc(db, "Sneakers", id));
    getSneakerData();
    Alert.alert("Item Deleted Successfully 😢")
  };

 

  useEffect(() => {
    getSneakerData();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={sneakerID}
        placeholder="Enter Sneaker ID"
        onChangeText={(text) => setSneakerID(text)}
      />
      <TextInput
        style={styles.input}
        value={sneakerName}
        placeholder="Enter Sneaker Name"
        onChangeText={(text) => setSneakerName(text)}
      />
      <TextInput
        style={styles.input}
        value={sneakerPrice}
        placeholder="Enter Sneaker Price"
        onChangeText={(text) => setSneakerPrice(text)}
      />
      <TextInput
        style={styles.input}
        value={sneakerUrl}
        placeholder="Enter Image URL"
        onChangeText={(text) => setSneakerUrl(text)}
      />

      <TouchableOpacity style={styles.button} onPress={sendSneakerData}>
        <Text style={styles.buttonText}>Add Sneaker</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={getSneakerData}>
        <Text style={styles.buttonText}>Display Sneaker</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={updateSneakerData}>
        <Text style={styles.buttonText} >Update Sneaker</Text>
      </TouchableOpacity>

      <ScrollView style={styles.cardContainer}>
        {sneakerData.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardText}>id: {item.id}</Text>
            <Text style={styles.cardText}>Name: {item.name}</Text>
            <Text style={styles.cardText}>Price: {item.price}</Text>
            <Image source={{ uri: item.url }} style={styles.cardImage} />
            <TouchableOpacity onPress={() => deleteSneakerData(item.id)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Admin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    top : 10,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: "#f3f3f3",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 0,
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  cardContainer: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#ccc",
    marginTop: 20,
  },
  card: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
  deleteButton: {
    alignSelf : "center",
    borderRadius : 5,
    borderWidth: 2,
    backgroundColor : "red",
    color: "white",
  },
  cardList: {
    maxHeight: 200,
  },
});
