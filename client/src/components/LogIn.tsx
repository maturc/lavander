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
      });
  }
  return(
    <Grid container justify="center">
      <Grid className={classes.gridHeight} xs={12} sm={6} container item direction="column" justify="center">
        <TextField value={email}    onChange={(e)=>setEmail   (e.target.value)} label="Email address"/>
        <TextField value={password} onChange={(e)=>setPassword(e.target.value)} label="Password" />
        <Button onClick={handleButton}>Log in</Button>
      </Grid>
    </Grid>
  );
}

export default LogIn;