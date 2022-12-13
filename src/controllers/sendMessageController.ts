import React from "react";
import { socket } from "../exports/WebSoket";
import { Message } from "../utils/interefaces";

export const HandleSubmitMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("In handle submit")

    const message = <HTMLInputElement>event.currentTarget[0]
    const messageContent = message.value
    console.log(messageContent);

    socket.emit("new_message", messageContent)
}