/* eslint-disable no-unused-vars */
import React,{useEffect, useState} from 'react';
import { Link, Outlet,useNavigate } from 'react-router-dom';
import Header from '../Components/Header';


const Layout = () => {

  return (
    <div className="min-h-screen flex flex-col">
    <Header/>

      <main className="flex-grow p-6 bg-gray-100">
        <Outlet />
      </main>

    </div>
  );
};

export default Layout;
