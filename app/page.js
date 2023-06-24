"use client"
import { Client } from 'appwrite';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6496a111993b2edfcade');

export default function Home() {

  const [blogPosts, setblogPosts] = useState([])

  useEffect(() => {
    document.title = "Home: The Hunting Coder"
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "6496bcde6a85ac8cdd92", "6496bcf9a0180797085c"
    );

    promise.then(function (response) {
      setblogPosts(response.documents)
    }, function (error) {
      console.log(error);
    });
  }, [])

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
        <div className="grid grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <div key={post.slug} className="bg-white rounded-lg p-4 shadow-md">
              <img src={post.image} alt={post.title} width={300} height={200} className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.metadesc}...</p>
              <Link href={`/blog/${post.slug}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">Read More</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
