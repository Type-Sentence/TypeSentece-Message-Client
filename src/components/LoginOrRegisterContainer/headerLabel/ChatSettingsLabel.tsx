import { FC } from 'react'
import style from "./index.module.scss";

type Props = {}


const ChatSettingsLabel: FC<Props> = () => {
    return (
        <div className={style.label}>Chat Settings</div>
    )
}

export default ChatSettingsLabel