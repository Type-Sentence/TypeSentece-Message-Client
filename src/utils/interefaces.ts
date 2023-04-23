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

export interface IUser {
    id: string;
    username: string;
    discriminator: string;
    tag: string;
    avatar: string;
    banner: string;
}

export interface IUserWithCredentials extends IUser {
    email: string;
    password: string;
}

export interface GatewayMessageRequest {
    content: string;
    authorId: string
    createdAt: number;
}

export interface GatewayUserRequest { }