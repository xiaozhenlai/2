import React, { useCallback, useRef, useState, useMemo, useEffect } from "react";

const comment={
    disease: "疾病",
    description: "描述",
    workout: "锻炼",
    diets: "饮食",
    medication: "用药",
    Description: '描述',
    Workout: '锻炼',
    Diets:'用药',
    Medication: '锻炼',
}

const diseaseComment={
    'Fungal infection': '真菌感染',
    Allergy: '过敏',
    GERD: '胃食管反流病',
    'Chronic cholestasis': '慢性胆汁淤积',
    'Drug Reaction': '药物反应',
    'Peptic ulcer disease': '消化性溃疡病',
    AIDS: '艾滋病',
    Diabetes: '糖尿病',
    Gastroenteritis: '胃肠炎',
    'Bronchial Asthma': '支气管哮喘',
    Hypertension: '高血压',
    Migraine: '偏头痛',
    'Cervical spondylosis': '颈椎病',
    'Paralysis (brain hemorrhage)': '瘫痪（脑出血）',
    Jaundice: '黄疸',
    Malaria: '疟疾',
    'Chicken pox': '水痘',
    Dengue: '登革热',
    Typhoid: '伤寒',
    'hepatitis A': '甲型肝炎',
    'Hepatitis B': '乙型肝炎',
    'Hepatitis C': '丙型肝炎',
    'Hepatitis D': '丁型肝炎',
    'Hepatitis E': '戊型肝炎',
    'Alcoholic hepatitis': '酒精性肝炎',
    Tuberculosis: '结核',
    'Common Cold': '伤风',
    Pneumonia: '肺炎',
    'Dimorphic hemmorhoids(piles)': '二态性血球菌（桩）',
    'Heart attack': '心脏病发作',
    'Varicose veins': '静脉曲张',
    Hypothyroidism: '甲状腺功能减退症',
    Hyperthyroidism: '甲亢',
    Hypoglycemia: '低血糖',
    Osteoarthristis: '骨关节炎',
    Arthritis: '关节炎',
    '(vertigo) Paroymsal Positional Vertigo': '（眩晕）Paroymsal Positional Vertigo',
    Acne: '粉刺',
    'Urinary tract infection': '尿路感染',
    Psoriasis: '牛皮癣',
    Impetigo: '脓疱病'
}

const Recommendation = ({ diseaseInfo }) => {
  // Use the ref array to store references for each accordion's content
  const contentRefs = useRef([]);

  const [activeAccordion, setActiveAccordion] = useState(null);
  const [refreshFunFact, setRefreshFunFact] = useState(0);

  const [accordionData, setAccordionData] = useState({
    disease: "",
    description: "",
    workout: "",
    diets: "",
    medication: "",
  });

  useEffect(() => {
    setAccordionData({
      Description: diseaseInfo.description,
      Workout: diseaseInfo.workout.join(", "),
      Diets: diseaseInfo.diets[0]
        .replace(/[\[\]']+/g, "")
        .split(", ")
        .join(", "),
      Medication: diseaseInfo.medication[0]
        .replace(/[\[\]']+/g, "")
        .split(", ")
        .join(", "),
    });
  }, [diseaseInfo]);

  const funFacts = [
   "人类的鼻子可以检测到超过 1 万亿种不同的气味。👃",
    "你的身体里有足够的铁来制作一个 3 英寸长的指甲。🧲",
    "人体包含大约 37.2 万亿个细胞。🔬",
    "你的皮肤是你身体里最大的器官。🧑‍⚕️",
    "人类的平均心脏每天跳动约 100,000 次。❤️",
    "人类与香蕉共享大约 60% 的 DNA。🍌",
    "打喷嚏以每小时 100 英里以上的速度从你的鼻子里流出。🌬️",
    "你的骨头不断被分解和重建。🦴",
    "人类大脑大约 75% 是水。🧠💧",
    "平均而言，您每天会产生大约 1 到 1.5 夸脱的唾液。💦",
  ];

  const handleAccordionToggle = useCallback(
    (index) => {
      if (activeAccordion === index) {
        setActiveAccordion(null);
      } else {
        setActiveAccordion(index);
      }
    },
    [activeAccordion]
  );

  const randomFunFact = useMemo(() => {
    return funFacts[Math.floor(Math.random() * funFacts.length)];
  }, [refreshFunFact]);

  return (
    <div className="p-9 w-full h-full">
      <div className="justify-center p-3 h-full w-full items-center">
        <h1 className="font-semibold text-3xl py-3">
          疾病是： {diseaseComment[diseaseInfo.disease]}
        </h1>
      </div>
      <div>
        <div className="hs-accordion-group bg-E3FDFD">
          {Object.keys(accordionData).map((key, index) => {
            const isActive = activeAccordion === index;

            // Using contentRefs to store the reference for each accordion content
            const contentRef = (el) => {
              contentRefs.current[index] = el;
            };

            return (
              <div
                key={index}
                className={`hs-accordion ${
                  isActive ? "hs-accordion-active:border-gray-200" : ""
                }  border border-transparent rounded-md`}
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full text-2xl font-semibold text-start text-gray-600 py-4 px-5 hover:text-black"
                  onClick={() => handleAccordionToggle(index)}
                  aria-expanded={isActive}
                  aria-controls={`hs-basic-active-bordered-collapse-${
                    index + 1
                  }`}
                >
                  {comment[key]}
                  <svg
                    className={`block size-3.5 ${isActive ? "hidden" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  <svg
                    className={`hs-accordion-active:block size-3.5 ${
                      isActive ? "" : "hidden"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                  </svg>
                </button>
                <div
                  id={`hs-basic-active-bordered-collapse-${index + 1}`}
                  ref={contentRef}
                  style={{
                    maxHeight: isActive
                      ? `${contentRefs.current[index]?.scrollHeight}px`
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
                <div className="border-b border-gray-300"></div>
              </div>
            );
          })}
        </div>
        <div className="flex space-x-7 items-center pt-7">
          <h1 className="text-[#3F72AF] text-3xl pb-2">趣闻</h1>
          <div
            role="button"
            onClick={() => setRefreshFunFact(refreshFunFact + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </div>
        </div>
        <h1>{randomFunFact}</h1>
      </div>
    </div>
  );
};

export default Recommendation;
