import { FC, useState, ChangeEvent } from 'react'
import style from "../fields.module.scss";
import { TbUserPlus } from 'react-icons/tb';
import { handleSubmitRegister } from '../../../utils/helpers/auth/handleSubmitRegister';
import EmailField from './emailField';
import PasswordsFiled from './passwordsFiled';
import SubmitButton from './submitButton';
import UsernameFiled from './usernameFiled';

type Props = {
    changeRegisterMode(): void;
}


const RegisterContainer: FC<Props> = ({ changeRegisterMode }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

    }

    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <span className={style.title}>Register</span>
                <span className={style.switcher} onClick={changeRegisterMode}> or Login</span>
            </div>

            <form className={style.formContainer} onSubmit={handleSubmitRegister}>
                <UsernameFiled />
                <EmailField />
                <PasswordsFiled />

                <SubmitButton />
            </form>
        </div>
    )
}

export default RegisterContainer