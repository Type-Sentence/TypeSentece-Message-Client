import React from "react";
import axios from "axios";

export const handleSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (event.currentTarget[0] as HTMLInputElement).value
    const password = (event.currentTarget[1] as HTMLInputElement).value

    const userData = {
        email,
        password
    }

    console.log("🚀 ~ file: handleSubmitLogin.ts:10 ~ handleSubmitLogin ~ userData", userData)


    try {
        const response = await axios.post(`http://localhost:3001/api/auth/login`, userData, {
            withCredentials: true,
        });
        console.log(response.data);

        if (response.status === 200) {
            console.log("Auth Sucessfull");
        }

    } catch (err) {
        console.log(err);
    }


}