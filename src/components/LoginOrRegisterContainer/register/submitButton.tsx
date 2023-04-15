import { FC } from "react";
import { TbUserPlus } from "react-icons/tb";
import style from "../fields.module.scss";

type Props = {}

const SubmitButton: FC<Props> = () => {
    return (
        <button type="submit" disabled={true}>
            <TbUserPlus className={style.icon} />
            Sing Up
        </button>
    )
}

export default SubmitButton;