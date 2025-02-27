import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Home3 = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const contentRefs = useRef([]);
  const [active, setActive] = useState(false);

  const accordionData = {
    "预测、建议和药物的准确性如何？":
        "我们的系统利用先进的算法和专家意见来提供最准确的建议。但是，结果可能会因个人情况而异。",
    "这里的医生有多可靠？":
        "我们所有的医生都是高素质、经过认证的专业人士，在各自领域拥有多年的经验。您的健康和信任是我们的首要任务。",
    "医生 24/7 全天候可用吗？":
        "虽然我们的医生旨在提供最好的护理，但他们的可用性取决于时间表和紧急情况。但是，我们确保为紧急查询提供全天候支持。",
  };

  const handleAccordionToggle = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  return (
    <div className="px-24 py-3 mb-32">
      <h1 className="text-7xl text-center py-7 font-bold mb-4">FAQs</h1>
      <div className="hs-accordion-group bg-E3FDFD">
        {Object.keys(accordionData).map((key, index) => {
          const isActive = activeAccordion === index;
          const contentRef = useRef();
          return (
            <div
              key={index}
              className={`hs-accordion border  border-transparent rounded-md`}
            >
              <button
                className={`hs-accordion-toggle transition ${
                  isActive ? "text-white rounded-2xl" : ""
                } hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full text-xl font-semibold text-start text-gray-800 py-4 px-5 hover:text-white`}
                onClick={() => handleAccordionToggle(index)}
                aria-expanded={isActive}
                aria-controls={`hs-basic-active-bordered-collapse-${index + 1}`}
              >
                {key}
                <FontAwesomeIcon icon={isActive ? faMinus : faPlus} />
              </button>
              <div
                id={`hs-basic-active-bordered-collapse-${index + 1}`}
                ref={contentRef}
                style={{
                  maxHeight: isActive
                    ? `${contentRef.current?.scrollHeight}px`
                    : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
                role="region"
                aria-labelledby={`hs-active-bordered-heading-${index + 1}`}
              >
                <div className="pb-4 px-5">
                  <p className="text-gray-800">
                    <em>{accordionData[key]}</em>
                  </p>
                </div>
              </div>
              <div className=" border-b border-gray-300"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home3;
