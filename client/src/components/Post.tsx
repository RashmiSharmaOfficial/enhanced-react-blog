import { Link } from "react-router-dom";

interface PostProps {
    post: {
        _id: string;
        title: string;
        desc: string;
        createdAt: string;
        photo?: string;
        categories: { name: string }[];
    };
}

const Post: React.FC<PostProps> = ({ post }) => {
    const PF = "http://localhost:5001/images/";

    return (
        <div className="max-w-xs mx-4 mb-10 bg-white shadow-lg rounded-lg overflow-hidden">
            {post.photo && (
                <img
                    className="w-full h-72 object-cover rounded-t-lg"
                    src={PF + post.photo}
                    alt=""
                />
            )}
            <div className="p-4 flex flex-col items-center">
                <div className="flex flex-wrap mb-2">
                    {post.categories.map((c, index) => (
                        <span
                            key={index}
                            className="text-xs text-[#be9656] font-semibold mr-2 cursor-pointer"
                        >
                            {c.name}
                        </span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <span className="text-xl font-bold text-center cursor-pointer hover:text-[#be9656] transition">
                        {post.title}
                    </span>
                </Link>
                <hr className="w-full my-2" />
                <span className="text-sm text-gray-500 italic mb-2">
                    {new Date(post.createdAt).toDateString()}
                </span>
                <p className="text-sm text-gray-700 line-clamp-4">
                    {post.desc}
                </p>
            </div>
        </div>
    );
};

export default Post;
