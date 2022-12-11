import Head from 'next/head'
import Image from 'next/image'
import style from '../utils/styles/Home.module.scss'

export default function Home() {
    return (
        <div id="app">
            <div className={style.container}>
                <div className={style.messageContainer}></div>
                <div className={style.typeContainer}>
                    <div className={style.sendMessageContainer}># Inserisci il messaggio</div >
                    <div className={style.grupMessageContainer}></div>
                </div>
            </div>
        </div>
    )
}
