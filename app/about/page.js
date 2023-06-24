import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-4">About Hunter Coding Blog</h1>
                <p className="text-lg">
                    Welcome to Hunter Coding Blog! We are dedicated to providing high-quality coding tutorials, articles, and resources to help developers enhance their skills and stay up to date with the latest technologies.
                </p>
                <p className="text-lg mt-4">
                    Our team of experienced developers shares their knowledge and insights on various programming languages, frameworks, and tools. Whether you're a beginner or an advanced developer, you'll find valuable content to level up your coding game.
                </p>
                <p className="text-lg mt-4">
                    We believe in the power of community and encourage active participation. Feel free to join the discussions, leave comments, and connect with fellow developers through our platform.
                </p>
                <p className="text-lg mt-4">
                    Stay tuned for regular updates as we publish new articles, tutorials, and exciting projects. Thank you for being a part of the Hunter Coding Blog community!
                </p>
            </div>
        </div>
    )
}

export default About
