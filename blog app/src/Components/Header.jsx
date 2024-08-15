
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Modal from "./modal";
import CreateBlog from "./createBlog";
import useAuth from "../hook/useAuth";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = () => {
    alert("logged out");
    console.log("loggedout");
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  const handlePostBlogClick = () => {
    if (!user) {
      alert("please Login first");
      return;
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="bg-blue-600 text-white shadow-lg p-4 fixed w-full z-20">
        <nav className="flex justify-between">
          <div className="w-full">
            {user ? (
              <div className="text-right gap-3">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "underline px-3" : "hover:text-gray-200 px-3"
                  }
                >
                  Home
                </NavLink>
                <button className="hover:text-gray-200 px-3" onClick={handlePostBlogClick}>
                  Post Blog
                </button>
                <NavLink
                  to="/myblogs"
                  className={({ isActive }) =>
                    isActive ? "underline px-3" : "hover:text-gray-200 px-3"
                  }
                >
                  My Blogs
                </NavLink>
                <button className="hover:text-gray-200 px-3" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <div className="text-right gap-3">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "underline px-3" : "hover:text-gray-200 px-3"
                  }
                >
                  Home
                </NavLink>
                <button className="hover:text-gray-200 px-3" onClick={handlePostBlogClick}>
                  Post Blog
                </button>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "underline px-3 border-white bg-white text-black rounded-md pb-2" : "hover:text-gray-200 px-3 border-white bg-white text-black rounded-md pb-2"
                  }
                >
                  Login
                </NavLink>
              </div>
            )}
          </div>
        </nav>
      </header>

      <Modal isVisible={isModalOpen} onClose={closeModal}>
        <CreateBlog onClose={closeModal} />
      </Modal>
    </>
  );
};

export default Header;

