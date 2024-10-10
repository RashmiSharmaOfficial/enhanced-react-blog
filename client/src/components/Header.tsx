import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="mt-16">
            <div className="flex flex-col items-center font-serif text-gray-700 relative">
                <span className="absolute top-1/4 text-lg">React & Node</span>
                <span className="absolute top-1/3 text-6xl">Blog</span>
            </div>
            <img
                className="w-full h-[450px] mt-20 object-cover"
                src="https://images.pexels.com/photos/459465/pexels-photo-459465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Blog Header"
            />
        </div>
    );
};

export default Header;
