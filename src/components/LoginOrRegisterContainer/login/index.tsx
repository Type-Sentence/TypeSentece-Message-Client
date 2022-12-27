import { FC } from 'react'
import style from "../fields.module.scss";

type Props = {}


const LoginContainer: FC<Props> = () => {
    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <span className={style.title}>Login</span>
                <span className={style.switcher}> or Register</span>
            </div>

            <form className={style.formContainer}>
                <input type="text" className={style.inputField} placeholder="email" />
                <input type="text" className={style.inputField} placeholder="password" />
                <div className={style.forgotPw}>Forgot password</div>
                <input type="submit" value="Sing Up" />
            </form>
        </div>
    )
}

export default LoginContainer