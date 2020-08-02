import React, { useState } from 'react';
import fetchInterface from './custom_hooks/fetchInterface';
import { Grid, TextField, Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import useIsVarcharValidation from './custom_hooks/useIsVarcharValidation';
import useEmailValidation from './custom_hooks/useEmailValidation';
import { IRegistrationProps } from '../interfaces';

function Registration( props: IRegistrationProps ) {
  const [username, setUsername] = useState<string>("");
  const [email,    setEmail   ] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [avatar,   setAvatar  ] = useState<string>("");

  //validation
  const [isUsernameValid, setIsUsernameValid   ] = useState<boolean>(true);
  const [isEmailValid,    setIsEmailValid      ] = useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid   ] = useState<boolean>(true);
  const [isAvatarValid,   setIsAvatarValid     ] = useState<boolean>(true);
  const [forceValidation, toggleForceValidation] = useState<boolean>(false);
  useIsVarcharValidation( username, setIsUsernameValid, forceValidation         );
  useIsVarcharValidation( password, setIsPasswordValid, forceValidation, 4      );
  useIsVarcharValidation( avatar,   setIsAvatarValid,   forceValidation, 0, 200 );
  useEmailValidation    ( email,    setIsEmailValid,    forceValidation         );

  function handleButton(): void {
    if( isUsernameValid && isEmailValid && isPasswordValid && isAvatarValid && username && email && password ) {
      const body: string = JSON.stringify({
        username: username,
        email: email,
        password: password,
        avatar: avatar
      });
      fetchInterface( "/users/signup", "post", body )
        .then( data => {
          props.setSuccessOpen(true);
          props.setSignup(false);
        })
        .catch( err => {
          setErrorOpen(true);
        });
    } else {
      toggleForceValidation( prev => !prev );
    }
  }

  function handleKeyPess( e: React.KeyboardEvent<HTMLDivElement> ){
    if( e.key === "Enter" )
      handleButton();
  }

  const [errorOpen, setErrorOpen] = useState(false);
  const handleErrorClose = (event: any, reason: any) => {
    if (reason === 'clickaway') {
      return;
    }
    setErrorOpen(false);
  };
  function Alert(props: any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  return(
    <Grid container justify="center">
      <Grid className="grid-height" xs={12} sm={6} container item direction="column" justify="center">
        <TextField value={username} onChange={(e)=>setUsername (e.target.value)} onKeyPress={(e)=>handleKeyPess(e)} label="Username"      error={!isUsernameValid} required={true} autoFocus={true} />
        <TextField value={email}    onChange={(e)=>setEmail    (e.target.value)} onKeyPress={(e)=>handleKeyPess(e)} label="Email address" error={!isEmailValid}    required={true} />
        <TextField value={password} onChange={(e)=>setPassword (e.target.value)} onKeyPress={(e)=>handleKeyPess(e)} label="Password"      error={!isPasswordValid} required={true} />
        <TextField value={avatar}   onChange={(e)=>setAvatar   (e.target.value)} onKeyPress={(e)=>handleKeyPess(e)} label="Avatar url"    error={!isAvatarValid}   helperText="Optional"/>
        <Button onClick={handleButton}>Sign Up</Button>
        <Button onClick={() => props.setSignup(false) }>Go back to log in</Button>
        <Snackbar open={errorOpen} autoHideDuration={4000} onClose={handleErrorClose}>
          <Alert onClose={handleErrorClose} severity="error">
            Could not sign up!
          </Alert>
        </Snackbar>
      </Grid>
    </Grid>
  );
}

export default Registration;