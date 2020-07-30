import { useState, useEffect } from "react";

export default function useEmailValidation( value: string, callback: Function ) {
  const [isInitialRender, setIsInitialRender] = useState<boolean>(true);
  function validateEmail( adress: string ) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(adress).toLowerCase());
  }
  useEffect(() => {
    if( !isInitialRender )
      if( value.length > 45 || value.length < 4 )
        callback( false );
      else
        callback( validateEmail( value ) );
  }, [value]);
  useEffect(() => {
    setIsInitialRender( false );
  }, []);
}