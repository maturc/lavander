import React, { useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import fetchInterface from './custom_hooks/fetchInterface';
import { ILoginProps } from '../interfaces';
import Landing from './Landing';

function LogIn(props: ILoginProps) {
  const [email,        setEmail       ] = useState<string>("");
  const [password,     setPassword    ] = useState<string>("");
  const [isLoginValid, setIsLoginValid] = useState<boolean>(true);

  function handleLoginButton(): void {
    const body: string = JSON.stringify({
      email: email,
      password: password
    });
    fetchInterface( "/users/login", "post", body )
      .then( data => {
        if( data )
          props.setUser( data );
      })
      .catch( (err: ErrorEvent) => {
        setIsLoginValid( false );
        setTimeout( () => setIsLoginValid( true ), 2000 );
      }); 
  };
  function handleGuestButton(): void {
    const body: string = JSON.stringify({
      email: "guest",
      password: "guest"
    });
    fetchInterface( "/users/login", "post", body )
      .then( data => {
        if( data )
          props.setUser( data );
      })
      .catch( (err: ErrorEvent) => {
        alert( "ERROR 404: Server Not Found" );
      })
  }
  function handleKeyPess( e: React.KeyboardEvent<HTMLDivElement> ){
    if( e.key === "Enter" )
      handleLoginButton();
  }
  return(
    <>
      <Grid className="landing" container>
        <Grid xs={12} sm={9} md={6} className="landing__container-main" container item justify="center" direction="column">
          <h1 className="landing__header">
            <img src='./logo.png' alt="logo" className="landing__logo" />
            Lavander
          </h1>
          <TextField value={email}    onChange={(e)=>setEmail   (e.target.value)} onKeyPress={(e)=>handleKeyPess(e)} label="Email address" error={!isLoginValid} autoFocus={true}/>
          <TextField value={password} onChange={(e)=>setPassword(e.target.value)} onKeyPress={(e)=>handleKeyPess(e)} label="Password"      error={!isLoginValid} helperText={ isLoginValid ? "" : "Invalid credentials!" } />
          <Button className="login-button" variant="contained" color="primary" onClick={handleLoginButton} >Log in</Button>
          <Button className="login-button" variant="contained" color="primary" onClick={() => props.setSignup(true) }>Create a new account</Button>
          <Button className="login-button" variant="contained" color="primary" onClick={handleGuestButton}>Log in as GUEST</Button>
        </Grid>
      </Grid>
      <Landing />
    </>
  );
}

export default LogIn;