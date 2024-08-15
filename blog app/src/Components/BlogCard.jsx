/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import blog from "../assets/blog.svg"

const BlogCard = ({ title, content, author, createdAt }) => {
    return (
        <div className="bg-gray-100 px-2 pt-4  my-7">
            <article className="mx-auto my-0 flex max-w-md flex-col border shadow-md rounded-2xl bg-white px-4 md:max-w-5xl md:flex-row md:items-center">
                <div className="shrink-0 my-4 md:mr-8 md:max-w-sm">
                    <img className="rounded-2xl" src={blog} alt="" />
                </div>
                <div className="py-4 sm:py-8">
                    <a href="#" className="mb-3 block text-2xl font-medium text-gray-700">{title}</a>
                    <p className="mb-3 text-gray-500">{content}</p>
                    <div className="flex items-center">
                        <p className="ml-2 w-56">
                            <strong className="block font-medium text-gray-700">{author}</strong>
                            <span className="text-sm text-gray-400">{createdAt}</span>
                        </p>
                    </div>
                </div>
            </article>
        </div>

    )
}

export default BlogCard