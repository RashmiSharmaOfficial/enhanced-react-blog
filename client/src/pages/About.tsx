import React from 'react';

export default function About() {
    return (
        <div className="about-section">
            <div className="relative bg-cover bg-center h-screen"
                style={{
                    backgroundImage: "url('https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?cs=srgb&dl=pexels-alexander-dummer-1912868.jpg&fm=jpg')",
                }}>
                <div className="absolute inset-0 bg-white bg-opacity-30 flex flex-col justify-center items-start p-8 md:p-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800">Hello, <br />I'm Rashmi!<br />Welcome to my Blogging Website</h1>
                    <h3 className="mt-4 text-2xl text-gray-600">Wanna know more about me?</h3>
                    <p className="mt-2 text-lg text-gray-500">Scroll down</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center p-8 bg-white">
                <div className="about-left flex-1 md:mr-8">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">Philosophy of my Life!</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Welcome to my corner of the internet! As a passionate blogger, I believe in sharing experiences and insights that resonate with my readers. Life is a journey filled with lessons, and I strive to capture the essence of those moments through my writing.
                        <br /><br />
                        Whether it's a captivating story, helpful tips, or reflections on life, my goal is to create content that inspires and connects with you. Join me on this adventure, and let’s explore the beauty of life together!
                    </p>
                </div>

                <img
                    className="about-right mt-8 md:mt-0 w-full md:w-1/3 rounded-lg shadow-lg object-cover"
                    src="https://images.pexels.com/photos/4977832/pexels-photo-4977832.jpeg?cs=srgb&dl=pexels-marcela-oliveira-4977832.jpg&fm=jpg"
                    alt="Random"
                />
            </div>
        </div>
    );
}
