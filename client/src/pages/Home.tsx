import Header from "@/components/Header";
import Posts from "@/components/Posts";
import Sidebar from "@/components/Sidebar";
import config from "@/config/config";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`${config.API_URL}/api/posts` + search);
            setPosts(res.data);
        };
        fetchPosts();
    }, [search]);

    return (
        <>
            <Header />
            <div className="home flex flex-col md:flex-row md:space-x-4 p-4">
                <div className="posts-container flex-1">
                    <Posts posts={posts} />
                </div>
                <div className="sidebar-container md:w-1/3">
                    <Sidebar />
                </div>
            </div>
        </>
    );
}
