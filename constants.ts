import { CitySectionData, ActivityType, TipData } from './types';

export const TRIP_DATA: CitySectionData[] = [
  {
    city: "Istanbul",
    country: "Turkey",
    imagePrompt: "istanbul-mosque-sunset",
    description: "旅程的起點與終點。這座橫跨歐亞的古城，擁有數千年的歷史底蘊，香料的氣味與海風交織，是進入歐洲前最完美的暖身。",
    days: [
      {
        dayNumber: 1,
        date: "1/13 (二)",
        title: "啟程",
        highlight: "帶著期待的心情，飛往世界的中心。",
        schedule: [
          { time: "22:10", description: "班機起飛 TK25", type: ActivityType.FLIGHT, note: "台灣時間" }
        ]
      },
      {
        dayNumber: 2,
        date: "1/14 (三)",
        title: "初見伊斯坦堡",
        accommodation: "WISH MORE BAYRAMPAŞA",
        highlight: "購物與補給，調整時差的悠閒午後。",
        schedule: [
          { time: "05:50", description: "抵達伊斯坦堡機場", type: ActivityType.TRANSIT },
          { time: "07:00", description: "離開機場 (交通約2hr)", type: ActivityType.TRANSIT },
          { time: "09:00", description: "抵達飯店 (寄放行李)", type: ActivityType.REST },
          { time: "10:00", description: "Forum Istanbul 購物中心", type: ActivityType.SHOPPING, note: "土耳其必買品牌這都有" },
          { time: "12:00", description: "回飯店 Check-in / 梳洗休息", type: ActivityType.REST, note: "12:00 可提早入住" },
          { time: "14:00", description: "Forum Istanbul 購物中心 (續)", type: ActivityType.SHOPPING },
          { time: "19:00", description: "家樂褔採買零食飲料", type: ActivityType.SHOPPING, note: "超市補貨是省錢關鍵" },
          { time: "20:00", description: "回飯店休息", type: ActivityType.REST }
        ]
      },
      {
        dayNumber: 3,
        date: "1/15 (四)",
        title: "歷史的精華",
        accommodation: "WISH MORE BAYRAMPAŞA",
        highlight: "藍色清真寺與博斯普魯斯海峽的浪漫。",
        schedule: [
          { time: "09:00", description: "飯店早餐", type: ActivityType.FOOD },
          { time: "10:00", description: "前往舊城區", type: ActivityType.TRANSIT },
          { time: "11:00", description: "藍色清真寺", type: ActivityType.SIGHTSEEING },
          { time: "12:00", description: "聖索菲亞大教堂", type: ActivityType.SIGHTSEEING },
          { time: "13:00", description: "午餐：Sultanahmet Köftecisi", type: ActivityType.FOOD, note: "經典土耳其肉丸" },
          { time: "14:00", description: "地下水宮殿", type: ActivityType.SIGHTSEEING },
          { time: "15:00", description: "大巴札 (Grand Bazaar)", type: ActivityType.SHOPPING, note: "練練殺價技巧" },
          { time: "16:00", description: "海邊散步", type: ActivityType.REST },
          { time: "19:00", description: "博斯普魯斯海峽遊船", type: ActivityType.SIGHTSEEING, note: "橫跨歐亞的夜景" }
        ]
      }
    ]
  },
  {
    city: "London",
    country: "UK",
    imagePrompt: "london-tower-bridge",
    description: "從東方的神秘來到西方的典雅。倫敦是現代與皇室傳統的完美結合，準備好迎接泰晤士河畔的冷冽與美麗。",
    days: [
      {
        dayNumber: 4,
        date: "1/16 (五)",
        title: "飛越大陸：抵達倫敦",
        accommodation: "Tower Suites by Blue Orchid",
        highlight: "轉換舞台，來到大英帝國的心臟。",
        schedule: [
          { time: "15:10", description: "班機起飛 TK1971", type: ActivityType.FLIGHT, note: "伊斯坦堡時間" },
          { time: "16:10", description: "抵達倫敦", type: ActivityType.TRANSIT },
          { time: "18:00", description: "離開機場", type: ActivityType.TRANSIT },
          { time: "19:00", description: "飯店 Check-in & 晚餐 (Zizzi Tower Hill)", type: ActivityType.FOOD }
        ]
      },
      {
        dayNumber: 5,
        date: "1/17 (六)",
        title: "泰晤士河畔",
        accommodation: "Tower Suites by Blue Orchid",
        highlight: "從倫敦塔橋俯瞰這座城市的脈動。",
        schedule: [
          { time: "09:30", description: "倫敦塔 + 倫敦塔橋", type: ActivityType.SIGHTSEEING },
          { time: "14:00", description: "泰晤士河南岸散步", type: ActivityType.SIGHTSEEING },
          { time: "16:15", description: "Sky Garden 觀景", type: ActivityType.SIGHTSEEING, note: "需三週前預約" },
          { time: "18:30", description: "南岸夜景散步", type: ActivityType.REST }
        ]
      },
      {
        dayNumber: 6,
        date: "1/18 (日)",
        title: "博物館日",
        accommodation: "Tower Suites by Blue Orchid",
        highlight: "走進人類文明的寶庫，再漫步於皇家公園。",
        schedule: [
          { time: "09:30", description: "大英博物館", type: ActivityType.SIGHTSEEING, note: "世界三大博物館之一" },
          { time: "14:00", description: "柯芬園 (Covent Garden)", type: ActivityType.SHOPPING },
          { time: "15:00", description: "海德公園", type: ActivityType.REST },
          { time: "16:30", description: "Knightsbridge 街區", type: ActivityType.SHOPPING }
        ]
      },
      {
        dayNumber: 7,
        date: "1/19 (一)",
        title: "皇室巡禮",
        accommodation: "Tower Suites by Blue Orchid",
        highlight: "大笨鐘、白金漢宮，教科書上的場景就在眼前。",
        schedule: [
          { time: "09:30", description: "大笨鐘", type: ActivityType.SIGHTSEEING, note: "Klook 預約專業拍攝" },
          { time: "11:00", description: "西敏寺", type: ActivityType.SIGHTSEEING },
          { time: "12:00", description: "白金漢宮", type: ActivityType.SIGHTSEEING },
          { time: "14:30", description: "Uber Boat 遊河 (至格林威治)", type: ActivityType.TRANSIT },
          { time: "15:30", description: "格林威治 (Greenwich) 散步", type: ActivityType.SIGHTSEEING },
          { time: "17:30", description: "China Town 晚餐", type: ActivityType.FOOD }
        ]
      }
    ]
  },
  {
    city: "Prague",
    country: "Czech Republic",
    imagePrompt: "prague-old-town",
    description: "波西米亞的童話世界。這裡的每一塊紅磚與石板路都訴說著浪漫與哀愁，是本次旅程最像童話故事的一站。",
    days: [
      {
        dayNumber: 8,
        date: "1/20 (二)",
        title: "飛向童話之城",
        accommodation: "Falkensteiner Hotel Prague",
        highlight: "移動日，從西歐飛往中歐的心臟。",
        schedule: [
          { time: "11:00", description: "前往倫敦機場", type: ActivityType.TRANSIT },
          { time: "14:25", description: "班機起飛 BA858", type: ActivityType.FLIGHT },
          { time: "17:30", description: "抵達布拉格", type: ActivityType.TRANSIT },
          { time: "19:00", description: "飯店 Check-in", type: ActivityType.REST }
        ]
      },
      {
        dayNumber: 9,
        date: "1/21 (三)",
        title: "舊城時光",
        accommodation: "Falkensteiner Hotel Prague",
        highlight: "天文鐘聲響起，漫步在查理大橋的黃昏。",
        schedule: [
          { time: "09:30", description: "舊城廣場 & 天文鐘", type: ActivityType.SIGHTSEEING, note: "整點報時必看" },
          { time: "11:00", description: "哈維爾市集", type: ActivityType.SHOPPING },
          { time: "13:00", description: "火藥塔 / 市民會館", type: ActivityType.SIGHTSEEING },
          { time: "14:00", description: "老橋城塔", type: ActivityType.SIGHTSEEING },
          { time: "15:30", description: "連儂牆 (Lennon Wall)", type: ActivityType.SIGHTSEEING, note: "和平與愛的象徵" },
          { time: "16:30", description: "晚餐 & 逛超市", type: ActivityType.FOOD }
        ]
      },
      {
        dayNumber: 10,
        date: "1/22 (四)",
        title: "城堡俯瞰",
        accommodation: "Falkensteiner Hotel Prague",
        highlight: "登上布拉格城堡，將百塔之城的紅屋頂盡收眼底。",
        schedule: [
          { time: "09:30", description: "布拉格城堡區", type: ActivityType.SIGHTSEEING, note: "金氏世界紀錄最大城堡群" },
          { time: "13:30", description: "佩特任瞭望塔", type: ActivityType.SIGHTSEEING },
          { time: "15:30", description: "跳舞的房子", type: ActivityType.SIGHTSEEING, note: "現代建築巡禮" },
          { time: "16:00", description: "國立博物館", type: ActivityType.SIGHTSEEING },
          { time: "18:00", description: "瓦茨拉夫廣場", type: ActivityType.SHOPPING }
        ]
      }
    ]
  },
  {
    city: "Budapest",
    country: "Hungary",
    imagePrompt: "budapest-parliament",
    description: "多瑙河上的明珠。雙子城布達與佩斯，展現著宏偉的氣勢與溫泉文化的細膩，夜景堪稱歐洲之最。",
    days: [
      {
        dayNumber: 11,
        date: "1/23 (五)",
        title: "鐵道旅行",
        accommodation: "Barceló Budapest",
        highlight: "搭乘火車穿越國境，欣賞沿途雪景。",
        schedule: [
          { time: "12:00", description: "離開飯店", type: ActivityType.TRANSIT },
          { time: "13:01", description: "火車出發 (RJ1035)", type: ActivityType.TRAIN },
          { time: "19:58", description: "抵達布達佩斯", type: ActivityType.TRANSIT },
          { time: "20:20", description: "抵達飯店", type: ActivityType.REST }
        ]
      },
      {
        dayNumber: 12,
        date: "1/24 (六)",
        title: "漁人堡夕陽",
        accommodation: "Barceló Budapest",
        highlight: "站在漁人堡俯瞰國會大廈，夜晚在多瑙河上微醺。",
        schedule: [
          { time: "09:30", description: "中央市場", type: ActivityType.FOOD, note: "體驗當地生活與美食" },
          { time: "11:00", description: "聖伊什特萬聖殿", type: ActivityType.SIGHTSEEING },
          { time: "13:30", description: "鎖鏈橋", type: ActivityType.SIGHTSEEING },
          { time: "14:00", description: "漁人堡 & 馬加什教堂", type: ActivityType.SIGHTSEEING, note: "最佳夕陽拍攝點" },
          { time: "19:00", description: "多瑙河遊船", type: ActivityType.SIGHTSEEING, note: "金色夜景令人屏息" }
        ]
      },
      {
        dayNumber: 13,
        date: "1/25 (日)",
        title: "最美咖啡館",
        accommodation: "Barceló Budapest",
        highlight: "在宮殿般的咖啡館享用午後時光，感受昔日帝國風華。",
        schedule: [
          { time: "09:30", description: "英雄廣場 & 城市公園", type: ActivityType.SIGHTSEEING },
          { time: "11:00", description: "恐怖之屋", type: ActivityType.SIGHTSEEING },
          { time: "13:00", description: "午餐：紐約咖啡館", type: ActivityType.FOOD, note: "世界最美咖啡館" },
          { time: "14:30", description: "時尚街 & 弗洛斯馬提廣場", type: ActivityType.SHOPPING }
        ]
      }
    ]
  },
  {
    city: "Vienna",
    country: "Austria",
    imagePrompt: "vienna-opera",
    description: "音樂與藝術的殿堂。作為旅程的尾聲，維也納用優雅的華爾茲與炸牛排，為這次歐洲行畫下句點。",
    days: [
      {
        dayNumber: 14,
        date: "1/26 (一)",
        title: "前往音樂之都",
        accommodation: "Novotel Wien Hauptbahnhof",
        highlight: "火車再次啟程，迎接維也納的華麗夜晚。",
        schedule: [
          { time: "12:40", description: "火車出發 (EC144)", type: ActivityType.TRAIN },
          { time: "15:20", description: "抵達維也納", type: ActivityType.TRANSIT },
          { time: "17:00", description: "聖史蒂芬大教堂", type: ActivityType.SIGHTSEEING },
          { time: "17:30", description: "葛拉本大街 & 霍夫堡皇宮", type: ActivityType.SIGHTSEEING },
          { time: "18:30", description: "晚餐：Wiener Schnitzel", type: ActivityType.FOOD, note: "比臉還大的炸牛排" },
          { time: "20:00", description: "國家歌劇院夜景", type: ActivityType.SIGHTSEEING }
        ]
      },
      {
        dayNumber: 15,
        date: "1/27 (二)",
        title: "皇室榮光",
        accommodation: "Novotel Wien Hauptbahnhof",
        highlight: "走訪哈布斯堡家族的夏宮與冬宮。",
        schedule: [
          { time: "09:30", description: "美泉宮 (Schönbrunn)", type: ActivityType.SIGHTSEEING, note: "茜茜公主的夏宮" },
          { time: "13:00", description: "午餐：納許市場", type: ActivityType.FOOD },
          { time: "14:00", description: "美景宮", type: ActivityType.SIGHTSEEING },
          { time: "16:00", description: "中央咖啡館", type: ActivityType.FOOD, note: "文人雅士的聚會所" },
          { time: "17:00", description: "霍夫堡與英雄廣場", type: ActivityType.SIGHTSEEING }
        ]
      }
    ]
  },
  {
    city: "Return",
    country: "Transit",
    imagePrompt: "airplane-window",
    description: "帶著滿滿的回憶，踏上歸途。",
    days: [
      {
        dayNumber: 16,
        date: "1/28 (三)",
        title: "再訪伊斯坦堡",
        accommodation: "Istanbul Marriott Hotel Sisli",
        highlight: "轉機停留，最後的異國之夜。",
        schedule: [
          { time: "11:00", description: "離開維也納飯店", type: ActivityType.TRANSIT },
          { time: "14:05", description: "班機起飛 TK1886", type: ActivityType.FLIGHT },
          { time: "18:30", description: "抵達伊斯坦堡", type: ActivityType.TRANSIT }
        ]
      },
      {
        dayNumber: 17,
        date: "1/29 (四) - 1/30 (五)",
        title: "回家",
        highlight: "旅程結束，下一站：溫暖的家。",
        schedule: [
          { time: "12:00", description: "離開飯店", type: ActivityType.TRANSIT },
          { time: "17:10", description: "班機起飛 TK124", type: ActivityType.FLIGHT },
          { time: "08:30", description: "抵達台灣 (+1天)", type: ActivityType.TRANSIT }
        ]
      }
    ]
  }
];

export const INTERACTIVE_TIPS: TipData[] = [
  {
    id: 'tip-1',
    title: '行前準備',
    content: '冬季歐洲日照短，建議每天早點出門(08:00-09:00)，把握有陽光的時刻拍照！',
    icon: 'camera'
  },
  {
    id: 'tip-2',
    title: '鞋子很重要',
    content: '布拉格和許多老城區都是石板路，一雙好走的防潑水球鞋或短靴是必須的，千萬別穿新鞋。',
    icon: 'shoes'
  },
  {
    id: 'tip-3',
    title: '預約提醒',
    content: '倫敦 Sky Garden 需三週前預約，大笨鐘拍攝、熱門餐廳建議都先在台灣訂好位。',
    icon: 'ticket'
  },
  {
    id: 'tip-4',
    title: '行李策略',
    content: '歐洲廉航或火車移動時，大行李箱搬運不便。建議攜帶輕便行李，利用購物日(如Day 2)採買消耗品。',
    icon: 'luggage'
  }
];