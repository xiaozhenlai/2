const Symptoms = [
    {
        "name": "Itching",
        "comment": "痒"
    },
    {
        "name": "Skin Rash",
        "comment": "皮疹"
    },
    {
        "name": "Nodal Skin Eruptions",
        "comment": "淋巴结性皮疹"
    },
    {
        "name": "Continuous Sneezing",
        "comment": "连续打喷嚏"
    },
    {
        "name": "Shivering",
        "comment": "颤抖"
    },
    {
        "name": "Chills",
        "comment": "寒战"
    },
    {
        "name": "Joint Pain",
        "comment": "关节痛"
    },
    {
        "name": "Stomach Pain",
        "comment": "胃痛"
    },
    {
        "name": "Acidity",
        "comment": "酸度"
    },
    {
        "name": "Ulcers on Tongue",
        "comment": "舌头上的溃疡"
    },
    {
        "name": "Muscle Wasting",
        "comment": "肌肉萎缩"
    },
    {
        "name": "Vomiting",
        "comment": "呕吐"
    },
    {
        "name": "Burning Micturition",
        "comment": "燃烧的微生物"
    },
    {
        "name": "Spotting Urination",
        "comment": "点滴排尿"
    },
    {
        "name": "Fatigue",
        "comment": "疲劳"
    },
    {
        "name": "Weight Gain",
        "comment": "体重增加"
    },
    {
        "name": "Anxiety",
        "comment": "焦虑"
    },
    {
        "name": "Cold hands and Feet",
        "comment": "冰冷的手和脚"
    },
    {
        "name": "Mood Swings",
        "comment": "情绪波动"
    },
    {
        "name": "Weight Loss",
        "comment": "减肥"
    },
    {
        "name": "Restlessness",
        "comment": "不安"
    },
    {
        "name": "Lethargy",
        "comment": "昏昏欲睡"
    },
    {
        "name": "Patches in Throat",
        "comment": "喉咙斑块"
    },
    {
        "name": "Irregular Sugar Level",
        "comment": "不规则的血糖水平"
    },
    {
        "name": "Cough",
        "comment": "咳嗽"
    },
    {
        "name": "High Fever",
        "comment": "高烧"
    },
    {
        "name": "Sunken Eyes",
        "comment": "凹陷的眼睛"
    },
    {
        "name": "Breathlessness",
        "comment": "喘不过气来"
    },
    {
        "name": "Sweating",
        "comment": "出汗"
    },
    {
        "name": "Dehydration",
        "comment": "脱水"
    },
    {
        "name": "Indigestion",
        "comment": "消化不良"
    },
    {
        "name": "Headache",
        "comment": "头痛"
    },
    {
        "name": "Yellowish Skin",
        "comment": "淡黄色的皮肤"
    },
    {
        "name": "Dark Urine",
        "comment": "深色尿液"
    },
    {
        "name": "Nausea",
        "comment": "恶心"
    },
    {
        "name": "Loss of Appetite",
        "comment": "食欲不振"
    },
    {
        "name": "Pain behind the Eyes",
        "comment": "眼后的痛"
    },
    {
        "name": "Back Pain",
        "comment": "背痛"
    },
    {
        "name": "Constipation",
        "comment": "便秘"
    },
    {
        "name": "Abdominal Pain",
        "comment": "腹痛"
    },
    {
        "name": "Diarrhoea",
        "comment": "腹泻"
    },
    {
        "name": "Mild Fever",
        "comment": "轻度发热"
    },
    {
        "name": "Yellow Urine",
        "comment": "黄尿"
    },
    {
        "name": "Yellowing of Eyes",
        "comment": "眼睛发黄"
    },
    {
        "name": "Acute Liver Failure",
        "comment": "急性肝衰竭"
    },
    {
        "name": "Fluid Overload",
        "comment": "液体超负荷"
    },
    {
        "name": "Swelling of Stomach",
        "comment": "胃肿"
    },
    {
        "name": "Swelled Lymph Nodes",
        "comment": "淋巴结肿大"
    },
    {
        "name": "Malaise",
        "comment": "不适"
    },
    {
        "name": "Blurred and Distorted Vision",
        "comment": "视力模糊扭曲"
    },
    {
        "name": "Phlegm",
        "comment": "痰"
    },
    {
        "name": "Throat Irritation",
        "comment": "喉咙刺激"
    },
    {
        "name": "Redness of Eyes",
        "comment": "眼睛发红"
    },
    {
        "name": "Sinus Pressure",
        "comment": "鼻窦压力"
    },
    {
        "name": "Runny Nose",
        "comment": "流鼻涕"
    },
    {
        "name": "Congestion",
        "comment": "拥堵"
    },
    {
        "name": "Chest Pain",
        "comment": "胸痛"
    },
    {
        "name": "Weakness in Limbs",
        "comment": "四肢无力"
    },
    {
        "name": "Fast Heart Rate",
        "comment": "心率加快"
    },
    {
        "name": "Pain during Bowel Movements",
        "comment": "排便时疼痛"
    },
    {
        "name": "Pain in Anal Region",
        "comment": "肛门区域疼痛"
    },
    {
        "name": "Bloody Stool",
        "comment": "血腥大便"
    },
    {
        "name": "Irritation in Anus",
        "comment": "肛门刺激"
    },
    {
        "name": "Neck Pain",
        "comment": "脖子痛"
    },
    {
        "name": "Dizziness",
        "comment": "头晕"
    },
    {
        "name": "Cramps",
        "comment": "抽筋"
    },
    {
        "name": "Bruising",
        "comment": "瘀伤"
    },
    {
        "name": "Obesity",
        "comment": "肥胖"
    },
    {
        "name": "Swollen Legs",
        "comment": "肿腿"
    },
    {
        "name": "Swollen Blood Vessels",
        "comment": "肿胀的血管"
    },
    {
        "name": "Puffy Face and Eyes",
        "comment": "浮肿的脸和眼睛"
    },
    {
        "name": "Enlarged Thyroid",
        "comment": "甲状腺肿大"
    },
    {
        "name": "Brittle Nails",
        "comment": "脆钉"
    },
    {
        "name": "Swollen Extremities",
        "comment": "四肢肿胀"
    },
    {
        "name": "Excessive Hunger",
        "comment": "过度饥饿"
    },
    {
        "name": "Extra Marital Contacts",
        "comment": "婚外联系人"
    },
    {
        "name": "Drying and Tingling Lips",
        "comment": "干燥刺痛的嘴唇"
    },
    {
        "name": "Slurred Speech",
        "comment": "口齿不清"
    },
    {
        "name": "Knee Pain",
        "comment": "膝盖痛"
    },
    {
        "name": "Hip Joint Pain",
        "comment": "髋关节痛"
    },
    {
        "name": "Muscle Weakness",
        "comment": "肌肉无力"
    },
    {
        "name": "Stiff Neck",
        "comment": "僵硬的脖子"
    },
    {
        "name": "Swelling Joints",
        "comment": "关节肿胀"
    },
    {
        "name": "Movement Stiffness",
        "comment": "运动刚度"
    },
    {
        "name": "Spinning Movements",
        "comment": "旋转动作"
    },
    {
        "name": "Loss of Balance",
        "comment": "余额损失"
    },
    {
        "name": "Unsteadiness",
        "comment": "不稳定"
    },
    {
        "name": "Weakness of One Body Side",
        "comment": "一身之弱"
    },
    {
        "name": "Loss of Smell",
        "comment": "嗅觉丧失"
    },
    {
        "name": "Bladder Discomfort",
        "comment": "膀胱不适"
    },
    {
        "name": "Foul Smell of Urine",
        "comment": "恶臭的尿液"
    },
    {
        "name": "Continuous Feel of Urine",
        "comment": "持续的尿液感觉"
    },
    {
        "name": "Passage of Gases",
        "comment": "气体的通道"
    },
    {
        "name": "Internal Itching",
        "comment": "内痒"
    },
    {
        "name": "Toxic Look (Typhos)",
        "comment": "伤寒"
    },
    {
        "name": "Depression",
        "comment": "抑郁症"
    },
    {
        "name": "Irritability",
        "comment": "易怒"
    },
    {
        "name": "Muscle Pain",
        "comment": "肌肉疼痛"
    },
    {
        "name": "Altered Sensorium",
        "comment": "改变的感觉"
    },
    {
        "name": "Red Spots Over Body",
        "comment": "身体上的红点"
    },
    {
        "name": "Belly Pain",
        "comment": "肚皮痛"
    },
    {
        "name": "Abnormal Menstruation",
        "comment": "月经异常"
    },
    {
        "name": "Dischromic Patches",
        "comment": "双色斑块"
    },
    {
        "name": "Watering from Eyes",
        "comment": "从眼睛流泪"
    },
    {
        "name": "Increased Appetite",
        "comment": "食欲增加"
    },
    {
        "name": "Polyuria",
        "comment": "多尿"
    },
    {
        "name": "Family History",
        "comment": "家族史"
    },
    {
        "name": "Mucoid Sputum",
        "comment": "粘液样痰"
    },
    {
        "name": "Rusty Sputum",
        "comment": "生锈的痰"
    },
    {
        "name": "Lack of Concentration",
        "comment": "注意力不集中"
    },
    {
        "name": "Visual Disturbances",
        "comment": "视觉障碍"
    },
    {
        "name": "Receiving Blood Transfusion",
        "comment": "接受输血"
    },
    {
        "name": "Receiving Unsterile Injections",
        "comment": "接受未消毒注射"
    },
    {
        "name": "Coma",
        "comment": "昏迷"
    },
    {
        "name": "Stomach Bleeding",
        "comment": "胃出血"
    },
    {
        "name": "Distention of Abdomen",
        "comment": "腹胀"
    },
    {
        "name": "History of Alcohol Consumption",
        "comment": "饮酒史"
    },
    {
        "name": "Fluid Overload",
        "comment": "液体超负荷"
    },
    {
        "name": "Blood in Sputum",
        "comment": "痰中带血"
    },
    {
        "name": "Prominent Veins on Calf",
        "comment": "小腿上突出的静脉"
    },
    {
        "name": "Palpitations",
        "comment": "心悸"
    },
    {
        "name": "Painful Walking",
        "comment": "痛苦的行走"
    },
    {
        "name": "Pus Filled Pimples",
        "comment": "充满脓液的丘疹"
    },
    {
        "name": "Blackheads",
        "comment": "黑头"
    },
    {
        "name": "Scarring",
        "comment": "疤痕"
    },
    {
        "name": "Skin Peeling",
        "comment": "皮肤去角质"
    },
    {
        "name": "Silver-like Dusting",
        "comment": "银状喷粉"
    },
    {
        "name": "Small Dents in Nails",
        "comment": "指甲上的小凹痕"
    },
    {
        "name": "Inflammatory Nails",
        "comment": "炎症性指甲"
    },
    {
        "name": "Blister",
        "comment": "泡罩"
    },
    {
        "name": "Red Sore Around Nose",
        "comment": "鼻子周围的红疮"
    },
    {
        "name": "Yellow Crust Ooze",
        "comment": "黄壳软泥"
    }
]

export default Symptoms;
