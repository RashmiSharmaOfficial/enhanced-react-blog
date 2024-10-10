import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "@/context/Context";
import config from "@/config/config";

export default function Write() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            // newPost.photoFile = file;
            try {
                await axios.post(`${config.API_URL}/api/upload`, data);
            } catch (err) {
                console.error(err);
            }
        }
        try {
            const res = await axios.post(`${config.API_URL}/api/posts`, newPost);
            // Redirect to the new post
            window.location.replace("/post/" + res.data._id);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="pt-12 px-4">
            {file && (
                <img
                    className="mx-auto w-full h-64 rounded-lg object-cover mb-4"
                    src={URL.createObjectURL(file)}
                    alt=""
                />
            )}

            <form className="relative" onSubmit={handleSubmit}>
                <div className="flex items-center mb-4">
                    <label htmlFor="fileInput" className="cursor-pointer">
                        <i className="writeIcon fas fa-plus w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center text-gray-600"></i>
                    </label>

                    <input
                        type="file"
                        id="fileInput"
                        className="hidden"
                        onChange={(e) => setFile(e.target.files[0])}
                    />

                    <input
                        type="text"
                        placeholder="Title"
                        className="writeInput font-bold text-2xl border-b border-gray-300 focus:outline-none focus:border-teal-500 flex-1 ml-4"
                        autoFocus={true}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        placeholder="Tell your story...."
                        className="writeInput border rounded p-2 w-full h-48 focus:outline-none focus:border-teal-500"
                        onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <button
                    className="absolute top-4 right-4 text-lg text-white bg-teal-500 rounded-lg px-4 py-2 cursor-pointer hover:bg-teal-600"
                    type="submit"
                >
                    Publish
                </button>
            </form>
        </div>
    );
}
