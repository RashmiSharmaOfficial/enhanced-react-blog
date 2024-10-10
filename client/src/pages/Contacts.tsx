import React from 'react';

export default function Contacts() {
    return (
        <div className="contact-container">
            <div className="text-contact-header">
                <h1 className="font-text">Don't Hesitate to Connect With Us</h1>
            </div>
            <div className="img-contact-header relative bg-cover bg-center h-screen"
                style={{
                    backgroundImage: "linear-gradient(90deg, rgba(230, 40, 97, 0.5), rgba(22, 15, 122, 0.5), rgba(43, 206, 235, 0.5)), url('https://images.pexels.com/photos/4492127/pexels-photo-4492127.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"
                }}>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
                    <div className="text-white text-center line-height-1.7 text-lg md:text-xl">
                        You're not going to hit a ridiculously long phone menu when you call us. Your email isn't going to the inbox abyss, never to be seen or heard from again. At our Blogspot, we provide the exceptional service we'd want to experience ourselves!
                    </div>
                </div>
            </div>
            <div className="get-in-touch text-center py-16">
                <h2 className="font-head-get-in-touch text-4xl text-gray-800">Get in Touch</h2>
                <p className="mt-4 text-lg px-4 max-w-2xl mx-auto">
                    If you have any questions, please feel free to drop me a line. If you don't get an answer immediately, I might just be travelling through the middle of nowhere. I'll get back to you as soon as I can. That's a promise!
                </p>
                <img
                    className="mt-6 w-full md:w-1/2 mx-auto"
                    src="https://marvelapp.com/static/illustration@2x-85cce263ddf60035c6702cc57dd1fc2a-87cc6.jpg"
                    alt="Contact Illustration"
                />
            </div>
            <div className="wrapper flex flex-col md:flex-row py-16 px-4">
                <div className="booking-form-text flex-1 flex flex-col items-center mb-8 md:mb-0">
                    <h3 className="booking-form-text-title text-2xl text-gray-800 font-semibold">Address</h3>
                    <p className="booking-form-text-content text-lg">Delhi / India</p>
                    <h3 className="booking-form-text-title text-2xl text-gray-800 font-semibold mt-4">Drop Us a Line</h3>
                    <p className="booking-form-text-content text-lg">Please fill out this form</p>
                </div>
                <div className="booking-form flex-1">
                    <form className="booking-form-ul flex flex-col">
                        <label className="mt-4">
                            Full Name
                            <span className="text-red-500">*</span>
                        </label>
                        <input className="booking-form-input border-b-2 border-gray-300 py-2 mt-1" type="text" placeholder="What's your full name?" required />

                        <label className="mt-4">
                            Email
                            <span className="text-red-500">*</span>
                        </label>
                        <input className="booking-form-input border-b-2 border-gray-300 py-2 mt-1" type="email" placeholder="you@example.com" required />

                        <label className="mt-4">
                            Message
                            <span className="text-red-500">*</span>
                        </label>
                        <textarea className="booking-form-input border-b-2 border-gray-300 py-2 mt-1" placeholder="Write your message for me here" required></textarea>

                        <button className="booking-form-button mt-6 py-2 bg-pink-600 text-white rounded-md">
                            Send it
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
