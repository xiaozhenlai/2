import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[]);
  const teamMembers = [
    {
      name: "Rishabh Raj Verma",
      role: "Full Stack Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Rajeshwari ",
      role: "Full Stack Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Amit kr. Gosai",
      role: "Full Stack Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Nehal Haider",
      role: "Full Stack Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Gaurav ",
      role: "Full Stack Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="bg-gray-200 text-gray-800">
      {/* About Section */}
      <section className="w-full py-20 px-6 md:px-16 bg-gradient-to-r from-blue-200 via-white to-purple-200">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            关于 疾病预防
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
           疾病预防 是您值得信赖的个性化健康伴侣
            预测、专家建议和有见地的建议。我们的目标
            是让您能够在以下的帮助下掌控自己的健康
            尖端技术和医疗专业知识。
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-20 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              我们的使命
            </h2>
            <p className="text-lg text-gray-600">
              在 疾病预防，我们的使命是让医疗保健更容易获得，
              可靠且个性化。通过将高级算法和
              专家医学见解，我们的目标是提供及时、准确和
              面向每个人、世界各地的可行健康建议。
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                为什么选择 疾病预防？
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>准确的健康洞察</li>
                <li>值得信赖的医疗专业人员</li>
                <li>为您的健康之旅提供 24/7 全天候支持</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full py-20 px-6 md:px-16 bg-gradient-to-r from-purple-300 via-white to-blue-300">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            我们的核心价值观
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                创新
              </h3>
              <p className="text-gray-600">
                通过先进技术和 AI 持续改进
                解决 方案。
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                信任
              </h3>
              <p className="text-gray-600">
                通过可靠和专家驱动的建议建立信心。
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                易用性
              </h3>
              <p className="text-gray-600">
                确保每个人都能始终使用医疗保健解决方案。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      {/*<section className="w-full py-20 px-6 md:px-16 bg-white">*/}
      {/*  <div className="max-w-5xl mx-auto text-center">*/}
      {/*    <h2 className="text-3xl font-semibold text-gray-900 mb-6">*/}
      {/*      Meet Our Team*/}
      {/*    </h2>*/}
      {/*    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center">*/}
      {/*      {teamMembers.map((member, index) => (*/}
      {/*        <div*/}
      {/*          key={index}*/}
      {/*          className="flex flex-col items-center py-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-lg"*/}
      {/*        >*/}
      {/*          <img*/}
      {/*            src={member.imageUrl}*/}
      {/*            className="w-32 h-32 rounded-full object-cover"*/}
      {/*            alt={member.name}*/}
      {/*          />*/}
      {/*          <h3 className="text-xl font-semibold text-gray-900 mb-2">*/}
      {/*            {member.name}*/}
      {/*          </h3>*/}
      {/*          <p className="text-gray-600">{member.role}</p>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </div>
  );
};

export default About;
