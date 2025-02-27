import React from "react";
import useProfile from "../../../../Zustand/User/useProfile";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { userLogout } from "../../../../Services/User/Auth/Auth";
import Headroom from "react-headroom";
import { motion } from "framer-motion";

const Navbar = () => {
  const { isLoggedIn, logout } = useProfile();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await userLogout();
      logout();
      toast.success("用户已注销");
      navigate("/user");
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <Headroom className="z-50">
      <div className="z-50 bg-gradient-to-r from-blue-900 to-purple-700 shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <Link to="/user" className="flex items-center space-x-2">
            <h1 className="text-4xl font-extrabold text-white">
              疾病<span className="text-yellow-400">预防</span>
            </h1>
          </Link>

          <ul className="hidden md:flex space-x-6 text-lg font-medium text-white items-center">
            <li>
              <Link to="/user" className="hover:text-yellow-400 transition">
                主页
              </Link>
            </li>
            <li>
              <Link
                  to={isLoggedIn() ? 'http://localhost:4000' : "/user/auth/login"}
                  target={isLoggedIn() ? "_blank" : "_self"}
                  className="hover:text-yellow-400 transition cursor-pointer"
              >
                预约
              </Link>
            </li>
            <li>
              <Link
                  to="/user/prediction"
                  className="hover:text-yellow-400 transition"
              >
                症状预测
              </Link>
            </li>
            <li>
              <Link
                  to="/user/lung-prediction"
                  className="hover:text-yellow-400 transition"
              >
                肺音预测
              </Link>
            </li>
            <li>
              <Link
                  to="/user/about"
                  className="hover:text-yellow-400 transition"
              >
                关于我们
              </Link>
            </li>
            {isLoggedIn() ? (
                <li>
                  <motion.button
                      onClick={handleLogout}
                      className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-2xl"
                      whileTap={{scale: 0.9}}
                      whileHover={{
                        scale: 1,
                        shadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                        backgroundColor: "white",
                        color: "black",
                      }}
                  >
                    登出
                  </motion.button>
                </li>
            ) : (
                <li>
                  <Link to="/user/auth/login">
                    <motion.button
                        className="bg-yellow-400 hover:bg-yellow-300 text-gray-800 px-6 py-2 rounded-2xl"
                        whileTap={{scale: 0.9}}
                        whileHover={{
                          scale: 1,
                          shadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                          backgroundColor: "black",
                          color: "yellow",
                        }}
                    >
                      登录
                    </motion.button>
                  </Link>
                </li>
            )}
          </ul>
        </div>
      </div>
    </Headroom>
  );
};

export default Navbar;
