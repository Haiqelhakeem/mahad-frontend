import { useState } from "react";
import PasswordInput from "../components/PasswordInput";
import { useNavigate } from "react-router-dom";

import heroImage from "../assets/hero.jpg";

const LoginAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "root" && password === "admin") {
      navigate("/admin");
    }
  };

  return (
    <>
      <div
        className="hero min-h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="flex justify-center items-center">
          <div className="w-96 border rounded bg-white px-7 py-10">
            <form onSubmit={handleLogin}>
              <div className="flex justify-center">
                <img src="/mahadFullColor.svg" alt="" width={75} />
              </div>
              <h4 className="text-2xl mb-2 text-black font-semibold text-center">
                Login
              </h4>
              <p className="text-sm mb-5 text-black text-center">
                Login Mentor Website Manajemen Setoran Santri
              </p>
              <input
                type="text"
                placeholder="Username"
                className="input-box text-black"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />

              <button
                onClick={handleLogin}
                type="submit"
                className="btn-primary"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginAdmin;
