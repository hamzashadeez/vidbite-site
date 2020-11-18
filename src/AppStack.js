import React, { useState, useEffect, useContext } from "react";
import Flash from "./Components/Flash";
import Login from "./Components/Login";
import Main from "./Components/Main";
import {auth } from "./firebase";
import {UserContext} from './Context'


function AppStack() {
    const [user, setUser] = useContext(UserContext);
    useEffect(() => {
        console.log(user)
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          console.log(authUser);
          setUser({isSigned: true})
        }else{
            setUser({isSigned: false})
        }
      });
  
      return () => {
        //some clean ups
        unsubscribe();
      };
    }, []);
    return (
        <div>
            {user.isSigned === null ? <Flash /> : user.isSigned ? <Main /> : <Login />}
        </div>
    )
}

export default AppStack
