import { FC, useState } from 'react'
import LoginContainer from './login'
import RegisterContainer from './register'

type Props = {}


const FormsContainer: FC<Props> = () => {
    const [registerMode, setRegisterMode] = useState<boolean>(false)

    return (
        <>
            {
                registerMode ? <RegisterContainer /> : <LoginContainer />
            }
        </>
    )
}

export default FormsContainer