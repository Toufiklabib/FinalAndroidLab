import { ActivityIndicator, Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '@/constants/Colors';
import { TouchableOpacity } from 'react-native';
import { useNavigation, useRouter } from 'expo-router';
import auth from '../../../Firebase/Firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';
const SignUp = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, []);


  const handleSignup = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoading(false);
        router.replace('auth/SignIn');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setLoading(false);
      });

    
  };

  return (
    <View style={{
      padding: 30, marginTop: 30,
      backgroundColor: Colors.WHITE,
      height: '100%',
      paddingTop: 80,
    }} >
      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 30,

        }}
      >Create a new account </Text>

      <View style={{
        marginTop: 20,

      }} >
        <Text style={{
          fontFamily: 'outfit-medium',
          marginVertical: 2,
        }} >Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Your Full Name '
          onChangeText={(text) =>setName(text)}
        />
      </View>

      <View style={{
        marginTop: 20,

      }} >
        <Text style={{
          fontFamily: 'outfit-medium',
          marginVertical: 2,
        }} >Email</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Your Email'
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      {/* password */}
      <View style={{
        marginTop: 20,

      }} >
        <Text style={{
          fontFamily: 'outfit-medium',
          marginVertical: 2,
        }} >Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder='Enter Your Password'
          onChangeText={(text) => setPassword(text)}

        />
      </View>



      <TouchableOpacity
        onPress={handleSignup}
        style={{
          padding: 18,
          backgroundColor: Colors.BLACK,
          borderRadius: 10,
          marginTop: 40,
        }}>
        {
          loading ? <>
            <ActivityIndicator size="small" color={Colors.WHITE} style={styles.loading} />
          </> : <>
            <Text style={{
              color: Colors.WHITE,
              fontFamily: 'outfit-medium',
              textAlign: 'center',
            }} >Sign Up </Text>
          </>
        }


      </TouchableOpacity >






      <TouchableOpacity onPress={() => router.replace('auth/SignIn')} style={{
        padding: 18,
        borderColor: Colors.BLACK,
        borderRadius: 10,
        marginTop: 40,
        borderRadius: 10,
        borderWidth: 2,
        paddingLeft: 10,
      }}  >
        <Text style={{
          color: Colors.BLACK,
          fontFamily: 'outfit-medium',
          textAlign: 'center',
        }} > Already have an account? </Text>
      </TouchableOpacity >

    </View>
  )
};

export default SignUp;

const styles = StyleSheet.create({

  input: {
    borderRadius: 10,
    borderWidth: 2,
    paddingLeft: 10,
    padding: 15,
    borderColor: Colors.GRAY,
  },

})