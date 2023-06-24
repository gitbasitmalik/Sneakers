<<<<<<< HEAD
import { StyleSheet, Text, View , TextInput , TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { getAuth ,signInWithEmailAndPassword , signInWithPopup , GoogleAuthProvider } from "firebase/auth";
import { app } from './config';


const Login = ({navigation}) => {
  const[email, setEmail] = useState(null);
  const[password , setPassword ] = useState(null);
  const auth = getAuth(app);

    const googleLogin = async () => {
      try {
        
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log('Google login successful');
      } catch (error) {
        console.error('Google login error:', error);
      }
    };

  const loginButton = ()=>
  {
    signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    navigation.replace("Home")
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage)
  });


  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Again!</Text>
      <Text style={{fontSize : 20 , top : 40 , fontFamily : "Optima",}}>Fill your details or continue with social media.</Text>
     <View style={styles.fieldBox}>
     <Text style={{top: 20}}>Email Address:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        
      />
      <Text style={{top: 20}}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        
      />
      <TouchableOpacity onPress={()=>navigation.navigate('Forget')}>
      <Text>Forget Password?</Text>
      </TouchableOpacity>
     </View>
      <TouchableOpacity style={styles.LoginButton} onPress={()=>loginButton()} >
        <Text style={styles.LoginButtonText}>Login </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>googleLogin()} >
        <Text style={styles.buttonText}>Login with Google</Text>
      </TouchableOpacity>
      <View >
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupText}>New User? Create Account</Text>
      </TouchableOpacity>
      </View>
    </View>

  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  fieldBox:
  {
    marginTop: 60,
    
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius : 15,
    marginTop: 25,
    paddingHorizontal: 10,
  },
  button: {
    top: 40, 
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily : "Optima",
    fontSize : 18,
  },
  LoginButton:
  {
    top: 20, 
    width: '100%',
    backgroundColor: '#1e90ff',
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    

  },
  LoginButtonText:
  {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily : "Optima",
    fontSize : 18,
  },
  signupText: {
    marginTop: 250,
    fontSize: 16,
    alignSelf : "center",
    fontFamily : "Optima",
  },
  title:
  {
    top : 30,
    fontWeight : "700",
    fontSize : 40,
    fontFamily : "Optima",
    alignSelf : "center",
  }
});

=======
import { StyleSheet, Text, View , TextInput , TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { getAuth ,signInWithEmailAndPassword , signInWithPopup , GoogleAuthProvider } from "firebase/auth";
import { app } from './config';


const Login = ({navigation}) => {
  const[email, setEmail] = useState(null);
  const[password , setPassword ] = useState(null);
  const auth = getAuth(app);

    const googleLogin = async () => {
      try {
        
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log('Google login successful');
      } catch (error) {
        console.error('Google login error:', error);
      }
    };

  const loginButton = ()=>
  {
    signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    navigation.replace("Home")
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage)
  });


  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Again!</Text>
      <Text style={{fontSize : 20 , top : 40 , fontFamily : "Optima",}}>Fill your details or continue with social media.</Text>
     <View style={styles.fieldBox}>
     <Text style={{top: 20}}>Email Address:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        
      />
      <Text style={{top: 20}}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        
      />
      <TouchableOpacity onPress={()=>navigation.navigate('Forget')}>
      <Text>Forget Password?</Text>
      </TouchableOpacity>
     </View>
      <TouchableOpacity style={styles.LoginButton} onPress={()=>loginButton()} >
        <Text style={styles.LoginButtonText}>Login </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>googleLogin()} >
        <Text style={styles.buttonText}>Login with Google</Text>
      </TouchableOpacity>
      <View >
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupText}>New User? Create Account</Text>
      </TouchableOpacity>
      </View>
    </View>

  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  fieldBox:
  {
    marginTop: 60,
    
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius : 15,
    marginTop: 25,
    paddingHorizontal: 10,
  },
  button: {
    top: 40, 
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily : "Optima",
    fontSize : 18,
  },
  LoginButton:
  {
    top: 20, 
    width: '100%',
    backgroundColor: '#1e90ff',
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    

  },
  LoginButtonText:
  {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily : "Optima",
    fontSize : 18,
  },
  signupText: {
    marginTop: 250,
    fontSize: 16,
    alignSelf : "center",
    fontFamily : "Optima",
  },
  title:
  {
    top : 30,
    fontWeight : "700",
    fontSize : 40,
    fontFamily : "Optima",
    alignSelf : "center",
  }
});

>>>>>>> 976fde6e4477b301f6b2bb864d9edbbc84792e08
