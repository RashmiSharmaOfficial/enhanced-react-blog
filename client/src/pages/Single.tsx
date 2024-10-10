import Sidebar from "@/components/Sidebar";
import SinglePost from "@/components/SinglePost";

export default function Single() {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-6">
                <SinglePost />
            </div>
            <aside className="hidden md:block md:w-1/3 p-6">
                <Sidebar />
            </aside>
        </div>
    );
}
