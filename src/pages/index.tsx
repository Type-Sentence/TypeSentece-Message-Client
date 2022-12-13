import { GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import TypeContainer from '../components/TypeContainer'
import style from '../utils/styles/Home.module.scss'
import MessageContainer from '../components/MessageContainer'
import { io } from 'socket.io-client'

type Props = {

}

const MainPage: NextPage<Props> = () => {

    return (
        <div id={style.app}>
            <div className={style.container}>
                <MessageContainer />
                <TypeContainer />
            </div>
        </div>
    )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {

    const socket = io("http://localhost:3001/api")

    return {
        props: {}
    }
}

export default MainPage