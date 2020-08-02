import { useEffect, useRef } from "react";

export default function useEmailValidation( value: string, callback: Function, update: boolean ) {
  function validateEmail( adress: string ): boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(adress).toLowerCase());
  }
  
  const isInitialRender = useRef<boolean>(true);
  useEffect(() => {
    if( !isInitialRender.current )
      if( value.length > 45 || value.length < 4 )
        callback( false );
      else
        callback( validateEmail( value ) );
  }, [value, update, callback]);

  useEffect(() => {
    isInitialRender.current = false;
  }, []);
}