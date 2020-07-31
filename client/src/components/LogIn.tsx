import React, { useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import fetchInterface from './custom_hooks/fetchInterface';

function LogIn(props: any) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoginValid, setIsLoginValid] = useState<boolean>(true);

  function handleLoginButton() {
    const body = JSON.stringify({
      email: email,
      password: password
    });
    fetchInterface("/users/login", "post", body)
      .then((data)=> {
          console.log(data);
          if(data) {
            props.setUser(data);
          }
      })
      .catch((err: ErrorEvent)=> {
        setIsLoginValid(false);
        setTimeout( () => setIsLoginValid(true), 2000);
      }); 
  };
  function handleGuestButton() {
    const body = JSON.stringify({
      email: "guest",
      password: "guest"
    });
    fetchInterface("/users/login", "post", body)
      .then((data)=> {
        if(data) {
          props.setUser(data);
        }
      })
      .catch( (err) => {
        alert("ERROR 404: Server Not Found");
      })
  }
  function handleKeyPess( e: any ){
    if(e.key === "Enter")
      handleLoginButton();
  }
  return(
    <Grid container justify="center">
      <Grid className="grid-height" xs={12} sm={6} container item direction="column" justify="center">
        <TextField value={email}    onChange={(e)=>setEmail   (e.target.value)} onKeyPress={(e)=>handleKeyPess(e)} label="Email address" error={!isLoginValid} autoFocus={true}/>
        <TextField value={password} onChange={(e)=>setPassword(e.target.value)} onKeyPress={(e)=>handleKeyPess(e)} label="Password"      error={!isLoginValid} helperText={ isLoginValid ? "" : "Invalid credentials!" } />
        <Button onClick={handleLoginButton} >Log in</Button>
        <Button onClick={() => props.setSignup(true) }>Create a new account</Button>
        <Button onClick={handleGuestButton}>Log in as GUEST</Button>
      </Grid>
    </Grid>
  );
}

export default LogIn;