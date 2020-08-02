import { useEffect, useRef } from "react";

export default function useIsVarcharValidation( value: string, callback: Function, update: boolean, lower: number = 2, upper: number = 45 ) {
  function isVarcharValid ( value: string, callback: Function, lower: number, upper: number ): void {
    if( value.length > upper || value.length < lower )
      callback( false );
    else
      callback( true );
  }
  
  const isInitialRender = useRef<boolean>(true);
  useEffect(() => {
    if( !isInitialRender.current )
      isVarcharValid( value, callback, lower, upper );
  }, [value, update, callback, lower, upper]);

  useEffect(() => {
    isInitialRender.current = false;
  }, []);
}