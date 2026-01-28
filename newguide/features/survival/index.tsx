
"use client";
import React, { useMemo, useState, useEffect, useCallback } from "react";

/* ===========================
   Small utility components
   =========================== */
const IconPlus = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
    <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
  </svg>
);
const IconMinus = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
    <path fill="currentColor" d="M5 11h14v2H5z" />
  </svg>
);
const IconClose = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
    <path
      fill="currentColor"
      d="M18.3 5.71L12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.29 19.71 2.88 18.29 9.18 12 2.88 5.71 4.29 4.29 10.59 10.6 16.88 4.29z"
    />
  </svg>
);

/* ===========================
   Styles & helpers
   =========================== */
const containerStyle: React.CSSProperties = {
  padding: 16,
  background: "var(--bg, #f8f5f5ff)",
  color: "var(--text, #0b0909ff)",
  minHeight: "100vh",
  fontFamily: "Inter, system-ui, -apple-system, sans-serif",
  maxWidth: 920,
  margin: "0 auto",
};

const cardStyle = (accent = "#0ea5a4"): React.CSSProperties => ({
  borderLeft: `3px solid ${accent}`,
  padding: 10,
  borderRadius: 8,
  background: "var(--panel, #faf8f8ff)",
});

/* ===========================
   Map Embed
   =========================== */
// const MapEmbed = ({ address }: { address: string }) => {
//   const url = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
//   return (
//     <div style={{ marginTop: 10, borderRadius: 10, overflow: "hidden" }}>
//       <iframe
//         title={address}
//         src={url}
//         width="100%"
//         height={200}
//         style={{ border: 0, borderRadius: 8 }}
//         loading="lazy"
//       />
//     </div>
//   );
// };

/* ===========================
   Types & Data
   =========================== */
type Flashcard = { front: string; back: string; image?: string };
type Phrase = { jp: string; romaji: string; en?: string };

type Step = {
  title: string;
  jp: string;
  romaji: string;
  content: string;
  address?: string;
  keywords?: string[];
  important?: string[];
  tips?: string[];
  phrases?: Phrase[];
  flashcards?: Flashcard[];
};

