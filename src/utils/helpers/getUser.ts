import { GetServerSidePropsContext } from "next";
import { validateCookie } from "./validateCookies";
import axios from "axios";
import { User } from "../interefaces";

export const getUser = async (ctx: GetServerSidePropsContext) => {
    const headers = validateCookie(ctx);

    if (!headers) return {
        props: {
            user: false
        }
    }

    try {
        const { data: user } = await axios.get<User>("http://localhost/api/user", { headers });
        return { props: { user } }
    } catch (err) {
        console.log(err);
        return { props: { user: false } }
    }
}