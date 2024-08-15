/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import MyBlogs from "./Components/myBlogs";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            element={
              <ProtectedRoute>
                <MyBlogs />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path='/myblogs' element={<MyBlogs/>}/> */}
          {/* Protected Routes */}
          <Route
            path="myblogs"
            element={
              <ProtectedRoute>
                <MyBlogs />
              </ProtectedRoute>
            }
          />
        </Route>
        {/* <Route path="/" element={<Login/>} /> */}

        {/* <Route path="/blogs" element={<BlogList/>} />
          <Route path="/create" element={<CreateBlog/> } />
          <Route path="/edit/:id" element={<EditBlog />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
