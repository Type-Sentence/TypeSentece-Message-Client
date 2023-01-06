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
            {user ?
                <>
                    <div className={style.header}>
                        <ChatSettingsLabel />
                        <AccountLabel />
                    </div>
                    <div className={style.body}></div>
                </>
                :
                <FormsContainer />
            }
        </div>
    )
}

export default RegisterOrLoginContainer