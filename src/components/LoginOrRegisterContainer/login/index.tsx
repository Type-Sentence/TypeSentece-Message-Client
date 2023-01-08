import { FC } from 'react'
import style from "../fields.module.scss";
import Link from 'next/link';

type Props = {
    changeRegisterMode(): void;
}


const LoginContainer: FC<Props> = ({ changeRegisterMode }) => {
    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <span className={style.title}>Login</span>
                <span className={style.switcher} onClick={changeRegisterMode}> or Register</span>
            </div>

            <form className={style.formContainer}>
                <input type="text" className={style.inputField} placeholder="email" />
                <input type="text" className={style.inputField} placeholder="password" />
                <div className={style.optionsContainer}>
                    <div className={style.rememberMeContainer}>
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <div className={style.forgotPw}>Forgot password?</div>
                </div>
                <input type="submit" value="Sing Up" />
            </form>
        </div>
    )
}

export default LoginContainer