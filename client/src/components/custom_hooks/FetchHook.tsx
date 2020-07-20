export default async function fetchLogin( route: string = "/users/login", body: string = "" ): Promise<any> {
  try {
    let method: string = "GET";
    if ( body !== "" ) method = "POST";
    const response = await fetch(`http://localhost:5000${route}`, {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: body
    });
    const data = await response.json();
    return data;
  } catch(e) {
    console.log("Authentication error.")
  }
}