import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css"
import LoadingIndicator from "../components/LoadingIndicator"


export default function Form({route, method}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
                window.location.reload()
            } else {
                navigate("/login")
                window.location.reload()
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    }

    const head = method === "login" ? "Login" : "Register"

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1>{head}</h1>
            <input 
                type="text"
                value={username}
                className="form-input"
                placeholder="UserName"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input 
                type="password"
                value={password}
                className="form-input"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            {loading && <LoadingIndicator />}
            <button className="form-button" type="submit">
                {head}
            </button>
        </form>
    )
}