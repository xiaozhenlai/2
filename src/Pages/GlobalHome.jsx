import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const GlobalHome = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-10 text-center w-full max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          欢迎使用我们的服务！
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          以 用户 或 医生 身份注册以开始使用。
        </p>

        {/* Buttons Section */}
        <div className="space-y-6">
          <motion.button
            className="flex items-center justify-center w-full py-3 px-6 bg-green-500 text-white text-xl font-bold rounded-full shadow-md hover:bg-green-600 transform hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              navigate("/user");
            }}
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            以用户身份注册
          </motion.button>

          <motion.button
            className="flex items-center justify-center w-full py-3 px-6 bg-blue-500 text-white text-xl font-bold rounded-full shadow-md hover:bg-blue-600 transform hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.open(import.meta.env.VITE_DOCTOR_PORTAL, "_blank");
            }}
          >
            <FontAwesomeIcon icon={faStethoscope} className="mr-2" />
            以医生身份注册
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default GlobalHome;
