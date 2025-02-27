import React, {useState} from "react";
import {motion} from "framer-motion";
import toast from "react-hot-toast";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faVolumeUp} from '@fortawesome/free-solid-svg-icons';
import {predictLung} from "../../../../../Services/User/Prediction/DiseaseInfo";
import Loader from "../../../../../Components/ui/Loader";


const predictionDesc = {
    'Asthma': '哮喘是一种常见的慢性呼吸道疾病，主要由气道炎症和气道高反应性引发，环境因素（如过敏原、空气污染）和遗传因素是常见的诱发因素。主要症状：常出现反复发作的喘息、气急、胸闷或咳嗽等症状，尤其在夜间或清晨加重。预防建议：使用吸入器等药物控制症状，尽量避免接触过敏原，适当进行体育锻炼以增强肺功能。',
    "Bronchiectasisf": "支气管扩张症是支气管的异常扩张，通常因反复感染或气道阻塞所致。主要症状：慢性咳嗽、大量咳痰，有时伴有咯血。预防建议：患者需进行长期的呼吸道管理，包括体位引流、使用抗生素治疗感染，并通过物理治疗清除痰液，防止病情恶化。",
    'Bronchiolitis': '一种急性毛细支气管炎疾病，主要影响小气道（支气管）的呼吸道炎症，常见于婴幼儿，通常由病毒感染引起，尤其是呼吸道合胞病毒（RSV）。主要症状：以慢性咳嗽、胸闷、呼吸困难、咳痰，伴或不伴喘息为主要表现，还可伴随乏力、消瘦、焦虑等。预防建议：积极戒烟、多喝水、避免着凉，饮食上保持清淡，多吃富含维生素以及膳食纤维高的蔬菜、水果。',
    'COPD': '一种慢性阻塞性肺疾病，特征为气流阻塞，多由长期吸烟、空气污染以及遗传易感性等因素导致。主要症状：常见症状有慢性咳嗽、胸闷、呼吸困难、咳痰，伴或不伴喘息，还可伴随乏力、消瘦、焦虑等。预防建议：积极戒烟、多喝水、避免着凉，饮食上需清淡，多吃富含维生素以及膳食纤维高的蔬菜、水果。',
    'Healthy': '这是一种健康状态，没有重大呼吸系统疾病，意味着肺部功能良好、呼吸模式正常，且无呼吸方面的症状。维持建议：定期锻炼、均衡饮食以及避免吸烟有助于维持呼吸系统健康。',
    'LRTI': '下呼吸道感染涉及支气管、细支气管和肺部的感染，可由细菌、病毒或真菌引起。主要症状：常见症状包括咳嗽、咳痰、呼吸急促、发热等，严重时会导致呼吸困难。预防建议：治疗通常需根据感染的病原体使用抗生素或抗病毒药物，同时给予支持性治疗，如吸氧和休息。',
    'Pneumonia': '一种急性肺炎疾病，是小儿时期常见的疾病，重症肺炎是婴幼儿时期主要死亡原因之一，由细菌、病毒或真菌等病原体感染引发，使一个或两个肺部的气囊发炎。主要症状：导致咳嗽、发烧和呼吸困难等症状。预防建议：除卧床休息、大量饮水、吸氧、积极排痰外，肺炎治疗的最主要环节是抗感染。',
    'URTI': '一种上呼吸道感染疾病，涉及鼻腔、鼻窦、咽喉，有时还包括喉咙（声带）或气管（气管）的感染，通常由病毒引起。主要症状：表现出鼻塞、喉咙痛、咳嗽和打喷嚏等症状，也有慢性咳嗽、胸闷、呼吸困难、咳痰，伴或不伴喘息，还可伴随乏力、消瘦、焦虑等。预防建议：平时需积极戒烟、多喝水、避免着凉，饮食上需清淡，多吃富含维生素以及膳食纤维高的蔬菜、水果。'
};

const Predict = () => {
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [predictRes, setPredictRes] = useState(null);
    const handleLungPredict = async () => {
        if (!selectedFile) {
            toast.error('请先上传文件');
            return;
        }
        setLoading(true);
        try {
            const res = await predictLung(selectedFile);
            const {code, message, data} = res.data;
            if (code !== 200) {
                toast.error(message);
                return
            }
            const {type} = data;
            setPredictRes(type)
        } catch (error) {
            toast.error("肺音预测出错");
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    };

    const playDescription = () => {
        const descriptionText = predictionDesc[predictRes];
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(descriptionText);
        synth.speak(utterance);
    }


    const handleFileChange = (event) => {
        const file = event.target.files[0]; // 获取第一个文件
        if (file) {
            setSelectedFile(file); // 保存文件到 state 中
            setPredictRes(null)
        }
    };

    return (
        <div className="flex-grow flex flex-col h-full bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
            {!loading ? (
                <>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <div style={{
                            border: '1px solid #ccc',
                            borderRadius: '30px',
                            padding: '20px',
                            width: '540px',
                            height: !predictRes ? '270px' : '592px',
                            // margin: '0 auto',
                            backgroundColor: "#ffffff",
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                            <div style={{
                                fontSize: 24,
                                fontWeight: 400,
                                textAlign: 'center'
                            }}>上传音频文件
                            </div>
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.5}}
                                style={{marginBottom: '20px', marginTop: '20px'}}
                            >
                                <input type="file" accept="audio/*" onChange={handleFileChange}
                                       style={{
                                           border: '1px solid #ccc',
                                           borderRadius: '5px',
                                           paddingTop: 5,
                                           paddingLeft: 10,
                                           paddingRight: 10
                                       }}/>
                                {/*<span style={{marginLeft: '10px'}}>未选择文件</span>*/}
                            </motion.div>
                            <motion.button
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                style={{
                                    backgroundColor: '#4CAF50',
                                    color: 'white',
                                    padding: '10px 20px',
                                    borderRadius: '30px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    width: 270
                                }}
                                onClick={handleLungPredict}
                            >
                                上传和预测
                            </motion.button>
                            {predictRes &&
                                <div style={{
                                    border: '2px solid #bfbfbf',
                                    borderRadius: 20,
                                    width: 442,
                                    padding: 24,
                                    marginTop: 20
                                }}>
                                    <FontAwesomeIcon icon={faVolumeUp}
                                                     style={{
                                                         float: 'right',
                                                         cursor: 'pointer',
                                                         color: '#007bff'
                                                     }}
                                                     onClick={() => playDescription()}
                                    />
                                    <div style={{
                                        fontSize: 16,
                                        fontWeight: 700,
                                        textAlign: 'center',
                                        color: '#808080'
                                    }}>Predicted Disease:
                                    </div>
                                    <div style={{
                                        fontSize: 40,
                                        fontWeight: 300,
                                        textAlign: 'center',
                                        color: '#000'
                                    }}>
                                        {predictRes}
                                    </div>
                                    <p style={{
                                        fontSize: 16,
                                        color: '#808080'
                                    }}>{predictionDesc[predictRes]}</p>
                                </div>}
                        </div>
                        <img src={'/lung.png'} alt={''} style={{width: 500, height: 500}}/>
                    </div>
                </>
            ) : (
                <motion.div
                    className="flex-grow flex items-center justify-center"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.8}}
                >
                    <Loader
                        title="预测中..."
                        subtitle="您的疾病正在被预测！"
                    />
                </motion.div>
            )}
        </div>
    );
};

export default Predict;
