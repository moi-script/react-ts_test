import { useState, useEffect } from "react";

interface UserLogin {
    email : string,
    id : string,
    password : string
    createdAt : Date
    role: string,
    fullname? : string

}

export const loginFetch = (url : string, payload : UserLogin) => {
    const [user, setUser] = useState<UserLogin | null>(null);

    useEffect(() => {
        fetch(url, {
            method : "POST",
            body : JSON.stringify(payload)
        }).then(res => res.json())
          .then(data => setUser(data))
    }, [url])

    return [user]
}

