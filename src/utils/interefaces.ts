import { SingletonRouter } from "next/router";

export interface Message {
    grupId?: string;
    id: string;
    content: string;
    author: MessageAuthor;
    createdAt: number;
}


//Only for message Author
export interface MessageAuthor {
    id: string;
    username: string;
    email: string;
    discriminator: string;
    avatar: string;
    banner?: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    discriminator: string;
    avatar: string;
    banner?: string;
}