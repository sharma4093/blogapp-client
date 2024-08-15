/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import BlogCard from '../Components/BlogCard';
import CreateBlog from '../Components/createBlog';
import axiosInstance from '../axios';

const Home = () => {
  const [blogs,setBlogs] = useState([]);
  const [user,setUser] = useState({});
  const fetchBlogs= async()=>{
    try {
      const response = await axiosInstance.get('/blog/');
      setBlogs(response.data.data);
      setUser(response.data.data)
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchBlogs();
  },[]);




  return (
    <div className="container mx-auto p-4">
      {blogs.map((blog, index) => (
        <BlogCard key={index} title={blog.BlogName} content={blog.content} author={blog._user.name} createdAt={blog.createdAt} />
      ))}
    </div>
  );
};

export default Home;
