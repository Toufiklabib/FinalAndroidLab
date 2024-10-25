// import { StyleSheet, Text, View } from 'react-native';
// import React, { createContext, useEffect, useState } from 'react';
// import auth from '../Firebase/Firebase.init';
// import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
// export const FirebaseConext = createContext();
// const AuthProvider = ({children}) => {

//     const [loading, setLoading] = useState(false);
//     const [user,setUser] = useState(null);
//     const register =(email,password) =>{
//         setLoading(true)
//         return createUserWithEmailAndPassword(auth,email,password) ;
//      }
//      const login = (email,password) =>{
//         setLoading(true);
//          return signInWithEmailAndPassword(auth,email,password);
//       }
//       const logout = () =>{
//         setLoading(true);
//         return signOut(auth);
       
//      }
//      const resetPass = (email) =>{
//       setLoading(true);
//       return  sendPasswordResetEmail(auth, email);
//      }

//      useEffect(()=>{
//         const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
//           if(currentUser === null ||    currentUser.emailVerified )
//           {
//              setUser(currentUser);
             
//           }  
//           setLoading(false);
//           })
//           return () =>{
//              unsubscribe();
//           }
          
//        },[])
//     const myAuth = {register ,login, logout ,user ,loading ,setLoading ,resetPass};
//   return (
//     <FirebaseConext.Provider value={myAuth} >
//     {children}
//  </FirebaseConext.Provider>
//   )
// };

// export default AuthProvider;

import { StyleSheet} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import {auth} from '../Firebase/Firebase.init'
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
export const FirebaseConext = useContext();
const AuthProvider = ({children}) => {

   const [loading, setLoading] = useState(false);
    const [user,setUser] = useState(null);
    const register =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password) ;
     }
     const login = (email,password) =>{
        setLoading(true);
         return signInWithEmailAndPassword(auth,email,password);
      }
      const logout = () =>{
        setLoading(true);
        return signOut(auth);
       
     }
     const resetPass = (email) =>{
      setLoading(true);
      return  sendPasswordResetEmail(auth, email);
     }


        useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
          if(currentUser === null ||    currentUser.emailVerified )
          {
             setUser(currentUser);
             
          }  
          setLoading(false);
          })
          return () =>{
             unsubscribe();
          }
          
       },[])
   const myAuth = {register ,login, logout ,user ,loading ,setLoading ,resetPass};
  return (
    <FirebaseConext.Provider value={myAuth} >
      {children}
    </FirebaseConext.Provider>
  )
}

export default AuthProvider;

const styles = StyleSheet.create({})