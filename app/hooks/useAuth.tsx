
import axios from "axios";
import Cookie from "universal-cookie";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "../features/userSlice";

const cookie = new Cookie()

const urllocal ="http://localhost:8080"
const urllive = "https://training-institute-backend.onrender.com/"

const useAuth = () => {
    const dispatch = useDispatch();

    const login = async ({ email, password} : {email: String, password: String}) => {

        try {
            const response = await axios.post(`${urllive}/auth/login`, { email, password });
        console.log(response.data)
        const { user, token } = response.data;
        cookie.set("session_token", token)
        dispatch(setUser({email: user.email, username: user.username}))
        return response.data
        } catch (error) {
            console.log(error)
        }
    }

    const updatePassword = async ({ password } : {password: String}) => {
        const sessionToken = cookie.get("session_token")
        try {
            const response = await axios.put(`${urllive}/auth/change-password`, { password },{
                headers: {
                    ...(sessionToken ? {Authorization: `Bearer ${sessionToken}`} : null)
                }
            });
            console.log(response)
        return response.data
        } catch (error) {
            console.log(error)
        }
    }

    const signup = async ({email, password, username}: {email: String, password: String, username: String}) => {
        const response = await axios.post(`${urllive}/auth/signup`, {email, password, username})
        const {user,token} = response.data;
        cookie.set("session_token", token)
        dispatch(setUser({email: user.email, username: user.username}))
        return response.data;
    }

    const fetchUser = async () => {
        const sessionToken = cookie.get("session_token")
        try {
            const response = await axios.get(`${urllive}/auth/me`, {
                headers: {
                    ...(sessionToken ? {Authorization: `Bearer ${sessionToken}`} : null)
                }
            })
            const user = response.data;

            if(!user) {
                return dispatch(clearUser())
            }

            dispatch(setUser({email: user.email, username: user.username}))
        } catch (error) {
            return dispatch(clearUser())
        }
    }

    const logout = () => {
        cookie.remove("session_token")
        
    }

    return {signup, login, logout, fetchUser, updatePassword }

}

export default useAuth















