import { FC } from 'react'
import style from "../fields.module.scss";

type Props = {}


const UsernameFiled: FC<Props> = () => {
    return (
        <>
            <input type="text" className={style.inputField} placeholder="username" />
        </>
    )
}

export default UsernameFiled