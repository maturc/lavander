import React, { useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import fetchInterface from './custom_hooks/fetchInterface';
import { ILoginProps } from '../interfaces';

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
        <Grid xs={12} sm={6} className="landing__container-main" container item justify="center" direction="column">
          <h1 className="landing__header">
            <img src='./logo.png' alt="logo" className="landing__logo" />
            Lavander
          </h1>
          <TextField value={email}    onChange={(e)=>setEmail   (e.target.value)} onKeyPress={(e)=>handleKeyPess(e)} label="Email address" error={!isLoginValid} autoFocus={true}/>
          <TextField value={password} onChange={(e)=>setPassword(e.target.value)} onKeyPress={(e)=>handleKeyPess(e)} label="Password"      error={!isLoginValid} helperText={ isLoginValid ? "" : "Invalid credentials!" } />
          <Button onClick={handleLoginButton} >Log in</Button>
          <Button onClick={() => props.setSignup(true) }>Create a new account</Button>
          <Button onClick={handleGuestButton}>Log in as GUEST</Button>
        </Grid>
      </Grid>
      <Grid className="landing__section-container" container>
        <Grid xs={12} sm={6} className="landing__section" container item justify="center" direction="column">
          <Grid container item direction="row" justify="space-between">
            <Grid item>
              <h1 className="landing__description">
                Your place for discussion
              </h1>
              <p>
                Be part of our global community. Make new friends and relax with some friendly discorse.
              </p>
            </Grid>
            <Grid item>
              <div className="img-div">PLACEHOLDER</div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="landing__section-container" container>
        <Grid xs={12} sm={6} className="landing__section" container item justify="center" direction="column">
          <Grid container item direction="row" justify="space-between">
            <Grid item>
              <div className="img-div">PLACEHOLDER</div>
            </Grid>
            <Grid item>
              <h1 className="landing__description">
                Pick your topic
              </h1>
              <p>
                Share your passion with others.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="landing__section-container" container>
        <Grid xs={12} sm={6} className="landing__section" container item justify="center" direction="column">
          <Grid container item direction="row" justify="space-between">
            <Grid item>
              <h1 className="landing__description">
                Express yourself
              </h1>
              <p>
                Don't be limited to text. Show everyone what you are talking about.
              </p>
            </Grid>
            <Grid item>
              <div className="img-div">PLACEHOLDER</div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default LogIn;