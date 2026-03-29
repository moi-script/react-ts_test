
interface UserData {
    fullname : string,
    data? : string,
    message : string
}


// interface SignPayload {
//     email : string,
//     password :string,
//     token : string
// }

// | { type: "LOGIN_SUCCESS"; payload: SignPayload } 



export const loginRequest = async (email : string, password : string) : Promise<UserData> => {
    const response = await fetch("http://localhost:3000/login", {
        method : "POST",
        headers : {'Content-Type': "application/json"},
        body : JSON.stringify({email, password})
    })

    if(!response.ok) throw new Error("Unauthorized");

    const {fullname, data} = await response.json();
    return {message : "LOGIN_SUCESS", fullname, data};

}


export const signInRequest = async (email : string, password : string, fullname : string): Promise<UserData> => {
      const response = await fetch("http://localhost:3000/signin", {
        method : "POST",
        headers : {'Content-Type': "application/json"},
        body : JSON.stringify({email, password, fullname})
    })

    if(response.ok) throw new Error("Account fail");
    
    return {message : "Signin", fullname};

    
}