import { FC } from "react";
import { Message } from "../../utils/interefaces";
import MessageSentComponent from "../MessageSentComponent";
import style from "./index.module.scss";

const MessageContainer: FC = () => {
    const messages: Message[] = [
        {
            content: "Ciao questo è un test di un messagio",
            id: "23445313451234",
            grupId: "0000",
            time: 1671284017,
            author: {
                avatar: "https://imgur.com/dS5gThg.png",
                id: "12341234",
                username: "gimmi",
                discriminator: "#1234",
                banner: "test"
            }
        },
        {
            content: "Messagio 2 ok",
            id: "123445313451234",
            grupId: "0000",
            time: 1671284022,
            author: {
                avatar: "https://imgur.com/BqPMnCm.png",
                id: "12341234",
                username: "rikvik2006",
                discriminator: "#1234",
                banner: "test"
            }
        },
        {
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quos aliquid laudantium similique nihil doloribus maxime laborum rem ipsum earum autem? Architecto distinctio debitis esse sapiente consequuntur doloribus laborum recusandae!",
            id: "123445313451234",
            grupId: "0000",
            time: 1671284022,
            author: {
                avatar: "https://imgur.com/ZCaj5ze.png",
                id: "12341234",
                username: "Lorem",
                discriminator: "#1234",
                banner: "test"
            }
        }
    ]

    return (
        <div className={style.messageContainer}>
            <div className={style.messageConteiner2}>
                {messages.map((message) => (
                    <MessageSentComponent message={message} key={message.id} />
                ))}
            </div>
        </div>
    )
}

export default MessageContainer;