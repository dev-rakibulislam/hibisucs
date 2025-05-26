
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { UserContext } from "./UserContext";
import { auth } from "../FireBase/firebase";
import { useEffect, useState } from "react";

const AuthContext = ({ children }) => {
  const [loginUser, setLoginUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const signUpEmailAndPass = async (email, password, name, photoURL) => {
    setLoading(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: photoURL
      });
      return userCredential;
    }
    catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  };
  const provider = new GoogleAuthProvider();
  const signinGoogle = () => {
    return signInWithPopup(auth, provider)
  }

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }


  useEffect(() => {
    const un = onAuthStateChanged(auth, user => {
      if (user) {
        setLoginUser(user)
      } else { setLoginUser(null) }
      setLoading(false)
    })
    return () => un()

  }, [])
  const Value = {
    // function
    signUpEmailAndPass,
    signinGoogle,
    setLoginUser,
    setLoading,
    signin,



    // variable
    loginUser,
    loading
  }
  return (
    <UserContext.Provider value={Value}>
      {children}
    </UserContext.Provider>

  );
};

export default AuthContext;