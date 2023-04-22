import { FC } from 'react'
import { Message } from '../../utils/interefaces';
import style from "./index.module.scss";
import moment from "moment";


type Props = {
    message: Message
}


const MessageSentComponent: FC<Props> = ({ message }) => {
    return (
        <div className={style.messageContainer}>
            <div className={style.authorAvatar}>
                <img src={message.author.avatar} alt={`${message.author.username} avater's`} />
            </div>
            <div className={style.message}>
                <div className={style.messageInformation}>
                    <div className={style.messageAuthor}>
                        <div className={style.name}>{message.author.username}</div>
                    </div>
                    <div className={style.messageTime}>{moment(message.createdAt).format("DD/MM/YYYY HH:mm")}</div>
                </div>
                <div className={style.messageContent}>{message.content}</div>
            </div>
        </div>
    )
}

export default MessageSentComponent