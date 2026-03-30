import {type AuthAction } from "./Context"

export const loginRequest = async (email : string, password : string) : Promise<AuthAction> => {
    const response = await fetch("http://localhost:3000/login", {
        method : "POST",
        headers : {'Content-Type': "application/json"},
        body : JSON.stringify({email, password})
    })

    if(!response.ok) throw new Error("Unauthorized");

    const {fullname} = await response.json();

    return {type : "LOGIN_SUCCESS", payload :{email, password, fullname}};
}


export const signInRequest = async (email : string, password : string, fullname : string): Promise<AuthAction> => {
      const response = await fetch("http://localhost:3000/signin", {
        method : "POST",
        headers : {'Content-Type': "application/json"},
        body : JSON.stringify({email, password, fullname})
    })

    if(!response.ok) throw new Error("Account creation failed");
    
    // return {message : "Signin", fullname};
    // const {} = await response.json();
    return {type : "SIGNIN_SUCCCESS", payload : {email, password, fullname}}

}