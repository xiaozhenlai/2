import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Home1 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen ">
      <motion.div
        className="w-full max-w-4xl p-8 flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white mb-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          欢迎来到 疾病预测
        </motion.h1>
        <motion.p
          className="text-xl md:text-3xl text-white/90 font-semibold"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          预测您的{" "}
          <span className="text-yellow-300">
            <Typewriter
              words={["health", "well-being", "care"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={95}
              delaySpeed={1000}
            />
          </span>{" "}
          with ease...
        </motion.p>
        <motion.p
          className="mt-6 text-sm md:text-lg text-white/80 max-w-xl mx-auto mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          在疾病预测，我们简化了您的健康之旅。输入您的症状，然后
          让我们的智能系统提供潜在的见解，为您提供指导
          以更清楚地了解您的健康状况。
        </motion.p>
        <motion.button
          className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-400  mt-6"
          onClick={() => {
            navigate("prediction");
          }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home1;
