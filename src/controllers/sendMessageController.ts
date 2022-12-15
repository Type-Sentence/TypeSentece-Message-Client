import React from "react";
import { io, Socket } from "socket.io-client";
const socket = io("http://localhost:3001/")

socket.on("connect", () => {
    console.log(`Connected with id: ${socket.id}`)
})

export const HandleSubmitMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("In handle submit")

    const message = <HTMLInputElement>event.currentTarget[0]
    const messageContent = message.value
    console.log(messageContent);

    socket.emit("new_message", messageContent);
    (event.currentTarget[0] as HTMLInputElement).value = "";
}