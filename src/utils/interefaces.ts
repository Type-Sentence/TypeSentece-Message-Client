import { SingletonRouter } from "next/router";

export interface Message {
    grupId?: string;
    id: string;
    content: string;
    author: MessageAuthor;
    time: number;
}

export interface MessageAuthor {
    id: string;
    username: string;
    discriminator: string;
    avatar: string
    banner?: string;
}

export interface User {
    id: string;
    username: string;
    discriminator: string;
    avatar: string;
    banner?: string;
}