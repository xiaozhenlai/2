import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Home_2 = () => {
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Features Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="text-center mb-10">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            为什么选择 疾病预测？
          </motion.h2>
          <p className="text-lg text-gray-600 mt-4">
            我们的 AI 驱动型平台提供快速和个性化的健康
            洞察力，让您做出明智的决策并负责
            您的健康。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
          <motion.div
            className="text-center p-6 bg-white rounded-lg shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Accurate Predictions
            </h3>
            <p className="text-gray-600">
              Our system uses advanced algorithms to give you personalized
              health predictions.
            </p>
          </motion.div>

          <motion.div
            className="text-center p-6 bg-white rounded-lg shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              专家医生
            </h3>
            <p className="text-gray-600">
              与合格的医疗专业人员联系以获得见解和
              关于您的健康的建议。
            </p>
          </motion.div>

          <motion.div
            className="text-center p-6 bg-white rounded-lg shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              24/7 支持
            </h3>
            <p className="text-gray-600">
              全天候获得健康支持，确保
              随时介意。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 bg-gray-100">
        <div className="text-center mb-10">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            我们的用户怎么说
          </motion.h2>
          <p className="text-lg text-gray-600 mt-4">
            听听那些已经体验过
            医学指南。
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-10 px-6">
          <motion.div
            className="w-full md:w-1/3 p-8 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-lg text-gray-600 italic">
              “疾病预测 帮助我以简单且
              高效的方式。这就像有一位随叫随到的医生！
            </p>
            <p className="mt-4 font-semibold text-gray-800">John Doe</p>
            <p className="text-gray-500">用户</p>
          </motion.div>

          <motion.div
            className="w-full md:w-1/3 p-8 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-lg text-gray-600 italic">
              “该平台用户友好，为我提供了准确的健康建议。
              能够获得如此出色的见解令人欣慰。
            </p>
            <p className="mt-4 font-semibold text-gray-800">Jane Smith</p>
            <p className="text-gray-500">用户</p>
          </motion.div>

          <motion.div
            className="w-full md:w-1/3 p-8 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <p className="text-lg text-gray-600 italic">
              “疾病预测 为我提供了健康预测，帮助我做出
              对我的福祉做出重要决定。
            </p>
            <p className="mt-4 font-semibold text-gray-800">Sam Lee</p>
            <p className="text-gray-500">用户</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home_2;