const stepsData: Step[] = [
  {
    title: " 🏦Visit Bank ",
    jp: "銀行口座開設",
    romaji: "Ginkō kōza kaisetsu",
    content:
      "Bring Residence Card, Passport, Student ID. Ask: '口座を開きたいです' / 'Kōza o hirakitai desu'.",
    address: "〒900-0015 沖縄県那覇市久茂地１丁目１−１",
    keywords: ["bank", "account", "JP Bank", "Okinawa Bank"],

    important: [
      "Residence Card",
      "Passport",
      "Japanese Address",
      "Phone Number",
      "Student ID (if student)",
    ],
    tips : [
  "1. Banks usually close at 15:00. Avoid visiting during lunch hours (around 12:00–13:00).",
  "2. Japan Post Bank (JP Bank) accepts many types of foreign IDs.",
  "3. Always bring a document with your Japanese address written clearly.",
  "4. Opening an account may require a seal (hanko) and passport.",
  "5. Some banks only accept online reservations for new accounts.",
  "6. Ask if an English form is available to make the process smoother.",
  "7. ATM limits may differ for foreigners; check before withdrawing large sums."
],


    // tips: [
    //   "Banks close at 15:00. Avoid lunch time.",
    //   "JP Bank accepts many foreign IDs.",
    //   "Bring a Japanese-address written on a document.",
    // ],

    flashcards: [
     { front: "キャッシュカード", back: "Cash Card (Kyasshu Kādo)", image: "/cashscard.jpg" },
      { front: "通帳", back: "Bankbook (Tsūchō)", image: "/bank-account-tool.jpg" },
      { front: "印鑑", back: "Seal (Inkan)", image: "/hanko.jpg" },
      {front: "振込", back: "Bank transfer (Furikomi)"},
      { front: "銀行", back: "Bank (Ginkō)",},
  { front: "預金", back: "Deposit (Yokin)",  }, 
  { front: "引き出し", back: "Withdrawal (Hikidashi)",  },
  { front: "口座", back: "Bank account (Kōza)"},
  { front: "暗証番号", back: "PIN (Anshō Bangō)", },
  { front: "利息", back: "Interest (Risoku)", },
  { front: "残高", back: "Balance (Zandaka)", },
  { front: "口座を開きたいです", back: "I want to open a bank account (Kōza o Hirakitai desu)",  },
  { front: "外国人ですが、口座を開けますか？", back: "I am a foreigner, can I open a bank account? (Gaikokujin desu ga, kōza o hirakemasu ka?)", },
  { front: "銀行の営業時間は？", back: "What are the bank's business hours? (Ginkō no eigyō jikan wa?)",},
  { front: "通帳記入をお願いします", back: "Please update my passbook (Tsūchō ki'nyū o onegaishimasu)" },
    ],

    phrases: [
      {
        jp: "口座を開きたいです",
        romaji: "Kōza o hirakitai desu",
        en: "I want to open a bank account",
      },
      {
        jp: "外国人ですが、口座を開けますか？",
        romaji: "Gaikokujin desu ga, kōza o hirakemasu ka?",
        en: "I am a foreigner, can I open a bank account?",
      },
       {
        jp: "振込をしたいです",
        romaji: "Furikomi o shitai desu",
        en: "I want to make a bank transfer",
      },
    ],
  },

  {
    title: "🏥Visit Hospitals",
    jp: "病院の訪問",
    romaji: "Byōin no hōmon",
    
    content:
      "Bring your Residence Card and insurance card. Ask: '診察を受けたいです' / 'Shinsatsu o uketai desu'.",
    address: "",
    keywords: ["hospital", "doctor", "medical"],

    important: [
      "Residence Card",
      "Health Insurance Card",
      "Cash or Card",
      "List of symptoms & medicine",
    ],

    
     tips: [
    "1. Expect 30–90 min waiting time for non-emergency visits.",
    "2. Bring translator app screenshots for symptoms.",
    "3. For emergencies call 119.",
    "4. Always carry your health insurance card (保険証, hokenshō).",
    "5. Make an appointment if possible to reduce waiting time.",
    "6. Bring a list of current medications and allergies.",
    "7. Speak clearly and politely: 'すみません、具合が悪いです' (Excuse me, I'm not feeling well).",
    "8. Ask which department to visit if unsure: 'どの科に行けばいいですか？'",
    "9. Carry cash; some clinics may not accept cards.",
    "10. Bring a small towel or tissue for comfort.",
    "11. Wear a mask if you have symptoms like cough or fever.",
    "12. If you cannot speak Japanese, look for hospitals with English-speaking staff.",
    "13. For minor injuries, bring a bandage or small first-aid kit just in case.",
    "14. Request a medical certificate if needed: '診断書をください'.",
    "15. Don't hesitate to ask for clarification if you don't understand instructions."
  ],

  flashcards :[
  { front: "病院", back: "Hospital (Byōin)", image: "/byouin.jpg" },
  { front: "診察", back: "Checkup (Shinsatsu)", image: "/shinsatsu.jpg" },
  { front: "保険証", back: "Health Insurance Card (Hokenshō)",  },
  { front: "医者", back: "Doctor (Isha)",  },
  { front: "看護師", back: "Nurse (Kangoshi)", },
  { front: "薬", back: "Medicine (Kusuri)", image: "/kusuri.jpg" },
  { front: "救急", back: "Emergency (Kyūkyū)", image: "/kyuukyu.jpg" },
  { front: "症状", back: "Symptoms (Shōjō)", },
  { front: "頭痛", back: "Headache (Zutsū)", image: "/zutsu.jpg" },
  { front: "熱", back: "Fever (Netsu)", image: "/netsu.jpg" },
  { front: "お腹が痛い", back: "Stomachache (Onaka ga Itai)", image: "/onaka.jpg" },
  { front: "怪我", back: "Injury (Kega)",},
  { front: "アレルギー", back: "Allergy (Arerugī)",  },
  { front: "薬をください", back: "Please give me medicine (Kusuri o Kudasai)",},
  { front: "どの科に行けばいいですか？", back: "Which department should I go to? (Dono ka ni ikeba ii desu ka?)", },
  { front: "診察を受けたいです", back: "I want to see a doctor (Shinsatsu o Uketai desu)",  },
  { front: "救急車を呼んでください", back: "Please call an ambulance (Kyūkyūsha o Yonde Kudasai)",  },
  
],


   phrases: [
  {
    jp: "具合が悪いです",
    romaji: "Guai ga warui desu",
    en: "I am not feeling well",
  },
  {
    jp: "病院に行きたいです",
    romaji: "Byōin ni ikitai desu",
    en: "I want to go to the hospital",
  },
  {
    jp: "頭が痛いです",
    romaji: "Atama ga itai desu",
    en: "I have a headache",
  },
  {
    jp: "熱があります",
    romaji: "Netsu ga arimasu",
    en: "I have a fever",
  },
  {
    jp: "薬をください",
    romaji: "Kusuri o kudasai",
    en: "Please give me medicine",
  },
  {
    jp: "アレルギーがあります",
    romaji: "Arerugī ga arimasu",
    en: "I have allergies",
  },
  {
    jp: "救急車を呼んでください",
    romaji: "Kyūkyūsha o yonde kudasai",
    en: "Please call an ambulance",
  },
  {
    jp: "予約を取りたいです",
    romaji: "Yoyaku o toritai desu",
    en: "I want to make an appointment",
  },
  
]

  },
  {
  title: "🗑️Garbage & Recycling",
  jp: "ゴミ・リサイクル",
  romaji: "Gomi / Risaikuru",
  content:
    "In Japan, garbage must be sorted carefully according to type: burnable, non-burnable, recyclables, and oversized items. Each ward or city has its own schedule and rules. Improper sorting may result in trash not being collected. Ask: 'ゴミを出したいです' / 'Gomi o dashitai desu'.",

  address: "Local ward office or collection point",

  keywords: ["garbage", "trash", "recycling", "separation", "collection", "oversized", "burnable", "non-burnable"],

  important: [
    "Separate burnable and non-burnable trash",
    "Recyclables (plastic, bottles, cans, paper, cardboard)",
    "Check collection days for each type",
    "Use designated colored trash bags",
    "Rinse recyclables to prevent odors",
    "Oversized items require special collection",
    "Hazardous items (batteries, electronics) have separate rules"
  ],

  tips: [
    "Burnable trash (燃えるゴミ) is collected 1–2 times per week.",
    "Non-burnable trash (燃えないゴミ) is collected less frequently; check local schedule.",
    "Recyclables: separate paper, plastic, glass, metal, and PET bottles.",
    "Use only the designated trash bags for your ward or city.",
    "Rinse bottles and cans to prevent odors and insects.",
    "Put trash out before 8:00 AM on collection day.",
    "Oversized items require prior booking with the ward office.",
    "Electronic waste (TVs, computers, batteries) often requires separate collection points or fees.",
    "Composting is rare in cities; check local rules if interested.",
    "If unsure, consult your ward's official website or neighborhood guide."
  ],

  flashcards: [
    { front: "ゴミ", back: "Trash / Garbage (Gomi)", image: "/burn.jpg" },
    { front: "燃えるゴミ", back: "Burnable Trash (Moeru Gomi)", image: "/moeru.png" },
    { front: "燃えないゴミ", back: "Non-burnable Trash (Moenai Gomi)", image: "/moenai.png" },
    { front: "資源ゴミ", back: "Recyclable Trash (Shigen Gomi)", image: "/recycle.gif" },
    { front: "ペットボトル", back: "Plastic Bottle (Petto Botoru)", image: "/pet.jpg" },
    { front: "缶", back: "Can (Kan)", image: "/can.jpg" },
    { front: "ガラス瓶", back: "Glass Bottle (Garasu Bin)", image: "/bottles.jpg" },
    { front: "紙", back: "Paper (Kami)", image: "/images/kami.jpg" },
    { front: "段ボール", back: "Cardboard (Danbōru)", image: "/cardboard.jpg" },
    { front: "粗大ゴミ", back: "Oversized Trash (Sodai Gomi)", image: "/big.png" },
    { front: "危険物", back: "Hazardous Items (Kikenbutsu)", image: "/kiken.png" },
    { front: "ゴミ袋", back: "Trash Bag (Gomibukuro)", image: "/bag.jpg" },
    { front: "回収日", back: "Collection Day (Kaishūbi)", },
    // { front: "リサイクル", back: "Recycling (Risaikuru)", image: "" },
    { front: "分別", back: "Separation / Sorting (Bunbetsu)",  }, 
    { front: "指定袋", back: "Designated Bag (Shitei Fukuro)", image: "/images/shiteifukuro.jpg" },
    
  ],

  phrases: [
    {
      jp: "ゴミを出したいです",
      romaji: "Gomi o dashitai desu",
      en: "I want to put out the trash"
    },
    {
      jp: "これは燃えますか？",
      romaji: "Kore wa moemasu ka?",
      en: "Is this burnable?"
    },
    {
      jp: "リサイクルに出したいです",
      romaji: "Risaikuru ni dashitai desu",
      en: "I want to put this in recycling"
    },
    {
      jp: "回収日はいつですか？",
      romaji: "Kaishūbi wa itsu desu ka?",
      en: "When is the collection day?"
    },
    {
      jp: "指定の袋はどこで買えますか？",
      romaji: "Shitei no fukuro wa doko de kaemasu ka?",
      en: "Where can I buy the designated trash bags?"
    },
    {
      jp: "粗大ゴミを出したいです",
      romaji: "Sodai gomi o dashitai desu",
      en: "I want to dispose of oversized trash"
    },
    {
      jp: "危険物はどこに出せますか？",
      romaji: "Kikenbutsu wa doko ni dasemasu ka?",
      en: "Where can I dispose of hazardous items?"
    }
  ]
},
{
  title: "🍽️Restaurants",
  jp: "レストラン",
  romaji: "Resutoran",
  content:
    "Dining in Japan includes sushi bars, ramen shops, izakayas, cafés, and family restaurants. Many places have menus with pictures, and some offer English menus. Ask: 'これをください' / 'Kore o kudasai'.",

  address: "Depends on restaurant; check local maps",

  keywords: ["restaurant", "food", "menu", "order", "reservation", "cash", "credit card"],

  important: [
    "Carry cash; small restaurants may not accept cards.",
    "Tipping is not customary in Japan.",
    "Check if smoking is allowed; many places are non-smoking.",
    "Some restaurants have table service; others are self-service.",
    "Reservation may be needed for popular restaurants.",
    "Allergy info may not be in English; clarify ingredients.",
    "Waiters may not speak English fluently; gestures help."
  ],

  tips: [
    "Use polite phrases: 'すみません' (Excuse me) to get attention.",
    "Look for the menu with pictures to order easily.",
    "Use gestures or point to the menu if unsure.",
    "For ramen shops, follow ticket machine procedures if they exist.",
    "Waiters may bring water automatically; you don’t need to ask.",
    "If sharing dishes, make sure to ask for extra plates.",
    "Do not leave a tip; paying the exact bill is normal.",
    "Check the opening hours; lunch and dinner hours may differ."
  ],

  flashcards: [
    { front: "食べ物", back: "Food (Tabemono)",},
    { front: "飲み物", back: "Drink (Nomimono)",  },
    { front: "メニュー", back: "Menu (Menyū)",},
    { front: "注文", back: "Order (Chūmon)",  },
    { front: "会計", back: "Bill / Payment (Kaikei)",  },
    { front: "予約", back: "Reservation (Yoyaku)",  },
    { front: "箸", back: "Chopsticks (Hashi)", },
    { front: "テーブル", back: "Table (Tēburu)",  },
    { front: "飲み放題", back: "All-you-can-drink (Nomihōdai)", },
    { front: "禁煙", back: "Non-smoking (Kin'en)", },
    { front: "喫煙", back: "Smoking (Kitsuen)",   },
    { front: "おすすめ", back: "Recommendation (Osusume)", },
    { front: "辛い", back: "Spicy (Karai)",  },
    { front: "水", back: "Water (Mizu)", },
    { front: "冷たい", back: "Cold (Tsumetai)",  },
    { front: "温かい", back: "Warm (Atatakai)", },
    { front: "お会計お願いします", back: "The bill, please (Okaikei onegaishimasu)", }


  ],

  phrases: [
    {
      jp: "これをください",
      romaji: "Kore o kudasai",
      en: "I’ll have this, please"
    },
    {
      jp: "おすすめは何ですか？",
      romaji: "Osusume wa nan desu ka?",
      en: "What do you recommend?"
    },
    {
      jp: "お会計お願いします",
      romaji: "Okaikei onegaishimasu",
      en: "The bill, please"
    },
    {
      jp: "予約をしたいです",
      romaji: "Yoyaku o shitai desu",
      en: "I would like to make a reservation"
    },
    {
      jp: "水をください",
      romaji: "Mizu o kudasai",
      en: "Water, please"
    },
    {
      jp: "辛いですか？",
      romaji: "Karai desu ka?",
      en: "Is it spicy?"
    },
    {
      jp: "お箸をください",
      romaji: "Ohashi o kudasai",
      en: "Please give me chopsticks"
    }
  ]
},
{
  title: "🚌Transport",
  jp: "交通",
  romaji: "Kōtsū",
  content:
    "Transportation in Japan includes trains, subways, buses, taxis, and airports. Many people use IC cards like Suica or Pasmo for easy travel. Ask: 'この駅はどこですか？' / 'Kono eki wa doko desu ka?'.",

  address: "Depends on station or bus stop; check maps",

  keywords: ["train", "bus", "taxi", "station", "subway", "IC card", "ticket"],

  important: [
    "Keep your ticket or IC card ready when entering/exiting stations.",
    "Subways and trains are usually punctual; be on time.",
    "Some buses require exact change; carry small coins.",
    "Taxis accept cash; some accept IC cards or credit cards.",
    "Priority seating is available for elderly, pregnant, or disabled.",
    "Check last train/bus times; late-night transport is limited.",
    "Follow proper etiquette: no loud talking, no phone calls on trains."
  ],

  tips: [
    "Purchase IC cards (Suica, Pasmo) for convenient travel.",
    "Use Google Maps or HyperDia to check train times.",
    "Always stand on the correct side of the escalator (left/right depends on region).",
    "Queue properly at train platforms and bus stops.",
    "Have your station name written in Japanese for taxi rides.",
    "Avoid eating on local trains; it’s generally frowned upon.",
    "For long-distance travel, consider Shinkansen (bullet train) reservations.",
    "Check if your IC card can be used in stores for small purchases."
  ],

  flashcards: [
    { front: "駅", back: "Station (Eki)", image: "/trainstation.jpg" },
    { front: "電車", back: "Train (Densha)", image: "/train.jpg" },
    { front: "バス", back: "Bus (Basu)", },
    { front: "タクシー", back: "Taxi (Takushī)",  },
    { front: "切符", back: "Ticket (Kippu)",  },
    { front: "改札口", back: "Ticket Gate (Kaisatsuguchi)", },
    { front: "ICカード", back: "IC Card (IC Kādo)",  },
    { front: "出口", back: "Exit (Deguchi)", },
    { front: "乗り換え", back: "Transfer (Norikae)",},
    { front: "時刻表", back: "Timetable (Jikokuhyō)",  }
  ],

  phrases: [
    {
      jp: "この駅はどこですか？",
      romaji: "Kono eki wa doko desu ka?",
      en: "Where is this station?"
    },
    {
      jp: "次の電車は何時ですか？",
      romaji: "Tsugi no densha wa nanji desu ka?",
      en: "What time is the next train?"
    },
    {
      jp: "切符をください",
      romaji: "Kippu o kudasai",
      en: "Please give me a ticket"
    },
    {
      jp: "ここで降ります",
      romaji: "Koko de orimasu",
      en: "I will get off here"
    },
    {
      jp: "駅まで行ってください",
      romaji: "Eki made itte kudasai",
      en: "Please take me to the station"
    },
    {
      jp: "乗り換えはどこですか？",
      romaji: "Norikae wa doko desu ka?",
      en: "Where is the transfer?"
    },
    {
      jp: "タクシーを呼んでください",
      romaji: "Takushī o yonde kudasai",
      en: "Please call a taxi"
    }
  ]
},
{
  title: "☕Cafés & Coffee Shops",
  jp: "カフェ",
  romaji: "Kafe",
  content:
    "Cafés in Japan range from small local coffee shops to international chains. Many offer free Wi-Fi and take-out options. Ask: 'コーヒーをください' / 'Kōhī o kudasai'.",

  address: "Depends on café location; check local maps",

  keywords: ["café", "coffee", "tea", "dessert", "take-out", "Wi-Fi"],

  important: [
    "Cash and credit cards are accepted, but small cafés may prefer cash.",
    "Some cafés have seating fees (chōshajō / table charge).",
    "Many cafés offer seasonal drinks and desserts.",
    "Check opening hours; some cafés close early.",
    "Free Wi-Fi may require a password or registration.",
    "Keep your voice low; cafés are often quiet spaces.",
    "Take-out is common; bring reusable cup if you prefer eco-friendly."
  ],

  tips: [
    "Order politely using 'ください' (kudasai).",
    "Point to menu items if unsure of pronunciation.",
    "Ask for recommendations: 'おすすめは何ですか？'",
    "Some cafés have loyalty cards; ask if available.",
    "Do not stay for long hours if the café is crowded.",
    "Check if smoking is allowed; most are non-smoking now.",
    "Use small coins for vending machine cafés."
  ],

  flashcards: [
    { front: "コーヒー", back: "Coffee (Kōhī)", image: "/coffee.jpg" },
    { front: "紅茶", back: "Tea (Kōcha)", image: "/tea.jpg" },
    { front: "ケーキ", back: "Cake (Kēki)", image: "/cake.jpg" },
    { front: "メニュー", back: "Menu (Menyū)",  },
    { front: "注文", back: "Order (Chūmon)",  },
    { front: "持ち帰り", back: "Take-out (Mochikaeri)", image: "/talkeout.jpg" },
    { front: "席", back: "Seat / Table (Seki)", image: "/images/seki.jpg" },
    { front: "Wi-Fi", back: "Wi-Fi (Wi-Fi)",  },
    { front: "砂糖", back: "Sugar (Satō)", image: "/sugar.jpg" },
    { front: "ミルク", back: "Milk (Miruku)",  }
  ],

  phrases: [
    {
      jp: "コーヒーをください",
      romaji: "Kōhī o kudasai",
      en: "Coffee, please"
    },
    {
      jp: "紅茶をください",
      romaji: "Kōcha o kudasai",
      en: "Tea, please"
    },
    {
      jp: "テイクアウトできますか？",
      romaji: "Teikuauto dekimasu ka?",
      en: "Can I take this to go?"
    },
    {
      jp: "おすすめは何ですか？",
      romaji: "Osusume wa nan desu ka?",
      en: "What do you recommend?"
    },
    {
      jp: "砂糖を入れてください",
      romaji: "Satō o irete kudasai",
      en: "Please add sugar"
    },
    {
      jp: "ミルクを入れてください",
      romaji: "Miruku o irete kudasai",
      en: "Please add milk"
    },
    {
      jp: "席は空いていますか？",
      romaji: "Seki wa aiteimasu ka?",
      en: "Is there an available seat?"
    }
  ]
},
{
  title: "📮Post Office",
  jp: "郵便局",
  romaji: "Yūbinkyoku",
  content: "Send mail, parcels, or handle banking (Japan Post Bank). Follow postal etiquette and wait your turn.",
  tips: [
    "Bring correct postage and address written clearly.",
    "Queue politely and wait your turn.",
    "Use the appropriate counter: mail, parcels, or banking.",
    "Bring ID if you are sending registered mail or using postal banking.",
    "Avoid phone calls and speak quietly inside the post office."
  ],
  flashcards: [
    { front: "郵便局", back: "Post Office (Yūbinkyoku)", image: "/postoffice.jpg" },
    { front: "手紙", back: "Letter (Tegami)", image: "/letter.png" },
    { front: "小包", back: "Parcel (Kozutsumi)", image: "/parcel.jpg" },
    { front: "切手", back: "Stamp (Kitte)", image: "/kitte.jpg" },
    // { front: "貯金", back: "Savings / Bank (Chokin)", image: "/postbank.jpg" }
  ],
  phrases: [
    { jp: "この手紙を送りたいです", romaji: "Kono tegami o okuritai desu", en: "I want to send this letter" },
    { jp: "小包を送りたいです", romaji: "Kozutsumi o okuritai desu", en: "I want to send a parcel" },
    { jp: "配達状況を確認したいです", romaji: "Haitatsu jōkyō o kakunin shitai desu", en: "I want to check the delivery status" },
    { jp: "登録郵便にしたいです", romaji: "Tōroku yūbin ni shitai desu", en: "I want to send registered mail" },
  ]
},
{
  title: "🏢Ward Office / City Hall",
  jp: "区役所",
  romaji: "Kuyakusho",
   address: "〒900-0021 沖縄県那覇市泉崎１丁目１−１",
  content: "Handle residence registration, certificates, taxes, and official procedures. Bring ID and documents.",
  tips: [
    "Bring your residence card and passport.",
    "Prepare all required documents for your request (e.g., family registry, certificates).",
    "Queue politely and wait for your number to be called.",
    "Some procedures require advance appointments.",
    "Speak slowly and clearly; translation apps can help."
  ],
  flashcards: [
    { front: "区役所", back: "Ward Office / City Hall (Kuyakusho)", },
    { front: "住民票", back: "Residence Certificate (Jūminhyō)", },
    { front: "戸籍", back: "Family Registry (Koseki)",  },
    { front: "印鑑登録", back: "Seal Registration (Inkan Tōroku)", },
    { front: "証明書", back: "Certificate (Shōmeisho)",  }
  ],
  phrases: [
    { jp: "住民票を取りたいです", romaji: "Jūminhyō o toritai desu", en: "I want to get a residence certificate" },
    { jp: "戸籍謄本を取りたいです", romaji: "Koseki tōhon o toritai desu", en: "I want to get a copy of my family registry" },
    { jp: "印鑑登録をしたいです", romaji: "Inkan tōroku o shitai desu", en: "I want to register my seal" },
    { jp: "証明書を発行してほしいです", romaji: "Shōmeisho o hakkō shite hoshii desu", en: "I want a certificate issued" },
  ]
},
{
  title: "🏘️Renting a House / Apartment",
  jp: "賃貸物件",
  romaji: "Chintai Bukken",
  content: "Visit real estate agencies to find apartments. Understand contracts, deposits, and monthly rent. Ask about utilities and move-in dates.",
  tips: [
    "Bring identification (passport and residence card).",
    "Be prepared for initial costs: deposit (敷金), key money (礼金), agency fees (仲介手数料).",
    "Ask if utilities (gas, electricity, water) are included.",
    "Check the apartment for issues before signing the contract.",
    "Speak politely and clarify all contract terms.",
    "Bring a Japanese-speaking friend or translation app if needed."
  ],
  flashcards: [
    { front: "賃貸", back: "Rental / Lease (Chintai)",  },
    { front: "物件", back: "Property (Bukken)",  },
    { front: "敷金", back: "Deposit (Shikikin)",  },
    { front: "礼金", back: "Key Money / Gift (Reikin)",  },
    { front: "家賃", back: "Rent (Yachin)",  },
    { front: "仲介手数料", back: "Agency Fee (Chūkai Tesūryō)",  },
    { front: "契約書", back: "Contract (Keiyakusho)", },
    { front: "引っ越し", back: "Moving (Hikkoshi)",  }
  ],
  phrases: [
    { jp: "この物件を見たいです", romaji: "Kono bukken o mitai desu", en: "I want to see this property" },
    { jp: "家賃はいくらですか？", romaji: "Yachin wa ikura desu ka?", en: "How much is the rent?" },
    { jp: "敷金と礼金はいくらですか？", romaji: "Shikikin to reikin wa ikura desu ka?", en: "How much are the deposit and key money?" },
    { jp: "契約書を確認したいです", romaji: "Keiyakusho o kakunin shitai desu", en: "I want to check the contract" },
    { jp: "いつ引っ越せますか？", romaji: "Itsu hikkosemasu ka?", en: "When can I move in?" }
  ]
},

  {
    title: "👮Visit Police Station",
    jp: "警察署訪問",
    romaji: "Keisatsusho hōmon",
    content:
      "Report lost items or safety issues. Ask: '紛失届を出したいです' / 'Funsitsu todoke o dashitai desu'.",
    address: "〒900-0021 沖縄県那覇市泉崎1丁目2−2",
    keywords: ["police", "station", "lost", "report"],

    important: ["Residence Card", "Passport", "Photos or evidence", "Phone number"],

    tips: [
      "Explain slowly or use a translation app.",
      "Police are strict but want to help; stay calm.",
      "Bring identification (passport or residence card) when visiting a station.",
    "For emergencies, dial 110 immediately.",
    "If reporting a lost item, have details ready (location, description, time).",
    "Keep copies of any reports given by the police for reference."
    ],

    flashcards: [
      { front: "警察", back: "Police (Keisatsu)",  },
      { front: "紛失", back: "Lost (Funsitsu)",  },
       { front: "届け出", back: "Report / Registration (Todokede)",  },
    { front: "事故", back: "Accident (Jiko)",  },
    { front: "窃盗", back: "Theft (Settō)", },
    { front: "身分証明書", back: "ID Card (Mibun Shōmeisho)",  }
    ],

    phrases: [
      {
        jp: "紛失届を出したいです",
        romaji: "Funsitsu todoke o dashitai desu",
        en: "I want to file a lost item report",
      },
      {
      jp: "助けてください",
      romaji: "Tasukete kudasai",
      en: "Please help me"
    },
    {
      jp: "事故がありました",
      romaji: "Jiko ga arimashita",
      en: "There has been an accident"
    },
     {
      jp: "警察を呼んでください",
      romaji: "Keisatsu o yonde kudasai",
      en: "Please call the police"
    },
    {
      jp: "身分証明書を見せます",
      romaji: "Mibun shōmeisho o misemasu",
      en: "I will show my ID"
    }
    ],
    
  },
];

