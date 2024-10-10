import Sidebar from "@/components/Sidebar";
import { useContext, useState } from "react";
import { Context } from "@/context/Context";
import axios from "axios";
import config from "@/config/config";

export default function Settings() {
    const [file, setFile] = useState<File | null>(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5001/images/";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" });
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        };

        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try {
                await axios.post(`${config.API_URL}/api/upload`, data);
            } catch (err) { }
        }

        try {
            const res = await axios.put(`${config.API_URL}/api/users/` + user._id, updatedUser);
            setSuccess(true);
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" });
        }
    };

    return (
        <div className="flex">
            <div className="flex-1 p-6">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-semibold text-lightcoral">Update Your Account</span>
                </div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <label className="mt-4 text-lg">Profile Picture</label>
                    <div className="flex items-center mt-2">
                        <img
                            src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                            alt=""
                            className="w-16 h-16 rounded-lg object-cover"
                        />
                        <label htmlFor="fileInput" className="ml-3 cursor-pointer bg-salmon rounded-full p-2 flex items-center justify-center text-white">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            className="hidden"
                            onChange={(e) => setFile(e.target.files?.[0] || null)}
                        />
                    </div>

                    <label className="mt-4 text-lg">Username</label>
                    <input
                        type="text"
                        placeholder={user.username}
                        className="border-b border-gray-300 mt-2 p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label className="mt-4 text-lg">Email</label>
                    <input
                        type="email"
                        placeholder={user.email}
                        className="border-b border-gray-300 mt-2 p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label className="mt-4 text-lg">Password</label>
                    <input
                        type="password"
                        className="border-b border-gray-300 mt-2 p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        className="settingsSubmit mt-6 bg-teal-600 text-white rounded-full p-2 hover:bg-teal-700 transition"
                        type="submit"
                    >
                        Update
                    </button>
                    {success && <span className="text-green-600 mt-4 text-center">Profile has been updated!</span>}
                </form>
            </div>
            <Sidebar />
        </div>
    );
}
