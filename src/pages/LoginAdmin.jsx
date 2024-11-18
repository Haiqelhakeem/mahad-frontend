import { useState } from "react"
import PasswordInput from "../components/PasswordInput"
import { useNavigate } from "react-router-dom"

const LoginAdmin = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleLogin = () => {
        if (username === "root" && password === "admin") {
            navigate("/admin")
        }
    }

    return (
        <>
            <div className="flex justify-center items-center mt-28">
                <div className="w-96 border rounded bg-white px-7 py-10">
                    <form onSubmit={handleLogin}>
                        <h4 className="text-2xl mb-7 text-black/70 text-center">Login</h4>

                        <input
                            type="text"
                            placeholder="Username"
                            className="input-box"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <PasswordInput
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />


                        <button onClick={handleLogin} type="submit" className="btn-primary">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginAdmin