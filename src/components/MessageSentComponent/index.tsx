import { FC } from 'react'
import { Message } from '../../utils/interefaces'

type Props = {
    message: Message
}


const MessageSentComponent: FC<Props> = ({ message }) => {
    return (
        <div>{message.content}</div>
    )
}

export default MessageSentComponent