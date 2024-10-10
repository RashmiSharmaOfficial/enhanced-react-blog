import Post from "./Post";

interface PostType {
    _id: string;
    title: string;
    desc: string;
    createdAt: string;
    photo?: string;
    categories: { name: string }[];
}

interface PostsProps {
    posts: PostType[];
}

const Posts: React.FC<PostsProps> = ({ posts = [] }) => {
    return (
        <div className="flex flex-wrap justify-between mx-4 mt-4">
            {Array.isArray(posts) && posts.length > 0 ? (
                posts.map((p) => <Post key={p._id} post={p} />)
            ) : (
                <p>No posts available.</p>
            )}
        </div>
    );
};


export default Posts;