/* ===========================
   Collapsible Item (outer)
   =========================== */
function CollapsibleItem({
  name,
  defaultOpen = false,
  children,
}: {
  name: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  return (
    <div style={{ marginBottom: 14 }}>
      <button
        onClick={() => setOpen((s) => !s)}
        style={{
          width: "100%",
          textAlign: "left",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 14px",
          borderRadius: 10,
          background: "var(--panel, #f7f9faff)",
          border: "1px solid rgba(0,0,0,0.06)",
          cursor: "pointer",
          fontWeight: 700,
          color: "var(--text, #111)",
        }}
        aria-expanded={open}
        aria-controls={`panel-${name}`}
      >
        <span>{name}</span>
        <span>{open ? <IconMinus /> : <IconPlus />}</span>
      </button>

      <div
        id={`panel-${name}`}
        style={{
          maxHeight: open ? 3000 : 0,
          overflow: "hidden",
          transition: "max-height 0.32s ease",
          marginTop: 8,
        }}
      >
        <div style={cardStyle()}>{children}</div>
      </div>
    </div>
  );
}

/* ===========================
   Inner small accordion (used inside tabs)
   =========================== */
function InnerAccordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ marginBottom: 8 }}>
      <button
        onClick={() => setOpen((s) => !s)}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "8px 10px",
          borderRadius: 8,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background:open? "rgba(14,165,164,0.15)" :"transparent",
          border: "1px solid rgba(0,0,0,0.06)",
          cursor: "pointer",
          fontWeight: 600,
          color: open ? "var(--accent, #0ea5a4)" : "var(--text, #111)",
          transition: "all 0.2s ease",
        }}
        aria-expanded={open}
        onMouseEnter={(e)=>{
          if (!open){
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(14,165,164,0.08)";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--accent, #0ea5a4)";
          }
        }}
        onMouseLeave={(e)=>{
          if(!open){
            (e.currentTarget as HTMLButtonElement).style.background ="transparent";
            (e.currentTarget as HTMLButtonElement).style.color ="#111";
            
          }
        }}
      >
        <span>{title}</span>
        <span style={{ opacity: 0.9 }}>{open ? <IconMinus /> : <IconPlus />}</span>
      </button>

      <div
        style={{
          maxHeight: open ? 1000 : 0,
          overflow: "hidden",
          transition: "max-height 0.28s ease",
          marginTop: 8,
        }}
      >
        <div style={{ padding: 8 }}>{children}</div>
      </div>
    </div>
  );
}

