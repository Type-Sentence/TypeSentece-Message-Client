import { FC, useEffect, useState } from "react"
import style from "../fields.module.scss";

type Props = {}

const EmailField: FC<Props> = () => {
    const [email, setEmail] = useState("");

    useEffect(() => {

    }, [email])

    return (
        <>
            <input type="text" className={style.inputField} placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
        </>
    )
}

export default EmailField