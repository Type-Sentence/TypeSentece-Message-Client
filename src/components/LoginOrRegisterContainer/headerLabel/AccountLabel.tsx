import { FC } from 'react'
import style from "./index.module.scss";

type Props = {}


const AccountLabel: FC<Props> = () => {
    return (
        <div className={style.label}>Account</div>
    )
}

export default AccountLabel