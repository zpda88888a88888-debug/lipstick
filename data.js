const lipGlossary = [
    // 经典红色系
    { 
        id: 1, 
        term: "正红色", 
        brand: "Dior", 
        hex: "#C4252C", 
        plainExplanation: "经典大红色，气场全开，不偏橘不偏蓝", 
        skinToneHint: "几乎所有肤色都能驾驭，显白首选", 
        manTranslation: "就是那种很正很浓的红，涂上像红毯明星，气场拉满。", 
        lipstickExample: "Dior 999 传奇红唇", 
        colorFamily: "红色系", 
        tags: ["经典", "显白", "不挑皮", "气场强", "必入"] 
    },
    { 
        id: 2, 
        term: "朱砂橘", 
        brand: "LANCOME", 
        hex: "#E85933", 
        plainExplanation: "复古朱砂橘色，哑光质地，胡萝卜色调，元气显白", 
        skinToneHint: "黄皮救星，显白不挑皮，元气满分", 
        manTranslation: "橘红色的口红，像胡萝卜的颜色，涂上去很显白很有活力。", 
        lipstickExample: "兰蔻 196 朱砂橘", 
        colorFamily: "橘色系", 
        tags: ["胡萝卜色", "显白", "元气", "黄皮友好", "老网红"] 
    },
    { 
        id: 3, 
        term: "烂番茄", 
        brand: "Armani", 
        hex: "#E85D2E", 
        plainExplanation: "浓郁的橘红色，像熟透的番茄，显白又有活力", 
        skinToneHint: "黄皮挚爱，显白不荧光，四季皆宜", 
        manTranslation: "橘红色，像番茄酱的颜色，涂上很亮眼，巨显白。", 
        lipstickExample: "Armani 红管405 传奇烂番茄", 
        colorFamily: "橘色系", 
        tags: ["橘红", "显白", "黄皮友好", "丝绒", "鼻祖"] 
    },
    
    // 豆沙玫瑰系
    { 
        id: 4, 
        term: "豆沙色", 
        brand: "NARS", 
        hex: "#A65D48", 
        plainExplanation: "介于粉色与棕色之间，温柔知性，日常百搭", 
        skinToneHint: "黄皮友好，素颜可用，不突兀", 
        manTranslation: "像红豆沙一样的颜色，涂上很自然，不浓不淡，日常不出错。", 
        lipstickExample: "NARS Dolce Vita", 
        colorFamily: "粉色系", 
        tags: ["温柔", "日常", "素颜友好", "黄皮友好"] 
    },
    { 
        id: 5, 
        term: "玫瑰豆沙", 
        brand: "Estee Lauder", 
        hex: "#B85C6E", 
        plainExplanation: "浓郁的玫瑰色，带有温和的蔷薇珊瑚色调，大表姐同款", 
        skinToneHint: "不挑肤色，通勤约会皆宜，温柔显气质", 
        manTranslation: "像玫瑰花瓣一样的豆沙色，涂上很温柔很有气质，适合日常工作。", 
        lipstickExample: "雅诗兰黛 420 大表姐色", 
        colorFamily: "粉色系", 
        tags: ["玫瑰", "豆沙", "通勤", "温柔", "明星同款"] 
    },
    { 
        id: 6, 
        term: "豆沙红棕", 
        brand: "Dior", 
        hex: "#A6525C", 
        plainExplanation: "红棕调加入木质玫瑰豆沙，透了一点粉调，百搭气质", 
        skinToneHint: "大小姐气质感，日常通勤薄涂，约会派对厚涂", 
        manTranslation: "豆沙带点红棕色，涂上很有气质，像富家千金的感觉。", 
        lipstickExample: "Dior 720 豆沙红棕 ICONE", 
        colorFamily: "粉色系", 
        tags: ["豆沙", "红棕", "气质", "百搭", "热门"] 
    },
    
    // 枫叶红棕系
    { 
        id: 7, 
        term: "枫叶红", 
        brand: "MAC", 
        hex: "#B3413A", 
        plainExplanation: "红棕色中带橘调，像秋天的枫叶，复古又显白", 
        skinToneHint: "黄皮亲妈，显白一级棒，秋冬必备", 
        manTranslation: "红里透点橘，像秋天的叶子，涂上很显白，不挑人。", 
        lipstickExample: "MAC Chili 小辣椒", 
        colorFamily: "红色系", 
        tags: ["橘棕", "复古", "显白", "秋冬", "经典"] 
    },
    { 
        id: 8, 
        term: "柔雾小辣椒", 
        brand: "MAC", 
        hex: "#C14B4B", 
        plainExplanation: "Chili的柔雾版，浓郁枫叶红，暖色棕红调，更偏暖显白", 
        skinToneHint: "黄皮、黄白皮上嘴不突兀，更显白，弱化冷感", 
        manTranslation: "比小辣椒更温柔一点的红色，雾蒙蒙的质感，很时髦。", 
        lipstickExample: "MAC 316 Devoted To Chili", 
        colorFamily: "红色系", 
        tags: ["柔雾", "枫叶红", "显白", "泫雅同款", "热门"] 
    },
    { 
        id: 9, 
        term: "干枫叶色", 
        brand: "Estee Lauder", 
        hex: "#C75C3B", 
        plainExplanation: "温暖枫叶红，辣椒红和南瓜橘完美结合，妩媚又复古", 
        skinToneHint: "黄皮救星，显白不挑皮，秋冬感浓重", 
        manTranslation: "像干枯枫叶一样的颜色，红中带橘，涂上很有秋天的感觉。", 
        lipstickExample: "雅诗兰黛 333 Persuasive", 
        colorFamily: "红色系", 
        tags: ["枫叶", "复古", "显白", "杨幂同款", "秋冬"] 
    },
    { 
        id: 10, 
        term: "暖棕红", 
        brand: "YSL", 
        hex: "#A23B2E", 
        plainExplanation: "无法复制的红棕色，显白且具有高级感，复古暖棕调", 
        skinToneHint: "适合带妆厚涂或简单化妆时薄涂，黄皮友好", 
        manTranslation: "红棕色，像暖炉里的火，涂上很有复古高级感。", 
        lipstickExample: "YSL 小金条1966 暖棕红", 
        colorFamily: "红色系", 
        tags: ["红棕", "复古", "显白", "高级", "热门"] 
    },
    
    // 奶茶裸色系
    { 
        id: 11, 
        term: "奶茶色", 
        brand: "Bobbi Brown", 
        hex: "#C9A690", 
        plainExplanation: "温柔的裸调棕粉色，像奶茶一样柔和", 
        skinToneHint: "不挑肤色，适合通勤淡妆，伪素颜神器", 
        manTranslation: "就是奶茶那种颜色，涂上很温柔，低调有气质。", 
        lipstickExample: "Bobbi Brown Claret", 
        colorFamily: "棕色系", 
        tags: ["裸粉", "温柔", "日常", "不挑皮"] 
    },
    { 
        id: 12, 
        term: "赤茶红棕", 
        brand: "Bobbi Brown", 
        hex: "#A6423A", 
        plainExplanation: "高饱和冷红棕，一抹气场全开，如赤茶般浓郁", 
        skinToneHint: "显白有气质，适合秋冬重要场合", 
        manTranslation: "红茶一样的红棕色，涂上很有气场，适合正式场合。", 
        lipstickExample: "Bobbi Brown 04 Claret 赤茶红棕", 
        colorFamily: "棕色系", 
        tags: ["红棕", "气场", "秋冬", "显白"] 
    },
    { 
        id: 13, 
        term: "琥珀茶棕", 
        brand: "Bobbi Brown", 
        hex: "#B86B4A", 
        plainExplanation: "任何肤色都能驾驭的茶系美色，烘烤过的裸橘棕", 
        skinToneHint: "亚洲肤色显白，帅气从容，四季皆宜", 
        manTranslation: "像琥珀一样的茶棕色，涂上很高级，不挑肤色。", 
        lipstickExample: "Bobbi Brown 64 Afternoon Tea", 
        colorFamily: "棕色系", 
        tags: ["茶棕", "琥珀", "显白", "日常", "百搭"] 
    },
    
    // 橘色系
    { 
        id: 14, 
        term: "西柚色", 
        brand: "MAC", 
        hex: "#F3A28C", 
        plainExplanation: "粉橘调，像西柚果肉，清新减龄", 
        skinToneHint: "白皮显嫩，黄皮可用但别太荧光", 
        manTranslation: "粉橘色，像西柚肉，涂上显得年轻活泼，适合夏天。", 
        lipstickExample: "MAC See Sheer", 
        colorFamily: "橘色系", 
        tags: ["粉橘", "减龄", "清新", "日常"] 
    },
    { 
        id: 15, 
        term: "南瓜棕", 
        brand: "YSL", 
        hex: "#D4653A", 
        plainExplanation: "南瓜色提亮肤色，橘棕调显白显气质，秋冬气质型", 
        skinToneHint: "不挑肤色，提亮肤色，秋冬必备", 
        manTranslation: "像南瓜一样的橘棕色，涂上很显气质，适合秋冬。", 
        lipstickExample: "YSL 小金条2024 狩猎焰", 
        colorFamily: "橘色系", 
        tags: ["南瓜", "橘棕", "显白", "秋冬", "气质"] 
    },
    
    // 紫色系
    { 
        id: 16, 
        term: "梅子色", 
        brand: "3CE", 
        hex: "#8E4B6E", 
        plainExplanation: "紫色调浆果色，冷艳气质，适合秋冬", 
        skinToneHint: "白皮显气质，黄皮需带妆", 
        manTranslation: "像梅子一样的紫红色，涂上很有气场，但黄皮不化妆容易显黑。", 
        lipstickExample: "3CE Know Better", 
        colorFamily: "紫色系", 
        tags: ["紫调", "冷艳", "秋冬", "挑妆"] 
    },
    { 
        id: 17, 
        term: "紫调浆果色", 
        brand: "YSL", 
        hex: "#C43A6B", 
        plainExplanation: "紫红色偏深，像浆果汁液，气场强大", 
        skinToneHint: "冷白皮显白，黄皮需要全妆", 
        manTranslation: "紫红色的口红，涂上像吸血鬼女王，很显眼但挑人，全妆才hold住。", 
        lipstickExample: "YSL 黑管409", 
        colorFamily: "紫色系", 
        tags: ["紫红", "气场", "秋冬", "浓妆必备"] 
    },
    { 
        id: 18, 
        term: "车厘子浆果", 
        brand: "Guerlain", 
        hex: "#9B2D4A", 
        plainExplanation: "车厘子浆果色，薄涂像咬了口熟透的樱桃，厚涂复古画报", 
        skinToneHint: "显白有气质，适合秋冬宴会", 
        manTranslation: "像车厘子一样的深红色，涂上很有复古感，适合派对。", 
        lipstickExample: "娇兰 N23 车厘子浆果", 
        colorFamily: "紫色系", 
        tags: ["浆果", "复古", "显白", "秋冬", "新晋"] 
    },
    
    // 粉色系
    { 
        id: 19, 
        term: "芭比粉", 
        brand: "YSL", 
        hex: "#FF69B4", 
        plainExplanation: "高饱和度的亮粉色，荧光感强，俗称死亡芭比粉", 
        skinToneHint: "白皮也易显黑，黄皮绝对慎选", 
        manTranslation: "就是很亮很亮的粉红色，涂上像芭比娃娃，但现实中容易显土气，非冷白皮别碰。", 
        lipstickExample: "YSL 方管52", 
        colorFamily: "粉色系", 
        tags: ["荧光", "冷调", "高饱和", "显黑", "慎选"] 
    },
    { 
        id: 20, 
        term: "裸杏玫瑰", 
        brand: "YSL", 
        hex: "#D4A59A", 
        plainExplanation: "四季皆百搭的干燥玫瑰色，高级又低调知性", 
        skinToneHint: "不挑肤色，日常通勤，伪素颜必备", 
        manTranslation: "淡淡的玫瑰色带点杏色，涂上很自然，适合日常上班。", 
        lipstickExample: "YSL 奢华印记唇釉 231 裸杏玫瑰", 
        colorFamily: "粉色系", 
        tags: ["裸杏", "玫瑰", "日常", "通勤", "温柔"] 
    },
    
    // 土棕欧美系
    { 
        id: 21, 
        term: "土棕色", 
        brand: "Pat McGrath", 
        hex: "#8B5A3A", 
        plainExplanation: "棕色调明显，带土感，欧美妆标配", 
        skinToneHint: "白皮涂很高级，黄皮需气场驾驭", 
        manTranslation: "土一样的棕色，涂上像欧美模特，很酷但可能显成熟。", 
        lipstickExample: "Pat McGrath Omi", 
        colorFamily: "棕色系", 
        tags: ["棕色", "欧美", "高级", "挑人"] 
    },
    { 
        id: 22, 
        term: "裸土棕", 
        brand: "Bobbi Brown", 
        hex: "#A67B5B", 
        plainExplanation: "充满最高级感的低饱和茶棕柔雾，成熟系", 
        skinToneHint: "适合欧美妆或成熟风格，日常需谨慎", 
        manTranslation: "像泥土一样的裸棕色，涂上很高级但有点挑人。", 
        lipstickExample: "Bobbi Brown 402 Weekender", 
        colorFamily: "棕色系", 
        tags: ["土棕", "欧美", "高级", "成熟"] 
    },
    
    // 镜面唇釉系
    { 
        id: 23, 
        term: "镜面烂番茄", 
        brand: "YSL", 
        hex: "#E84A2C", 
        plainExplanation: "清透水橘调烂番茄，成膜后很清透，镜面质地", 
        skinToneHint: "不挑皮，非常显白，深唇建议打底", 
        manTranslation: "像玻璃一样的烂番茄色，涂上嘴唇亮亮的，很显白。", 
        lipstickExample: "YSL 黑管唇釉 416", 
        colorFamily: "橘色系", 
        tags: ["镜面", "烂番茄", "显白", "玻璃唇", "网红"] 
    },
    { 
        id: 24, 
        term: "微醺甜茶", 
        brand: "LANCOME", 
        hex: "#C45A5A", 
        plainExplanation: "朦胧雾面微醺妆容，粉调柔和整个色调，温柔甜腻", 
        skinToneHint: "美少女同款，薄涂温柔提气色，厚涂性感吸睛", 
        manTranslation: "像喝了甜茶一样微醺的粉色，涂上很温柔很甜。", 
        lipstickExample: "兰蔻 295 微醺甜茶", 
        colorFamily: "粉色系", 
        tags: ["微醺", "甜茶", "温柔", "金晨同款", "雾面"] 
    },
    { 
        id: 25, 
        term: "小野莓", 
        brand: "LANCOME", 
        hex: "#C9355C", 
        plainExplanation: "复古豆沙色又纯又欲，不会紫调偏重，俏皮甜美", 
        skinToneHint: "薄涂俏皮甜美，厚涂轻熟有气质，不挑皮", 
        manTranslation: "像小野莓一样的粉红色，涂上又甜又有气质。", 
        lipstickExample: "兰蔻 888 小野莓", 
        colorFamily: "粉色系", 
        tags: ["莓果", "复古", "甜美", "显白", "俏皮"] 
    }
];
