import { useState,useEffect } from "react"
import UserSetStatus from '../components/UserSetStatus'
export const useUserState = () => {

    const [userState, setuserState] = useState({
        setUser: [] ,
        siLogeado: false ,
    })
    useEffect (() =>{
        const user = UserSetStatus.getCurrentUser();
        if (user) {
            setuserState({
                setUser:[ {
                user: user,
                userId: user.id,
                currentUser: user.userName,
            }],                
            siLogeado: user.user_token === '' ? false : true,
            })
        } 

    },[] )

    return userState ;
}

