import { FC } from "react";
import { HandleSubmitMessage } from "../../controllers/sendMessageController";
import style from "./index.module.scss";

type Props = {

}

const SendMessageContainer: FC<Props> = () => {
    return (
        <form className={style.sendMessageContainer} onSubmit={HandleSubmitMessage}>
            <input type="text" placeholder="# Send a message in general chat" />
            <input type="submit" value="Send" />
        </form>
    )
}

export default SendMessageContainer;