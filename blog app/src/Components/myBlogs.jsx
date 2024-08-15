/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axiosInstance from '../axios'
import BlogCard from './BlogCard';

const MyBlogs = () => {
    const [myBlogs, setMyBlogs] = useState([]);
    const [user,setUser] = useState({});


    const fetchBlogs=async()=>{
        try {
            const blogs = await axiosInstance.get('/blog/user');
            setMyBlogs(blogs.data.data);
            setUser(myBlogs[0]._user);
            console.log(user.name);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchBlogs();
    },[]);



  return (
    <div className=' mt-20'>
    
     {myBlogs.map((blog, index) => (
        <BlogCard key={index} title={blog.BlogName} content={blog.content} author={user.name} createdAt={blog.createdAt} />
      ))}
    </div>
  )
}

export default MyBlogs