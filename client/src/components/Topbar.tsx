import { Link } from "react-router-dom";
import { useContext } from "react";
import config from "@/config/config";
import { Context } from "@/context/Context";

const TopBar: React.FC = () => {
    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }

    const PF = `${config.API_URL}/images/`;


    return (
        <div className="w-full h-14 bg-white sticky top-0 flex items-center z-50 shadow-md">
            <div className="flex-1 flex items-center justify-center space-x-2">
                <i className="topIcon fab fa-facebook-square text-pink-600 cursor-pointer"></i>
                <i className="topIcon fab fa-instagram-square text-pink-600 cursor-pointer"></i>
                <i className="topIcon fab fa-pinterest-square text-pink-600 cursor-pointer"></i>
                <i className="topIcon fab fa-twitter-square text-pink-600 cursor-pointer"></i>
            </div>
            <div className="flex-6 flex justify-center">
                <ul className="flex space-x-5 list-none m-0 p-0">
                    <li className="topListItem">
                        <Link className="link text-lg font-light hover:font-medium text-gray-800" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link text-lg font-light hover:font-medium text-gray-800" to="/about">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link text-lg font-light hover:font-medium text-gray-800" to="/contacts">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link text-lg font-light hover:font-medium text-gray-800" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {user && <span className="cursor-pointer" onClick={handleLogout}>LOGOUT</span>}
                    </li>
                </ul>
            </div>
            <div className="flex-1 flex items-center justify-center">
                {
                    user ? (
                        <Link to="/settings">
                            <img
                                className="topImg w-10 h-10 rounded-full object-cover cursor-pointer"
                                src={PF + user.profilePic} alt="User Profile"
                            />
                        </Link>
                    ) : (
                        <ul className="flex space-x-5 list-none m-0 p-0">
                            <li className="topListItem">
                                <Link className="link text-lg font-light hover:font-medium text-gray-800" to="/login">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link text-lg font-light hover:font-medium text-gray-800" to="/register">REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
                <i className="topSearchIcon fas fa-search text-pink-600 cursor-pointer ml-4"></i>
            </div>
        </div>
    )
}

export default TopBar;
