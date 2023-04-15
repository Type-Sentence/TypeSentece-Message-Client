import { FC } from 'react'
import style from "../fields.module.scss";

type Props = {}


const PasswordsFiled: FC<Props> = () => {
    return (
        <>
            <input type="password" className={style.inputField} placeholder="password" />
            <input type="password" className={style.inputField} placeholder="verify password" />
        </>
    )
}

export default PasswordsFiled