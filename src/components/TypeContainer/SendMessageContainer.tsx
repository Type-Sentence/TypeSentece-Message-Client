import { FC } from "react";
import { HandleSubmitMessage } from "../../controllers/sendMessageController";
import style from "./index.module.scss";
import { TbSend } from "react-icons/tb";

type Props = {

}

const SendMessageContainer: FC<Props> = () => {
    return (
        <form className={style.sendMessageContainer} onSubmit={HandleSubmitMessage}>
            <input className={style.sendMessageInput} type="text" placeholder="# Send a message in general chat" />
            <TbSend className="tbsend" />
        </form>
    )
}

export default SendMessageContainer;