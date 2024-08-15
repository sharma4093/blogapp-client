/* eslint-disable no-unused-vars */
import React,{useEffect, useState} from 'react';
import { Link, Outlet,useNavigate } from 'react-router-dom';
import Header from '../Components/header';


const Layout = () => {


  return (
    <div className="min-h-screen flex flex-col">
    <Header/>
      {/* Header */}
      {/* <header className="bg-blue-600 text-white shadow-lg p-4 fixed w-full z-20">
        <nav className="flex justify-between">
          {/* <div className="flex space-x-4">
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <Link to="/about" className="hover:text-gray-200">About</Link>
            <Link to="/services" className="hover:text-gray-200">Services</Link>
          </div> 
          <div className='w-full'>
            {isLoggedIn ? (
                <div className='  text-right end gap-3'>
              <Link to="/login" className="hover:text-gray-200 right px-3">Profile</Link>
              <Link to="/signup" className="hover:text-gray-200 right px-3">Post Blog</Link>
              <Link to="/signup" className="hover:text-gray-200 right px-3" onClick={handlLogout}>Logout</Link>
            </div>
          
            ) : (
                <div className='  text-right end gap-3'>
              <Link to="/signup" className="hover:text-gray-200 right px-3">Post Blog</Link>
              <Link to="/login" className="hover:text-gray-200 right px-3">Login</Link>
            </div>
            )}
          </div>
        </nav>
      </header> */}

      <main className="flex-grow p-6 bg-gray-100">
        <Outlet />
      </main>

    </div>
  );
};

export default Layout;
