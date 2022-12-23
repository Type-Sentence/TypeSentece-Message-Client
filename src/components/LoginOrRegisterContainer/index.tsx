import { FC } from "react"
import style from "./index.module.scss";
import ChatSettingsLabel from "./headerLabel/ChatSettingsLabel";
import AccountLabel from "./headerLabel/AccountLabel";

type Props = {

}

const RegisterOrLoginContainer: FC<Props> = () => {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <ChatSettingsLabel />
                <AccountLabel />
            </div>
            <div className={style.body}></div>
        </div>
    )
}

export default RegisterOrLoginContainer