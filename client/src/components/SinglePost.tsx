import { useLocation } from "react-router";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "@/context/Context";
import config from "@/config/config";
import { Pencil, Trash2 } from "lucide-react";

interface Post {
    _id: string;
    photo?: string;
    title: string;
    desc: string;
    username: string;
    createdAt: string;
}

const SinglePost: React.FC = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState<Post>({} as Post); //initially empty object
    const PF = "http://localhost:5001/images/";
    const { user } = useContext(Context);

    // For updating
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`${config.API_URL}/api/posts/` + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getPost();
    }, [path]);

    const handleDelete = async () => {
        try {
            await axios.delete(`${config.API_URL}/api/posts/${post._id}`, { data: { username: user?.username } });
            window.location.replace("/");
        } catch (err) { }
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`${config.API_URL}/api/posts/${post._id}`, {
                username: user?.username,
                title,
                desc,
            });
            setUpdateMode(false);
        } catch (err) { }
    };

    return (
        <div className="flex flex-col w-full p-4 bg-white rounded-lg shadow-md mt-4">
            <div className="flex flex-col">
                {post.photo && (
                    <img
                        src={PF + post.photo}
                        alt=""
                        className="w-full h-72 rounded-md object-cover mb-4"
                    />
                )}

                {updateMode ? (
                    <input
                        type="text"
                        value={title}
                        className="text-2xl text-center border-b-2 border-gray-300 mb-4 focus:outline-none"
                        autoFocus
                        onChange={(e) => setTitle(e.target.value)}
                    />
                ) : (
                    <h1 className="text-2xl text-center mb-4">
                        {title}
                        {post.username === user?.username && (
                            <div className="inline-flex float-right">
                                {/* <i className="singlePostIcon far fa-edit text-teal-500 cursor-pointer ml-2" onClick={() => setUpdateMode(true)} /> */}
                                <Pencil className="singlePostIcon far fa-edit text-teal-500 cursor-pointer ml-2" onClick={() => setUpdateMode(true)} />
                                <Trash2 className="singlePostIcon fas fa-trash-alt text-red-600 cursor-pointer ml-2" onClick={handleDelete} />
                                {/* <i className="singlePostIcon fas fa-trash-alt text-red-600 cursor-pointer ml-2" onClick={handleDelete} /> */}
                            </div>
                        )}
                    </h1>
                )}

                <div className="flex justify-between mb-4 text-gray-500">
                    <span>
                        Author:
                        <Link to={`/?user=${post.username}`} className="text-blue-500 font-semibold">
                            {post.username}
                        </Link>
                    </span>
                    <span>{new Date(post.createdAt).toDateString()}</span>
                </div>

                {updateMode ? (
                    <textarea
                        className="border border-gray-300 p-2 rounded-md h-48 mb-4 focus:outline-none"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                ) : (
                    <p className="text-gray-700 text-lg line-clamp-4">
                        {desc}
                    </p>
                )}

                {updateMode && (
                    <button
                        className="bg-teal-500 text-white px-4 py-2 rounded-lg self-end mt-2"
                        onClick={handleUpdate}
                    >
                        Update
                    </button>
                )}
            </div>
        </div>
    );
};

export default SinglePost;
