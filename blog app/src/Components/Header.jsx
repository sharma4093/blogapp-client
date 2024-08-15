import  { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Modal from './modal';
import CreateBlog from './createBlog';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const user   = localStorage.getItem('token');

  useEffect(() => {
    if (user) {
      setIsLoggedIn(user);
    }
  }, []);

  const handleLogout = () => {
    alert('logged out');
    console.log('loggedout');
    localStorage.clear();
    setIsLoggedIn(null);
    navigate('/login');
  };

  const handlePostBlogClick = () => {
    if(!isLoggedIn){
      alert("please Login first");
      return
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <header className="bg-blue-600 text-white shadow-lg p-4 fixed w-full z-20">
        <nav className="flex justify-between">
          <div className="w-full">
            {user ? (
              <div className="text-right gap-3">
              <Link to="/" className="hover:text-gray-200 px-3">
                  Home
                </Link>
                <Link to="/profile" className="hover:text-gray-200 px-3">
                  Profile
                </Link>
                <button
                  className="hover:text-gray-200 px-3"
                  onClick={handlePostBlogClick}
                >
                  Post Blog
                </button>
                <Link to="/myblogs" className="hover:text-gray-200 px-3">
                  My Blogs
                </Link>
                <button
                  className="hover:text-gray-200 px-3"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="text-right gap-3"> 
              <Link to="/" className="hover:text-gray-200 px-3">
                  Home
                </Link>
                <button
                  className="hover:text-gray-200 px-3"
                  onClick={handlePostBlogClick}
                >
                  Post Blog
                </button>
                <Link
                  to="/login"
                  className="hover:text-gray-200 px-3 border-white bg-white text-black rounded-md pb-2"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </nav>
      </header>

      <Modal isVisible={isModalOpen} onClose={closeModal}>
        <CreateBlog/>
      </Modal>
    </div>
  );
};

export default Header;
