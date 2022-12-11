import { FC } from "react";
import { Message } from "../../utils/interefaces";
import MessageSentComponent from "../MessageSentComponent";
import style from "./index.module.scss";

const MessageContainer: FC = () => {
    const message: Message = {
        content: "Ciao questo è un test di un messagio",
        id: "MessageId: 123445313451234",
        grupId: "0000",
        author: {
            avatar: "12341234",
            id: "12341234",
            username: "rikvik2006",
            discriminator: "#1234",
            banner: "test"
        }
    }

    return (
        <div className={style.messageContainer}>
            <MessageSentComponent message={message} />
        </div>
    )
}

export default MessageContainer;