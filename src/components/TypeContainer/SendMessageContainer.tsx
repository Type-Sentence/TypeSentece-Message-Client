import { FC } from "react";
import style from "./index.module.scss";

type Props = {

}

const SendMessageContainer: FC<Props> = () => {
    return (
        <div className={style.sendMessageContainer}># Inserisci il messaggio</div>
    )
}

export default SendMessageContainer;