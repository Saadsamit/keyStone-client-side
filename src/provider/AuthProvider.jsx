import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../Firebase/firebase.config';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
export const myAuthProvider = createContext({})
const AuthProvider = ({children}) => {
    const axiosPrivate = useAxiosPrivate()
    const [user, setUser] = useState()
    const [loading, isLoading] = useState(true)
    const googleLoginUser =()=>{
        const googleProvider = new GoogleAuthProvider()
        isLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const createUser = (email,password)=>{
        isLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUser = (name,image)=>{
        isLoading(true)
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: image,
        })
    }
    const loginUser = (email,password)=>{
        isLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logoutUser =()=>{
        isLoading(true)
        return signOut(auth)
    }
    // useEffect(()=>{
    //     const unSubscribe = onAuthStateChanged(auth,currentUser=>{
    //         setUser(currentUser);
    //         isLoading(false)
    //         if(currentUser){
    //             axiosPrivate.post('/jwt', {email: currentUser?.email})
    //             .then(res=>{
    //                 console.log(res.data);
    //             })
    //         }else{
    //             axiosPrivate.post('/logout', {email: currentUser?.email})
    //             .then(res=>{
    //                 console.log(res.data);
    //             })
    //         }
    //     })
    //     return ()=>{
    //         unSubscribe()
    //     }
    // },[axiosPrivate])
    const contextData = {user,loading,createUser,updateUser,loginUser,logoutUser,googleLoginUser}
    return (
        <myAuthProvider.Provider value={contextData}>
            {children}
        </myAuthProvider.Provider>
    );
};
AuthProvider.propTypes={
    children: PropTypes.node.isRequired
}

export default AuthProvider;