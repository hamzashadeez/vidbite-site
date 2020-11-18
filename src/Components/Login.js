import React, {useState, useContext} from "react";
import "./Login.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import {auth} from '../firebase'
import {UserContext} from '../Context'


export default function Login() {
    const [email, setEmail] = useState('hamza1111@gmail.com');
    const [password, setPassword] = useState('hamza1111');
    const [_, setUser] = useContext(UserContext)
    const adminPassword = 'admin2020';
    const [adminCode, setAdminCode] = useState('');
   
    const login = ()=>{
      if (adminCode === adminPassword){

        auth.signInWithEmailAndPassword(email, password)
        .then(()=>{
            alert('Welcome Back Admin')
            setUser({isSigned: true})
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
            // ...
          })
      }else{
        alert('Password is incorrect')
      }
    }
  return (
    <div className="LoginScreen">
      <div className="login">
        <div className='loginheader'>
          <h1 id="vidbite">
            Vid<span>Bite</span>
          </h1>
        </div>
        <TextField
          id="filled-password-input"
          label="Enter Email"
          fullWidth
          size="small"
          autoComplete="current-password"
          style={{ marginBottom: "20px" }}
          variant="filled"
          disabled={true}
          value={'admin@vidbite.com'}
          // onChange={(e)=>setEmail(e.target.value)}
        />
        <TextField
          id="filled-password-input"
          label="Password"
          fullWidth
          color="red"
          size="small"
          type="password"
          style={{ marginBottom: "20px" }}
          autoComplete="current-password"
          variant="filled"
          value={adminCode}
          onChange={(e)=>setAdminCode(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={login}>
          Log In
        </Button>
      </div>
    </div>
  );
}
