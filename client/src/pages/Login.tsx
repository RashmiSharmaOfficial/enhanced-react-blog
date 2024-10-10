import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "@/context/Context";
import config from "@/config/config";

export default function Login() {
    const userRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post(`${config.API_URL}/api/auth/login`, {
                username: userRef.current?.value,
                password: passwordRef.current?.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url("https://images.pexels.com/photos/768472/pexels-photo-768472.jpeg?cs=srgb&dl=pexels-jess-bailey-designs-768472.jpg&fm=jpg")`
            }}
        >
            <div className="bg-white bg-opacity-80 rounded-lg p-8 shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <label className="mb-2 font-medium">Username</label>
                    <input
                        type="text"
                        className="loginInput mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Enter your username..."
                        ref={userRef}
                    />
                    <label className="mb-2 font-medium">Password</label>
                    <input
                        type="password"
                        className="loginInput mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Enter your password..."
                        ref={passwordRef}
                    />
                    <button
                        className="loginButton mt-4 p-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition disabled:bg-pink-300"
                        type="submit"
                        disabled={isFetching}
                    >
                        Login
                    </button>
                </form>
                <button className="mt-4 w-full p-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition">
                    <Link className="link" to="/register">
                        Register
                    </Link>
                </button>
            </div>
        </div>
    );
}
