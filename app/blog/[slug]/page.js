"use client"

import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Client, Databases, Query } from "appwrite";

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6496a111993b2edfcade');

const BlogPost = ({ params }) => {
  const { slug } = params;
  const [blogPost, setblogPosts] = useState([])

  useEffect(() => {
    document.title = "Home: The Hunting Coder"
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "6496bcde6a85ac8cdd92", "6496bcf9a0180797085c",
      [
        Query.equal('slug', slug)
      ]
    );

    promise.then(function (response) {
      setblogPosts(response.documents[0])
    }, function (error) {
      console.log(error);
    });
  }, [])

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">{blogPost?.title}</h1>
        <div className="relative h-96 mb-8">
          <img src={blogPost?.image} alt={blogPost?.title} layout="fill" objectFit="cover" className="rounded-lg" />
        </div>

        <div>
          <p className="text-gray-700 text-lg leading-7" dangerouslySetInnerHTML={{ __html: blogPost?.content }}>
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
