import { useState, useEffect } from "react";

export default function useIsVarcharValidation( value: string, callback: Function, lower: number = 2, upper: number = 45 ) {
  const [isInitialRender, setIsInitialRender] = useState<boolean>(true);
  function isVarcharValid ( value: string, callback: Function, lower: number, upper: number ): void {
    if( value.length > upper || value.length < lower )
      callback( false );
    else
      callback( true );
  }
  useEffect(() => {
    if( !isInitialRender )
      isVarcharValid( value, callback, lower, upper );
  }, [value]);
  useEffect(() => {
    setIsInitialRender( false );
  }, []);
}