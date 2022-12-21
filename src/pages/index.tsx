import { GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import TypeContainer from '../components/TypeContainer'
import style from '../utils/styles/Home.module.scss'
import MessageContainer from '../components/MessageContainer'
import RegisterOrLoginContainer from '../components/LoginOrRegisterContainer'

type Props = {

}

const MainPage: NextPage<Props> = () => {
    return (
        <div id={style.app}>
            <div className={style.container}>
                <div className={style.header}>
                    <MessageContainer />
                    <RegisterOrLoginContainer />
                </div>
                <TypeContainer />
            </div>
        </div>
    )
}

export default MainPage