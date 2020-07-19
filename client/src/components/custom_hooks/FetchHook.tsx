import { ErrorInfo } from "react";

export default async function fetchLogin( route: string = "/users/login", body: string = "" ): Promise<any> {
  try {
    let method: string = "get";
    if ( body !== "" ) method = "post";
    debugger;
    const response = await fetch(`http://localhost:5000${route}`, {
      method: method,
      body: body
    })
    debugger;
    const data = await response.json();
    console.log(data);
    return data;
  } catch(e) {
    console.log(e);
  }
}