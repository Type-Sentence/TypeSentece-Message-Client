import React from "react";
import { io, Socket } from "socket.io-client";
import axios from "axios";
import { GatewayMessageRequest, IUserWithCredentials } from "../utils/interefaces";
import moment from "moment";
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

    const { data: user } = await axios.get<IUserWithCredentials>("http://localhost:3001/api/user/", {
        withCredentials: true
    })

    const gatewayMessageRequest: GatewayMessageRequest = {
        content: messageContent,
        authorId: user.id,
        createdAt: Date.now(),
    };

    message.value = ""
    socket.emit("new_message", gatewayMessageRequest);
}