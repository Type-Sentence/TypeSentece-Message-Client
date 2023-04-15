import axios from "axios";
import { request } from "http";
import React from "react";

export const handleSubmitRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const username = (event.currentTarget[0] as HTMLInputElement).value
    const email = (event.currentTarget[1] as HTMLInputElement).value
    const password = (event.currentTarget[2] as HTMLInputElement).value
    const verifyPassword = (event.currentTarget[3] as HTMLInputElement).value

    const requestBody = {
        username,
        email,
        password,
        verifyPassword
    }

    console.log("🚀 ~ file: handleSubmitRegister.ts:14 ~ handleSubmitRegister ~ requestBody", requestBody)

    try {
        const response = await axios.post("http://localhost:3001/api/auth/register", requestBody)

        if (response.status === 200) {
            console.log("Register sucessfull")
        }
    } catch (err) {
        console.log(err);
    }
}