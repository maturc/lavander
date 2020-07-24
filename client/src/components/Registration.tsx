import React, { useState } from 'react';
import fetchInterface from './custom_hooks/fetchInterface';
import { Grid, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  gridHeight: {
    height: '100vh'
  }
});
function Registration(props: any) {
  const classes = useStyles();

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  function handleButton() {
    const body = JSON.stringify({
      username: username,
      email: email,
      password: password
    });
    fetchInterface("/users/signup", "post", body)
      .then((data)=> {
        console.log(data);
      });
  }
  return(
    <Grid container justify="center">
      <Grid className={classes.gridHeight} xs={12} sm={6} container item direction="column" justify="center">
        <TextField value={username} onChange={(e)=>setUsername (e.target.value)} label="Username"/>
        <TextField value={email}    onChange={(e)=>setEmail    (e.target.value)} label="Email address"/>
        <TextField value={password} onChange={(e)=>setPassword (e.target.value)} label="Password" />
        <Button onClick={handleButton}>Sign Up</Button> {/* NEEEEEEDS FEEDBACK, was the signup completed??? was it succesfull?? */}
        <Button onClick={() => props.setSignup(false) }>Go back to log in</Button>
      </Grid>
    </Grid>
  );
}

export default Registration;