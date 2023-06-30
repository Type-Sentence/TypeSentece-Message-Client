import { GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import TypeContainer from '../components/TypeContainer'
import style from '../utils/styles/Home.module.scss'
import MessageContainer from '../components/MessageContainer'
import RegisterOrLoginContainer from '../components/LoginOrRegisterContainer'
import { getUser } from '../utils/helpers/getUser'
import { IUserWithCredentials } from '../utils/interefaces'

type Props = {
    user: false | IUserWithCredentials
}

const MainPage: NextPage<Props> = ({ user }) => {
    return (
        <div id={style.app}>
            <div className={style.container}>
                <div className={style.header}>
                    <MessageContainer />
                    <RegisterOrLoginContainer user={user} />
                </div>
                <TypeContainer />
            </div>
        </div>
    )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    return getUser(context);
}

export default MainPage