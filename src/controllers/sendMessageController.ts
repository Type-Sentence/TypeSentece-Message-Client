import React from "react";
import { socket } from "../exports/WebSoket";
import { Message } from "../utils/interefaces";

export const HandleSubmitMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = event.currentTarget[0] as HTMLInputElement
    const messageContent = message.value

    socket.emit("new_message", messageContent)
}