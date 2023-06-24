import React from 'react'
import Navbar from '../components/Navbar'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

                <p className="mb-4">
                    We would love to hear from you! If you have any questions, suggestions, or feedback, please feel free to reach out to us using the contact form below.
                </p>

                <form className="max-w-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Your Name
                        </label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" type="text" id="name" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Your Email
                        </label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" type="email" id="email" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" id="message" rows="5"></textarea>
                    </div>

                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact
