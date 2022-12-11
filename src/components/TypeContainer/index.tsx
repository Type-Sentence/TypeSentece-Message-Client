import { FC } from "react";
import GrupMessageContainer from "./GrupMessageContainer";
import style from "./index.module.scss";
import SendMessageContainer from "./SendMessageContainer";

type Props = {

}

const TypeContainer: FC<Props> = () => {
    return (
        <div className={style.typeContainer}>
            <SendMessageContainer />
            <GrupMessageContainer />
        </div>
    )
}

export default TypeContainer;