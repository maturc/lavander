import React, { useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import fetchInterface from './custom_hooks/fetchInterface';

const useStyles = makeStyles({
  gridHeight: {
    height: '100vh'
  }
});
function LogIn(props: any) {
  const classes = useStyles();
  
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoginValid, setIsLoginValid] = useState<boolean>(true);

  function handleButton() {
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
  return(
    <Grid container justify="center">
      <Grid className={classes.gridHeight} xs={12} sm={6} container item direction="column" justify="center">
        <TextField value={email}    onChange={(e)=>setEmail   (e.target.value)} label="Email address" error={!isLoginValid} />
        <TextField value={password} onChange={(e)=>setPassword(e.target.value)} label="Password"      error={!isLoginValid} helperText={ isLoginValid ? "" : "Invalid credentials!" } />
        <Button onClick={handleButton}>Log in</Button>
        <Button onClick={() => props.setSignup(true) }>Create a new account</Button>
        <Button onClick={handleGuestButton}>Log in as GUEST</Button>
      </Grid>
    </Grid>
  );
}

export default LogIn;