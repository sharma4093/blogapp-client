/* eslint-disable no-unused-vars */
import React from "react";
import useSWR from "swr";
import axiosInstance from "../axios";
import BlogCard from "./BlogCard";

const fetcher = (url) => axiosInstance.get(url).then((res) => res.data.data);

const MyBlogs = () => {
  const { data: myBlogs, error } = useSWR("/blog/user", fetcher);

  if (error) return <div>Failed to load blogs</div>;
  if (!myBlogs) return <div>Loading...</div>;

  const user = myBlogs.length > 0 ? myBlogs[0]._user : {};

  return (
    <div className="">
      {myBlogs.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.BlogName}
          content={blog.content}
          author={user.name}
          createdAt={blog.createdAt}
          blogId={blog._id}
        />
      ))}
    </div>
  );
};

export default MyBlogs;
