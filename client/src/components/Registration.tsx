import React, { useState } from 'react';
import fetchInterface from './custom_hooks/fetchInterface';
import { Grid, TextField, Button } from '@material-ui/core';
import useIsVarcharValidation from './custom_hooks/useIsVarcharValidation';
import useEmailValidation from './custom_hooks/useEmailValidation';

function Registration(props: any) {
  const [username, setUsername] = useState<string>("");
  const [email,    setEmail   ] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [avatar,   setAvatar  ] = useState<string>("");
  //validation
  const [isUsernameValid, setIsUsernameValid] = useState<boolean>(true);
  const [isEmailValid,    setIsEmailValid   ] = useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const [isAvatarValid,   setIsAvatarValid  ] = useState<boolean>(true);
  /* const [isInitialRender, setIsInitialRender] = useState<boolean>(true); */

/*   function isVarcharValid (value: string, callback: Function, lower: number = 2, upper: number = 45): void {
    if(value.length > upper || value.length < lower)
      callback( false );
    else
      callback( true );
  }
  function validateEmail(adress: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(adress).toLowerCase());
  } */
  useIsVarcharValidation( username, setIsUsernameValid );
  useIsVarcharValidation( password, setIsPasswordValid, 4 );
  useIsVarcharValidation( avatar,   setIsAvatarValid, 0, 200 );
  useEmailValidation    ( email,    setIsEmailValid );
  /* useEffect(() => {
    if(!isInitialRender)
      isVarcharValid( username, setIsUsernameValid );
  }, [username]);

  useEffect(() => {
    if(email.length > 45 || email.length < 4)
      setIsEmailValid(false);
    else
      setIsEmailValid( validateEmail( email ) );
  }, [email]);

  useEffect(() => {
    isVarcharValid( password, setIsPasswordValid, 4 );
  }, [password]);
  useEffect(() => {
    isVarcharValid ( avatar, setIsAvatarValid, 0, 200 );    
  }, [avatar]);

  useEffect(() => {
    setIsInitialRender(false);
  }, []); */
  function handleButton() {
    if(isUsernameValid && isEmailValid && isPasswordValid && isAvatarValid && (username || email || password)) {
      const body = JSON.stringify({
        username: username,
        email: email,
        password: password,
        avatar: avatar
      });
      fetchInterface( "/users/signup", "post", body )
        .then((data)=> {
          console.log( data );
        })
        .catch( err => {
          alert( "Could not sign up!" );
        });
    } else {
        setIsUsernameValid( false );
        setIsEmailValid   ( false );
        setIsPasswordValid( false );
    }
  }
  return(
    <Grid container justify="center">
      <Grid className="grid-height" xs={12} sm={6} container item direction="column" justify="center">
        <TextField value={username} onChange={(e)=>setUsername (e.target.value)} label="Username"      error={!isUsernameValid} required={true} />
        <TextField value={email}    onChange={(e)=>setEmail    (e.target.value)} label="Email address" error={!isEmailValid}    required={true} />
        <TextField value={password} onChange={(e)=>setPassword (e.target.value)} label="Password"      error={!isPasswordValid} required={true} />
        <TextField value={avatar}   onChange={(e)=>setAvatar   (e.target.value)} label="Avatar url"    error={!isAvatarValid}   helperText="Optional"/>
        <Button onClick={handleButton}>Sign Up</Button>
        <Button onClick={() => props.setSignup(false) }>Go back to log in</Button>
      </Grid>
    </Grid>
  );
}

export default Registration;