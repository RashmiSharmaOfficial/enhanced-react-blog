import config from "@/config/config";
import axios from "axios";
import { Facebook, Instagram, Twitter, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Category {
    name: string;
}

const Sidebar: React.FC = () => {
    const [cats, setCats] = useState<Category[]>([]); //empty array

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get(`${config.API_URL}/api/categories`);
            setCats(res.data);
        };
        getCats();
    }, []);

    return (
        <div className="flex flex-col items-center bg-white rounded-lg p-4 shadow-md mt-4 mx-4">
            <div className="w-full mb-4">
                <span className="text-lg font-semibold border-b-2 border-gray-300 mb-2 block text-center">
                    ABOUT ME
                </span>
                <img
                    src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
                    alt="About Me"
                    className="w-full h-auto rounded-lg mb-4"
                />
                <p className="text-sm text-gray-700 text-center">
                    Hi there! This Blogging Website is made by Rashmi Sharma. It is still under development. Visit again.
                </p>
            </div>

            <div className="w-full mb-4">
                <span className="text-lg font-semibold border-b-2 border-gray-300 mb-2 block text-center">
                    CATEGORIES
                </span>
                <ul className="list-none">
                    {Array.isArray(cats) && cats.length > 0 ? (
                        cats.map((c) => (
                            <Link to={`/?cat=${c.name}`} className="link" key={c.name}>
                                <li className="cursor-pointer text-sm text-gray-600 hover:text-gray-900 mb-2">
                                    {c.name}
                                </li>
                            </Link>
                        ))
                    ) : (
                        <li className="text-sm text-gray-600">No categories available.</li>
                    )}
                </ul>
            </div>

            <div className="w-full">
                <span className="text-lg font-semibold border-b-2 border-gray-300 mb-2 block text-center">
                    FOLLOW US
                </span>
                <div className="flex justify-center mt-4">
                    {/* <i className="sidebarIcon fab fa-facebook-square text-lg mx-2 cursor-pointer"></i> */}
                    <Facebook className="sidebarIcon fab fa-facebook-square text-lg mx-2 cursor-pointer" />
                    {/* <i className="sidebarIcon fab fa-twitter-square text-lg mx-2 cursor-pointer"></i> */}
                    <X className="sidebarIcon fab fa-twitter-square text-lg mx-2 cursor-pointer" />
                    {/* <i className="sidebarIcon fab fa-pinterest-square text-lg mx-2 cursor-pointer"></i> */}
                    <Instagram className="sidebarIcon fab fa-pinterest-square text-lg mx-2 cursor-pointer" />
                    {/* <i className="sidebarIcon fab fa-instagram-square text-lg mx-2 cursor-pointer"></i> */}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