/* ===========================
   Flip Card Modal (image + 3D flip)
   =========================== */
function FlipCardModal({
  cards,
  initialIndex = 0,
  onClose,
}: {
  cards: Flashcard[];
  initialIndex?: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState<number>(initialIndex);
  const [flipped, setFlipped] = useState<boolean>(false);

  const prev = useCallback(() => {
    setFlipped(false);
    setIndex((i) => (i - 1 + cards.length) % cards.length);
  }, [cards.length]);

  const next = useCallback(() => {
    setFlipped(false);
    setIndex((i) => (i + 1) % cards.length);
  }, [cards.length]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setFlipped((s) => !s);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  if (!cards || cards.length === 0) return null;
  const cur = cards[index];

  /* Inline styles for flip card */
  const modalBackdrop: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    background: "rgba(0,0,0,0.45)",
    padding: 20,
  };

  const modalBox: React.CSSProperties = {
    width: "min(840px, 96%)",
    maxWidth: 840,
    borderRadius: 12,
    padding: 18,
    background: "var(--panel, #fff)",
    boxShadow: "0 12px 40px rgba(117, 118, 122, 0.25)",
  };

  const flipContainer: React.CSSProperties = {
    perspective: 1200,
    width: "100%",
    minHeight: 320,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const cardWrapper: React.CSSProperties = {
    width: 360,
    height: 300,
    position: "relative",
  };

  const flipperCommon: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 12,
    backfaceVisibility: "hidden" as const,
    WebkitBackfaceVisibility: "hidden" as const,
    boxShadow: "0 6px 18px rgba(2,6,23,0.12)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  };

  const frontStyle: React.CSSProperties = {
    ...flipperCommon,
    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
    transition: "transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1)",
    background: "linear-gradient(180deg,#ffffff,#fbfbfb)",
  };

  const backStyle: React.CSSProperties = {
    ...flipperCommon,
    transform: flipped ? "rotateY(0deg)" : "rotateY(-180deg)",
    transition: "transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1)",
    position: "absolute",
    top: 0,
    left: 0,
    background: "linear-gradient(180deg,#fff,#f7f7f7)",
    padding: 18,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };
  const modalButtonStyle: React.CSSProperties = {
  padding: "8px 12px",
  borderRadius: 8,
  border: "1px solid rgba(0,0,0,0.08)",
  background: "transparent",
  cursor: "pointer",
  fontWeight: 600,
  color: "#111",
  transition: "all 0.25s ease",
};

function hoverModalButton(e: React.MouseEvent<HTMLButtonElement>, hover: boolean) {
  const btn = e.currentTarget;
  if (hover) {
    btn.style.background = "rgba(14,165,164,0.15)";
    btn.style.color = "var(--accent, #0ea5a4)";
  } else {
    btn.style.background = "transparent";
    btn.style.color = "#111";
  }
}


  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: 160,
    objectFit: "cover" as const,
  };

  return (
    <div style={modalBackdrop} onClick={onClose}>
      <div style={modalBox} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ margin: 0 }}>{`Flashcards (${index + 1}/${cards.length})`}</h3>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button
              onClick={onClose}
              aria-label="Close"
              style={{ border: "none", background: "transparent", cursor: "pointer", padding: 6 }}
            >
              <IconClose />
            </button>
          </div>
        </div>

        <div style={{ marginTop: 14 }}>
          <div style={flipContainer}>
            <div style={cardWrapper}>
              {/* front */}
              <div
                style={{
                  ...frontStyle,
                  zIndex: flipped ? 1 : 2,
                  display: "flex",
                  flexDirection: "column",
                }}
                onClick={() => setFlipped((s) => !s)}
                role="button"
                tabIndex={0}
                aria-pressed={flipped}
              >
                {/* image (optional) */}
                {cur.image ? (
                  // use img tag pointing to /public
                  <img src={cur.image} alt={cur.front} style={imageStyle} />
                ) : (
                  <div style={{ height: 160, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.04)" }}>
                    <div style={{ color: "rgba(0,0,0,0.45)" }}>{cur.front}</div>
                  </div>
                )}

                <div style={{ padding: 12, flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ fontSize: 26, fontWeight: 800 }}>{cur.front}</div>
                </div>
              </div>

              {/* back */}
              <div
                style={{
                  ...backStyle,
                  zIndex: flipped ? 2 : 1,
                }}
                onClick={() => setFlipped((s) => !s)}
                role="button"
                tabIndex={0}
              >
                {cur.image && (
                  <div style={{ width: "100%", height: 160, overflow: "hidden" }}>
                    <img src={cur.image} alt={cur.front} style={{ ...imageStyle, filter: "brightness(0.95)" }} />
                  </div>
                )}

                <div style={{ padding: 12 }}>
                  <div style={{ fontSize: 20, fontWeight: 800 }}>{cur.back}</div>
                </div>
              </div>
            </div>
          </div>

          {/* controls */}
          <div style={{ marginTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", gap: 8 }}>
              <button
  onClick={prev}
  style={modalButtonStyle}
  onMouseEnter={(e) => hoverModalButton(e, true)}
  onMouseLeave={(e) => hoverModalButton(e, false)}
>
  ← Prev
</button>

<button
  onClick={() => setFlipped((s) => !s)}
  style={modalButtonStyle}
  onMouseEnter={(e) => hoverModalButton(e, true)}
  onMouseLeave={(e) => hoverModalButton(e, false)}
>
  Flip
</button>

<button
  onClick={next}
  style={modalButtonStyle}
  onMouseEnter={(e) => hoverModalButton(e, true)}
  onMouseLeave={(e) => hoverModalButton(e, false)}
>
  Next →
</button>

              {/* <button
                onClick={prev}
                style={{
                  padding: "8px 12px",
                  borderRadius: 8,
                  border: "1px solid rgba(0,0,0,0.08)",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                ← Prev
              </button>

              <button
                onClick={() => setFlipped((s) => !s)}
                style={{
                  padding: "8px 12px",
                  borderRadius: 8,
                  border: "1px solid rgba(0,0,0,0.08)",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                Flip
              </button>

              <button
                onClick={next}
                style={{
                  padding: "8px 12px",
                  borderRadius: 8,
                  border: "1px solid rgba(0,0,0,0.08)",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                Next → */}
              {/* </button> */}
            </div>

            <div style={{ color: "rgba(0,0,0,0.6)", fontSize: 13 }}>
              Tip: ← → to navigate, Space/Enter to flip, Esc to close
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===========================
   Tabs component
   =========================== */
const TABS = ["Basics", "Important", "Tips", "Phrases", "Flashcards", ] as const;
type TabKey = (typeof TABS)[number];

function Tabs({
  selected,
  onSelect,
}: {
  selected: TabKey;
  onSelect: (t: TabKey) => void;
}) {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {TABS.map((tab) => {
        const active = tab === selected;
        return (
          <button
            key={tab}
            onClick={() => onSelect(tab)}
            style={{
              padding: "8px 12px",
              borderRadius: 8,
              cursor: "pointer",
              border: active ? "1px solid rgba(14,165,164,0.5)" : "1px solid rgba(0,0,0,0.06)",
              background: active ? "rgba(14,165,164,0.12)" : "transparent",
              color: active? "var(--accent, #0ea5a4)" : "var(--text, #111)",
              fontWeight: active ? 700 : 600,
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e)=> {
              if(!active) {
                (e.currentTarget as HTMLButtonElement).style.background="rgba(14,165,164,0.08)";
                (e.currentTarget as HTMLButtonElement).style.color="var(--accent,#0ea5a4)";
              }
            }}
            onMouseLeave={(e)=>{
              if(!active){
                (e.currentTarget as HTMLButtonElement).style.background="transparent";
                (e.currentTarget as HTMLButtonElement).style.color="var(--text, #111)";
              }
            }}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}

/* ===========================
   Main Component
   =========================== */
export default function FullFeaturedGuideWithFlip() {
  const [search, setSearch] = useState<string>("");
  const [openModalFor, setOpenModalFor] = useState<{ id: string; index?: number } | null>(null);

  const results = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return stepsData;
    return stepsData.filter((step) => {
      return (
        step.title.toLowerCase().includes(q) ||
        step.jp.toLowerCase().includes(q) ||
        step.romaji.toLowerCase().includes(q) ||
        step.content.toLowerCase().includes(q) ||
        (step.keywords && step.keywords.some((kw) => kw.toLowerCase().includes(q))) ||
        (step.important && step.important.some((it) => it.toLowerCase().includes(q))) ||
        (step.tips && step.tips.some((it) => it.toLowerCase().includes(q))) ||
        (step.phrases &&
          step.phrases.some(
            (p) =>
              p.jp.toLowerCase().includes(q) ||
              p.romaji.toLowerCase().includes(q) ||
              (p.en && p.en.toLowerCase().includes(q))
          )) ||
        (step.flashcards &&
          step.flashcards.some((f) => f.front.toLowerCase().includes(q) || f.back.toLowerCase().includes(q)))
      );
    });
  }, [search]);

  return (
    <div style={containerStyle}>
      <h1
        style={{
          textAlign: "center",
          fontSize: 28,
          fontWeight: 700,
          color: "var(--accent, #0ea5a4)",
          marginBottom: 18,
        }}
      >
        Student Survival Guide  
      </h1>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by keyword, JP, romaji, tips, flashcard..."
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: 8,
          border: "1px solid var(--border, #ccc)",
          marginBottom: 16,
          fontSize: 16,
        }}
      />

      {results.map((step, idx) => {
        const id = `${step.title.replace(/\s+/g, "-").toLowerCase()}-${idx}`;
        return (
          <CollapsibleItem key={id} name={step.title} defaultOpen={false}>
            <StepWithTabs
              step={step}
              id={id}
              openFlashcardsModal={(startIndex = 0) => setOpenModalFor({ id, index: startIndex })}
            />
          </CollapsibleItem>
        );
      })}

      {/* Global modal controller */}
      {openModalFor &&
        (() => {
          const { id, index } = openModalFor;
          // attempt to find in current results (search) first, then fallback to full data
          const found = results.find((s, i) => `${s.title.replace(/\s+/g, "-").toLowerCase()}-${i}` === id) ??
            stepsData.find((s, i) => `${s.title.replace(/\s+/g, "-").toLowerCase()}-${i}` === id);
          if (!found || !found.flashcards) return null;
          return (
            <FlipCardModal
              cards={found.flashcards}
              initialIndex={index ?? 0}
              onClose={() => setOpenModalFor(null)}
            />
          );
        })()}
    </div>
  );
}

/* ===========================
   StepWithTabs: renders the tabs and their contents for one step
   =========================== */
function StepWithTabs({ step, id, openFlashcardsModal }: { step: Step; id: string; openFlashcardsModal: (startIndex?: number) => void; }) {
  const [tab, setTab] = useState<TabKey>("Basics");

  return (
    <div>
      {/* header basics */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
          <div>
            <p style={{ margin: 0 }}><strong>JP:</strong> {step.jp}</p>
            <p style={{ margin: 0 }}><strong>Romaji:</strong> {step.romaji}</p>
          </div>

          <div style={{ textAlign: "right", minWidth: 110 }}>
            {step.address ? <div style={{ fontSize: 13, color: "rgba(0,0,0,0.7)" }}>{step.address}</div> : null}
            <div style={{ marginTop: 6 }}>
              <small style={{ color: "rgba(0,0,0,0.6)" }}>{step.keywords?.slice(0,3).join(", ")}</small>
            </div>
          </div>
        </div>

        {/* tabs */}
        <Tabs selected={tab} onSelect={(t) => setTab(t)} />
      </div>

      {/* tab contents */}
      <div style={{ marginTop: 12 }}>
        {tab === "Basics" && (
          <div>
            <InnerAccordion title="Overview" defaultOpen>
              <p style={{ marginTop: 0 }}>{step.content}</p>
            </InnerAccordion>

            <InnerAccordion title="Quick actions">
              <ul style={{ marginTop: 8 }}>
                <li>Ask the staff the phrase shown in Phrases tab.</li>
                <li>Bring the "Important Things" listed in that tab.</li>
                <li>Open Flashcards to review key words before visiting.</li>
              </ul>
            </InnerAccordion>

            {/* small inline flashcard previews */}
            {step.flashcards && step.flashcards.length > 0 && (
              <div style={{ marginTop: 10 }}>
                <h4 style={{ margin: "6px 0" }}>Quick flashcards (preview)</h4>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {step.flashcards.slice(0, 3).map((c, i) => (
                    <div key={`${id}-card-${i}`} style={{ border: "1px solid rgba(0,0,0,0.06)", padding: 8, borderRadius: 8, minWidth: 120 }}>
                      {c.image && <img src={c.image} alt={c.front} style={{ width: "100%", height: 70, objectFit: "cover", borderRadius: 6, marginBottom: 8 }} />}
                      <div style={{ fontWeight: 700 }}>{c.front}</div>
                      <div style={{ marginTop: 6 }}>{c.back}</div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 8 }}>
                  <button
                    onClick={() => openFlashcardsModal(0)}
                    style={{
                      padding: "8px 12px",
                      borderRadius: 8,
                      cursor: "pointer",
                      border: "1px solid rgba(0,0,0,0.08)",
                      background: "transparent",
                      color:"#111",
                      fontWeight:600,
                      transition:"all 0.25s ease",
                    }}
                    onMouseEnter={(e)=>{
                      (e.currentTarget as HTMLButtonElement).style.background ="rgba(14,165,164,0.15)";
                      (e.currentTarget as HTMLButtonElement).style.color = "var(--accent,#0ea5a4)";
                    }}
                    onMouseLeave={(e)=>{
                      (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                      (e.currentTarget as HTMLButtonElement).style.color ="#111";
                    }}
                  >
                    Open Flashcards ▶
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "Important" && (
          <div>
            {step.important && step.important.length > 0 ? (
              <div>
                <InnerAccordion title="Documents to bring" defaultOpen>
                  <ul>
                    {step.important.map((it, i) => <li key={`${id}-important-${i}`}>{it}</li>)}
                  </ul>
                </InnerAccordion>

                <InnerAccordion title="Why these matter">
                  <p style={{ marginTop: 0 }}>Some places require official documents or local proof of address. Without them, services may be delayed.</p>
                </InnerAccordion>
              </div>
            ) : (
              <p>No important items listed for this place.</p>
            )}
          </div>
        )}

        {tab === "Tips" && (
          <div>
            {step.tips && step.tips.length > 0 ? (
              <div>
                <InnerAccordion title="Timing & queues" defaultOpen>
                  <ul>
                    {step.tips.map((t, i) => <li key={`${id}-tip-${i}`}>{t}</li>)}
                  </ul>
                </InnerAccordion>

                <InnerAccordion title="Local customs">
                  <p style={{ marginTop: 0 }}>Follow common local etiquette such as removing shoes (if required) and speaking politely.</p>
                </InnerAccordion>
              </div>
            ) : (
              <p>No tips listed for this place.</p>
            )}
          </div>
        )}

        {tab === "Phrases" && (
          <div>
            {step.phrases && step.phrases.length > 0 ? (
              <div>
                <InnerAccordion title="Common phrases" defaultOpen>
                  {step.phrases.map((p, i) => (
                    <div key={`${id}-phrase-${i}`} style={{ marginBottom: 8 }}>
                      <div style={{ fontWeight: 700 }}>{p.jp}</div>
                      <div style={{ fontSize: 13, color: "rgba(0,0,0,0.7)" }}>{p.romaji}</div>
                      {p.en && <div style={{ fontSize: 13 }}>{p.en}</div>}
                    </div>
                  ))}
                </InnerAccordion>

                <InnerAccordion title="How to use them">
                  <p style={{ marginTop: 0 }}>Try speaking slowly, and show the phrase on your phone if pronunciation is difficult.</p>
                </InnerAccordion>
              </div>
            ) : (
              <p>No phrases available.</p>
            )}
          </div>
        )}

        {tab === "Flashcards" && (
          <div>
            {step.flashcards && step.flashcards.length > 0 ? (
              <div>
                <InnerAccordion title="Preview (click to flip)" defaultOpen>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {step.flashcards.map((c, i) => (
                      <div
                        key={`${id}-fc-${i}`}
                        style={{
                          border: "1px solid rgba(254, 252, 252, 0.06)",
                          padding: 10,
                          borderRadius: 8,
                          minWidth: 140,
                          cursor: "pointer",
                        }}
                        onClick={() => openFlashcardsModal(i)}
                        role="button"
                      >
                        {c.image && <img src={c.image} alt={c.front} style={{ width: "100%", height: 70, objectFit: "cover", borderRadius: 6, marginBottom: 8 }} />}
                        <div style={{ fontWeight: 700 }}>{c.front}</div>
                        <div style={{ marginTop: 6 }}>{c.back}</div>
                      </div>
                    ))}
                  </div>
                </InnerAccordion>

                <div style={{ marginTop: 8 }}>
                  <button
                    onClick={() => openFlashcardsModal(0)}
                    style={{
                      padding: "8px 12px",
                      borderRadius: 8,
                      cursor: "pointer",
                      border: "1px solid rgba(0,0,0,0.08)",
                      background: "translucent",
                    }}
                  >
                    Open Flashcards Modal ▶
                  </button>
                </div>
              </div>
            ) : (
              <p>No flashcards for this place.</p>
            )}
          </div>
        )}

        {/* {tab === "Map" && (
          <div>
            {step.address ? (
              <div>
                <InnerAccordion title="Location (map)" defaultOpen>
                  <MapEmbed address={step.address} />
                </InnerAccordion>

                <InnerAccordion title="Tips for visiting">
                  <p style={{ marginTop: 0 }}>Check opening hours and bring the address printed in Japanese to show to taxi drivers.</p>
                </InnerAccordion>
              </div>
            ) : (
              <p>No address available for this place.</p>
            )}
          </div>
        )} */}
      </div>
    </div>
  );
}
