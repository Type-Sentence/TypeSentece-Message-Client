import { FC } from "react"
import style from "./index.module.scss";
import ChatSettingsLabel from "./headerLabel/ChatSettingsLabel";
import AccountLabel from "./headerLabel/AccountLabel";
import { User } from "../../utils/interefaces";
import LoginContainer from "./login";
import FormsContainer from "./FormsContainer";

type Props = {
    user: false | User;
}

const RegisterOrLoginContainer: FC<Props> = ({ user }) => {
    console.log(user);

    return (
        <div className={style.container}>
            <div className={style.header}>
                {user ?
                    <>
                        <ChatSettingsLabel />
                        <AccountLabel />
                    </> :
                    <FormsContainer />
                }
            </div>
            <div className={style.body}></div>
        </div>
    )
}

export default RegisterOrLoginContainer