import { FC, useState } from 'react'
import LoginContainer from './login'
import RegisterContainer from './register'

type Props = {}


const FormsContainer: FC<Props> = () => {
    const [registerMode, setRegisterMode] = useState<boolean>(false)

    const changeRegisterMode = () => {
        registerMode ? setRegisterMode(false) : setRegisterMode(true);
    }

    return (
        <>
            {
                registerMode ? <RegisterContainer /> : <LoginContainer changeRegisterMode={changeRegisterMode} />
            }
        </>
    )
}

export default FormsContainer