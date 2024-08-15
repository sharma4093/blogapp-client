import { useState, useEffect } from "react";
import axiosInstance from "../axios";

const useAuth = () => {
  const [isVerifying, setIsVerifying] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const verifyUser = async () => {
    setIsVerifying(true);
    try {
      setError(null);
      const response = await axiosInstance.get("/user/is-logged-in");
      setUser(response.data.data);
    } catch (error) {
      setError(error.response ? error.response.data.message : "An error occurred");
      setUser(null);
    } finally {
      setIsVerifying(false);
    }
  };

  useEffect(() => {
    verifyUser();
  }, []);

  return { user, isVerifying, error, verifyUser };
};

export default useAuth;
