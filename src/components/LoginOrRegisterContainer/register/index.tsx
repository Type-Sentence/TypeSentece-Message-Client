import { FC } from 'react'
import style from "../fields.module.scss";
import { TbUserPlus } from 'react-icons/tb';

type Props = {
    changeRegisterMode(): void;
}


const RegisterContainer: FC<Props> = ({ changeRegisterMode }) => {
    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <span className={style.title}>Register</span>
                <span className={style.switcher} onClick={changeRegisterMode}> or Login</span>
            </div>

            <form className={style.formContainer}>
                <input type="text" className={style.inputField} placeholder="username" />
                <input type="text" className={style.inputField} placeholder="email" />
                <input type="password" className={style.inputField} placeholder="password" />
                <input type="password" className={style.inputField} placeholder="verify password" />

                <button type="submit">
                    <TbUserPlus className={style.icon} />
                    Sing Up
                </button>
            </form>
        </div>
    )
}

export default RegisterContainer