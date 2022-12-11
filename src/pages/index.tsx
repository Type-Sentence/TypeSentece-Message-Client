import { GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MessageComponent from '../components/MessageContainer'
import TypeContainer from '../components/TypeContainer'
import style from '../utils/styles/Home.module.scss'
import { io } from "socket.io-client";

type Props = {

}

const MainPage: NextPage<Props> = () => {
    return (
        <div id={style.app}>
            <div className={style.container}>
                <MessageComponent />
                <TypeContainer />
            </div>
        </div>
    )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {

    return {
        props: {}
    }
}

export default MainPage