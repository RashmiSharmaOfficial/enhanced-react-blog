import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import config from "@/config/config";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post(`${config.API_URL}/api/auth/register`, {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url("https://images.pexels.com/photos/4476621/pexels-photo-4476621.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4476621.jpg&fm=jpg")`
            }}
        >
            <div className="bg-white bg-opacity-80 rounded-lg p-8 shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-semibold text-center mb-6">Register</h1>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <label className="mb-2 font-medium">Username</label>
                    <input
                        type="text"
                        className="registerInput mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Enter your username..."
                        onChange={e => setUsername(e.target.value)}
                    />

                    <label className="mb-2 font-medium">Email</label>
                    <input
                        type="text"
                        className="registerInput mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Enter your email..."
                        onChange={e => setEmail(e.target.value)}
                    />

                    <label className="mb-2 font-medium">Password</label>
                    <input
                        type="password"
                        className="registerInput mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Enter your password..."
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button
                        className="registerButton mt-4 p-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
                        type="submit"
                    >
                        Register
                    </button>
                </form>
                <button className="mt-4 w-full p-2 bg-lightcoral-500 text-white rounded hover:bg-lightcoral-600 transition">
                    <Link className="link" to="/login">Login</Link>
                </button>
                {error && <span className="text-red-600 mt-4">Something went wrong!</span>}
            </div>
        </div>
    );
}
