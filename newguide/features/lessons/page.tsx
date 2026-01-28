
// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { collection, getDocs } from "firebase/firestore";
// interface DailyEntry {
//   jp: string;
//   en: string;
//   np: string;
//   category: string;
//   type: "vocab" | "phrase" | "kanji" | "sentence";
// }

// // ---------------- Example Data (expand later to 2000+ entries) ----------------
// const allData: DailyEntry[] = [
//   // Bank
//   { jp: "口座を開きたいです", en: "I want to open a bank account", np: "म बैंक खाता खोल्न चाहन्छु", category: "Bank", type: "phrase" },
//   { jp: "印鑑を持っていますか？", en: "Do you have a personal seal?", np: "तपाईंसँग निजी मुहर छ?", category: "Bank", type: "phrase" },

//   // School
//   { jp: "教室はどこですか？", en: "Where is the classroom?", np: "कक्षा कहाँ छ?", category: "School", type: "phrase" },
//   { jp: "宿題を出してください", en: "Please submit your homework", np: "कृपया गृहकार्य बुझाउनुहोस्", category: "School", type: "phrase" },

//   // Hospital
//   { jp: "頭が痛いです", en: "I have a headache", np: "मलाई टाउको दुख्छ", category: "Hospital", type: "phrase" },
//   { jp: "保険証を見せてください", en: "Please show your insurance card", np: "कृपया बीमा कार्ड देखाउनुहोस्", category: "Hospital", type: "phrase" },

//   // Police
//   { jp: "財布をなくしました", en: "I lost my wallet", np: "मैले वालेट हराएँ", category: "Police", type: "phrase" },
//   { jp: "助けてください", en: "Please help me", np: "कृपया मद्दत गर्नुहोस्", category: "Police", type: "phrase" },

//   // Airport
//   { jp: "搭乗券を見せてください", en: "Please show your boarding pass", np: "कृपया बोर्डिङ पास देखाउनुहोस्", category: "Airport", type: "phrase" },
//   { jp: "荷物はどこで受け取りますか？", en: "Where do I collect my luggage?", np: "मेरो सामान कहाँ लिनु पर्छ?", category: "Airport", type: "phrase" },

//   // Supermarket
//   { jp: "この野菜はいくらですか？", en: "How much is this vegetable?", np: "यो तरकारी कति हो?", category: "Supermarket", type: "phrase" },
//   { jp: "袋は必要ですか？", en: "Do you need a bag?", np: "तपाईँलाई झोला चाहिन्छ?", category: "Supermarket", type: "phrase" },

//   // Weather
//   { jp: "今日は暑いです", en: "It’s hot today", np: "आज तातो छ", category: "Weather", type: "sentence" },
//   { jp: "雨が降りそうです", en: "It looks like it will rain", np: "मौसमले पानी पर्न सक्छ जस्तो देखिन्छ", category: "Weather", type: "sentence" },

//   // Casual conversation / jokes
//   { jp: "元気ですか？", en: "How are you?", np: "तपाईं कस्तो हुनुहुन्छ?", category: "Casual", type: "phrase" },
//   { jp: "昨日の冗談聞いた？", en: "Did you hear yesterday's joke?", np: "हिजोको मजाक सुन्नुभयो?", category: "Casual", type: "phrase" },

//   // ... more entries to reach 2000+
// ];

// // ---------------- Component ----------------
// const Lessons: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [filteredData, setFilteredData] = useState<DailyEntry[]>([]);
//   const [history, setHistory] = useState<string[]>([]);

//   useEffect(() => {
//     const term = searchTerm.trim().toLowerCase();
//     if (!term) {
//       setFilteredData([]);
//       return;
//     }

//     // Save search term to history if new
//     setHistory((prev) => (term && !prev.includes(term) ? [term, ...prev].slice(0, 10) : prev));

//     // Filter by category or keyword
//     const results = allData.filter(
//       (w) =>
//         w.category.toLowerCase().includes(term) ||
//         w.jp.includes(term) ||
//         w.en.toLowerCase().includes(term) ||
//         w.np.includes(term)
//     );

//     setFilteredData(results);
//   }, [searchTerm]);

//   return (
//     <div style={{ backgroundColor: "#fffaf0", minHeight: "100vh", padding: "2rem 1rem", fontFamily: "sans-serif" }}>
//       <h1 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold", color: "#c47f00", marginBottom: "2rem" }}>
//         🎌 Japanese Learning (नेपाली विद्यार्थीहरूका लागि)
//       </h1>

//       {/* Search History */}
//       {history.length > 0 && (
//         <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "1rem" }}>
//           {history.map((h, i) => (
//             <button
//               key={i}
//               onClick={() => setSearchTerm(h)}
//               style={{
//                 padding: "0.3rem 0.6rem",
//                 borderRadius: "0.5rem",
//                 border: "1px solid #c47f00",
//                 background: "#fff8e1",
//                 cursor: "pointer",
//                 fontSize: "0.9rem",
//               }}
//             >
//               {h}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Search Input */}
//       <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
//         <input
//           type="text"
//           placeholder="श्रेणी वा शब्द खोज्नुहोस् / Type category or word"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             width: "100%",
//             maxWidth: "600px",
//             padding: "0.75rem 1rem",
//             border: "1px solid #ccc",
//             borderRadius: "0.5rem",
//             fontSize: "1rem",
//           }}
//         />
//       </div>

//       {/* Results */}
//       <AnimatePresence>
//         <motion.div key={searchTerm} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }}>
//           {filteredData.length > 0 ? (
//             <section style={{ marginBottom: "2rem", background: "#fff", padding: "1.5rem", borderRadius: "1rem", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
//               <h2 style={{ fontSize: "1.75rem", fontWeight: 600, marginBottom: "1rem", color: "#b36e00" }}>📚 परिणाम / Results</h2>
//               <table style={{ width: "100%", borderCollapse: "collapse" }}>
//                 <thead>
//                   <tr style={{ borderBottom: "2px solid #eee" }}>
//                     <th style={{ textAlign: "left", padding: "0.5rem" }}>Japanese</th>
//                     <th style={{ textAlign: "left", padding: "0.5rem" }}>English</th>
//                     <th style={{ textAlign: "left", padding: "0.5rem" }}>नेपाली</th>
//                     <th style={{ textAlign: "left", padding: "0.5rem" }}>Category</th>
//                     <th style={{ textAlign: "left", padding: "0.5rem" }}>Type</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredData.map((w, i) => (
//                     <tr key={i} style={{ borderBottom: "1px solid #f0f0f0" }}>
//                       <td style={{ padding: "0.5rem" }}>{w.jp}</td>
//                       <td style={{ padding: "0.5rem" }}>{w.en}</td>
//                       <td style={{ padding: "0.5rem" }}>{w.np}</td>
//                       <td style={{ padding: "0.5rem" }}>{w.category}</td>
//                       <td style={{ padding: "0.5rem" }}>{w.type}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </section>
//           ) : searchTerm ? (
//             <p style={{ textAlign: "center", color: "#777", marginTop: "2rem" }}>सामग्री फेला परेन / No results found</p>
//           ) : null}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Lessons;
// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// interface DailyEntry {
//   jp: string;
//   en: string;
//   np: string;
//   category: string;
//   type: "vocab" | "phrase" | "kanji" | "sentence";
// }

// // ---------------- Example Data ----------------
// const allData: DailyEntry[] = [
//   // Bank
//   { jp: "口座を開きたいです", en: "I want to open a bank account", np: "म बैंक खाता खोल्न चाहन्छु", category: "Bank", type: "phrase" },
//   { jp: "印鑑を持っていますか？", en: "Do you have a personal seal?", np: "तपाईंसँग निजी मुहर छ?", category: "Bank", type: "phrase" },
//   // School
//   { jp: "教室はどこですか？", en: "Where is the classroom?", np: "कक्षा कहाँ छ?", category: "School", type: "phrase" },
//   { jp: "宿題を出してください", en: "Please submit your homework", np: "कृपया गृहकार्य बुझाउनुहोस्", category: "School", type: "phrase" },
//   // Hospital
//   { jp: "頭が痛いです", en: "I have a headache", np: "मलाई टाउको दुख्छ", category: "Hospital", type: "phrase" },
//   { jp: "保険証を見せてください", en: "Please show your insurance card", np: "कृपया बीमा कार्ड देखाउनुहोस्", category: "Hospital", type: "phrase" },
//   // Police
//   { jp: "財布をなくしました", en: "I lost my wallet", np: "मैले वालेट हराएँ", category: "Police", type: "phrase" },
//   { jp: "助けてください", en: "Please help me", np: "कृपया मद्दत गर्नुहोस्", category: "Police", type: "phrase" },
//   // Airport
//   { jp: "搭乗券を見せてください", en: "Please show your boarding pass", np: "कृपया बोर्डिङ पास देखाउनुहोस्", category: "Airport", type: "phrase" },
//   { jp: "荷物はどこで受け取りますか？", en: "Where do I collect my luggage?", np: "मेरो सामान कहाँ लिनु पर्छ?", category: "Airport", type: "phrase" },
//   // Supermarket
//   { jp: "この野菜はいくらですか？", en: "How much is this vegetable?", np: "यो तरकारी कति हो?", category: "Supermarket", type: "phrase" },
//   { jp: "袋は必要ですか？", en: "Do you need a bag?", np: "तपाईँलाई झोला चाहिन्छ?", category: "Supermarket", type: "phrase" },
//   // Weather
//   { jp: "今日は暑いです", en: "It’s hot today", np: "आज तातो छ", category: "Weather", type: "sentence" },
//   { jp: "雨が降りそうです", en: "It looks like it will rain", np: "मौसमले पानी पर्न सक्छ जस्तो देखिन्छ", category: "Weather", type: "sentence" },
//   // Casual
//   { jp: "元気ですか？", en: "How are you?", np: "तपाईं कस्तो हुनुहुन्छ?", category: "Casual", type: "phrase" },
//   { jp: "昨日の冗談聞いた？", en: "Did you hear yesterday's joke?", np: "हिजोको मजाक सुन्नुभयो?", category: "Casual", type: "phrase" },
// ];

// // ---------------- Component ----------------
// const Lessons: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [filteredData, setFilteredData] = useState<DailyEntry[]>([]);
//   const [history, setHistory] = useState<string[]>([]);

//   useEffect(() => {
//     const term = searchTerm.trim().toLowerCase();
//     if (!term) {
//       setFilteredData([]);
//       return;
//     }

//     setHistory((prev) => (term && !prev.includes(term) ? [term, ...prev].slice(0, 10) : prev));

//     const results = allData.filter(
//       (w) =>
//         w.category.toLowerCase().includes(term) ||
//         w.jp.includes(term) ||
//         w.en.toLowerCase().includes(term) ||
//         w.np.includes(term)
//     );

//     setFilteredData(results);
//   }, [searchTerm]);

//   return (
//     <div
//       style={{
//         backgroundColor: "var(--bg)",
//         color: "var(--text)",
//         minHeight: "100vh",
//         padding: "2rem 1rem",
//         fontFamily: "sans-serif",
//         transition: "background-color 0.3s ease, color 0.3s ease",
//       }}
//     >
//       <h1
//         style={{
//           textAlign: "center",
//           fontSize: "2.5rem",
//           fontWeight: "bold",
//           color: "var(--accent)",
//           marginBottom: "2rem",
//           transition: "color 0.3s ease",
//         }}
//       >
//        Japanese Learning (नेपाली विद्यार्थीहरूका लागि)
//       </h1>

//       {/* Search History */}
//       {history.length > 0 && (
//         <div
//           style={{
//             display: "flex",
//             gap: "0.5rem",
//             justifyContent: "center",
//             flexWrap: "wrap",
//             marginBottom: "1rem",
//           }}
//         >
//           {history.map((h, i) => (
//             <button
//               key={i}
//               onClick={() => setSearchTerm(h)}
//               style={{
//                 padding: "0.3rem 0.6rem",
//                 borderRadius: "0.5rem",
//                 border: "1px solid var(--accent)",
//                 background: "var(--panel)",
//                 color: "var(--text)",
//                 cursor: "pointer",
//                 fontSize: "0.9rem",
//                 transition: "background-color 0.3s ease, color 0.3s ease, border 0.3s ease",
//               }}
//             >
//               {h}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Search Input */}
//       <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
//         <input
//           type="text"
//           placeholder="श्रेणी वा शब्द खोज्नुहोस् / Type category or word"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             width: "100%",
//             maxWidth: "600px",
//             padding: "0.75rem 1rem",
//             border: "1px solid var(--border)",
//             borderRadius: "0.5rem",
//             fontSize: "1rem",
//             backgroundColor: "var(--panel)",
//             color: "var(--text)",
//             transition: "background-color 0.3s ease, color 0.3s ease, border 0.3s ease",
//           }}
//         />
//       </div>

//       {/* Results */}
//       <AnimatePresence>
//         <motion.div
//           key={searchTerm}
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -15 }}
//           transition={{ duration: 0.3 }}
//         >
//           {filteredData.length > 0 ? (
//             <section
//               style={{
//                 marginBottom: "2rem",
//                 background: "var(--panel)",
//                 padding: "1.5rem",
//                 borderRadius: "1rem",
//                 boxShadow: "var(--shadow)",
//                 transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
//               }}
//             >
//               <h2
//                 style={{
//                   fontSize: "1.75rem",
//                   fontWeight: 600,
//                   marginBottom: "1rem",
//                   color: "var(--accent)",
//                   transition: "color 0.3s ease",
//                 }}
//               >
//                 📚 परिणाम / Results
//               </h2>
//               <table style={{ width: "100%", borderCollapse: "collapse" }}>
//                 <thead>
//                   <tr style={{ borderBottom: "2px solid var(--border)" }}>
//                     <th style={{ textAlign: "left", padding: "0.5rem" }}>Japanese</th>
//                     <th style={{ textAlign: "left", padding: "0.5rem" }}>English</th>
//                     <th style={{ textAlign: "left", padding: "0.5rem" }}>नेपाली</th>
//                     <th style={{ textAlign: "left", padding: "0.5rem" }}>Category</th>
//                     <th style={{ textAlign: "left", padding: "0.5rem" }}>Type</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredData.map((w, i) => (
//                     <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
//                       <td style={{ padding: "0.5rem" }}>{w.jp}</td>
//                       <td style={{ padding: "0.5rem" }}>{w.en}</td>
//                       <td style={{ padding: "0.5rem" }}>{w.np}</td>
//                       <td style={{ padding: "0.5rem" }}>{w.category}</td>
//                       <td style={{ padding: "0.5rem" }}>{w.type}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </section>
//           ) : searchTerm ? (
//             <p style={{ textAlign: "center", color: "var(--text)", opacity: 0.7, marginTop: "2rem" }}>
//               सामग्री फेला परेन / No results found
//             </p>
//           ) : null}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Lessons;
"use client";

import { useMemo, useState } from "react";
import styles from "./lessons.module.css";
import jlptKanji from "../../data/jlpt-kanji.json";

type ExampleEntry = {
  written: string;
  reading: string;
  meaning: string;
};

type DatasetEntry = {
  kanji: string;
  jlpt: number | null;
  grade: number | null;
  strokeCount: number | null;
  meanings: string[];
  kunReadings: string[];
  onReadings: string[];
  unicode: string;
  examples: ExampleEntry[];
};

const levelMeta = [
  {
    slug: "n5",
    label: "N5",
    name: "JLPT N5",
    description:
      "Foundation kanji you meet in tickets, menus, and classroom instructions. Mastering these removes fear of daily signage.",
    badgeColor: "#fef3c7",
    badgeText: "#b45309",
    focus: ["Numbers & time", "School life", "Daily places"],
  },
  {
    slug: "n4",
    label: "N4",
    name: "JLPT N4",
    description:
      "Story-driven kanji that appear in diaries, work chats, and travel logs. They connect basic reading to real community life.",
    badgeColor: "#e0f2fe",
    badgeText: "#0369a1",
    focus: ["Work & transport", "Feelings", "Schedules"],
  },
  {
    slug: "n3",
    label: "N3",
    name: "JLPT N3",
    description:
      "Bridge-level kanji that show up in campus notices, government paperwork, and senpai feedback. They turn survival reading into confident comprehension.",
    badgeColor: "#e0e7ff",
    badgeText: "#4338ca",
    focus: ["Campus work", "City admin", "Travel diaries"],
  },
  {
    slug: "n2",
    label: "N2",
    name: "JLPT N2",
    description:
      "Professional kanji you need for job hunting, formal messaging, and long-form news. Essential for internships and office communication.",
    badgeColor: "#fee2e2",
    badgeText: "#b91c1c",
    focus: ["Business chat", "News & media", "Reports"],
  },
  {
    slug: "n1",
    label: "N1",
    name: "JLPT N1",
    description:
      "Native-level kanji pulled from research papers, policy briefs, and high-context novels. Complete this set to access any Japanese source.",
    badgeColor: "#f3e8ff",
    badgeText: "#7e22ce",
    focus: ["Academia", "Legal & policy", "Opinion pieces"],
  },
] as const;

type LevelSlug = (typeof levelMeta)[number]["slug"];

type KanjiDataset = Partial<Record<LevelSlug, DatasetEntry[]>>;

type AugmentedEntry = DatasetEntry & {
  level: LevelSlug;
  displayLevel: string;
};

const numberFormatter = new Intl.NumberFormat("en-US");

const dataset = jlptKanji as KanjiDataset;
const allKanji: AugmentedEntry[] = levelMeta.flatMap((meta) =>
  (dataset[meta.slug] ?? []).map((item) => ({
    ...item,
    level: meta.slug,
    displayLevel: meta.label,
  }))
);

const highlightCards = [
  {
    emoji: "🧠",
    title: "Chunked Learning",
    text: "Group kanji by shared radicals and repeat with spaced intervals for better recall.",
  },
  {
    emoji: "📝",
    title: "Dual Translation",
    text: "Write the Japanese sentence, then Nepalese and English to anchor the context.",
  },
  {
    emoji: "🎧",
    title: "Shadowing",
    text: "Read the example sentences aloud to match rhythm and improve pronunciation.",
  },
  {
    emoji: "📅",
    title: "Micro Goals",
    text: "Master 3 kanji per day and review every Sunday for long-term retention.",
  },
];

const strokeFilters = [
  { id: "all", label: "All strokes" },
  { id: "tiny", label: "1–5", min: 1, max: 5 },
  { id: "short", label: "6–10", min: 6, max: 10 },
  { id: "mid", label: "11–15", min: 11, max: 15 },
  { id: "long", label: "16+", min: 16, max: 99 },
];

const studyTips = [
  {
    title: "1. Visualize Radicals",
    text: "Highlight the repeating pieces (氵, 扌, 宀) to decode meaning faster during exams.",
  },
  {
    title: "2. Speak & Write",
    text: "Read the sentence aloud, then copy it by hand. Dual activity locks the kanji in memory.",
  },
  {
    title: "3. Context Review",
    text: "Use the example situations (school, work, travel) when talking to teachers or senpai.",
  },
  {
    title: "4. Layered Reading",
    text: "For N3+ passages, skim first, then annotate grammar and kanji tone on a second pass to mimic exam timing.",
  },
  {
    title: "5. Topic Bundles",
    text: "Group the new N2/N1 kanji by news themes (economy, society, policy) so you can retell each story in Nepali and English.",
  },
];

const Lessons = () => {
  const [query, setQuery] = useState("");
  const [activeLevels, setActiveLevels] = useState<LevelSlug[]>(
    levelMeta.map((meta) => meta.slug)
  );
  const [strokeFilter, setStrokeFilter] = useState("all");

  const filteredKanji = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const filterMeta = strokeFilters.find((item) => item.id === strokeFilter);

    return allKanji.filter((entry) => {
      if (!activeLevels.includes(entry.level)) {
        return false;
      }

      if (filterMeta && filterMeta.id !== "all" && entry.strokeCount) {
        const { min = 0, max = 999 } = filterMeta;
        if (entry.strokeCount < min || entry.strokeCount > max) {
          return false;
        }
      }

      if (!normalizedQuery) {
        return true;
      }

      const searchable = [
        entry.kanji,
        entry.meanings.join(" "),
        entry.kunReadings.join(" "),
        entry.onReadings.join(" "),
        entry.examples.map((ex) => `${ex.written} ${ex.meaning}`).join(" "),
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(normalizedQuery);
    });
  }, [query, activeLevels, strokeFilter]);

  const totalExamples = useMemo(
    () => allKanji.reduce((sum, entry) => sum + entry.examples.length, 0),
    []
  );

  const toggleLevel = (level: LevelSlug) => {
    setActiveLevels((prev) => {
      if (prev.includes(level)) {
        if (prev.length === 1) return prev; // keep at least one level active
        return prev.filter((item) => item !== level);
      }
      return [...prev, level];
    });
  };

  const heroStats = [
    { label: "Total Kanji", value: numberFormatter.format(allKanji.length) },
    { label: "Usage Samples", value: numberFormatter.format(totalExamples) },
    ...levelMeta.map((meta) => ({
      label: `${meta.label} Set`,
      value: numberFormatter.format((dataset[meta.slug] ?? []).length),
    })),
  ];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.heroBadge}>N5 → N1 Kanji Journey</span>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Build confident reading skills step by step.
          </h1>
          <p className={styles.heroSubtitle}>
            नेपालबाट जापानमा आएका विद्यार्थीका लागि तयार पारिएको पठाइ
            मार्गदर्शिका। Memorize essential kanji with examples you can speak,
            write, and use at school or part-time work.
          </p>
          <div className={styles.heroStats}>
            {heroStats.map((stat) => (
              <div key={stat.label} className={styles.statBlock}>
                <span className={styles.statLabel}>{stat.label}</span>
                <span className={styles.statValue}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.highlights}>
        {highlightCards.map((card) => (
          <article key={card.title} className={styles.highlightCard}>
            <div className={styles.highlightEmoji}>{card.emoji}</div>
            <h3 className={styles.highlightTitle}>{card.title}</h3>
            <p className={styles.highlightText}>{card.text}</p>
          </article>
        ))}
      </section>

      <section className={styles.explorerSection}>
        <div className={styles.explorerHeader}>
          <div>
            <h2 className={styles.levelTitle}>Kanji Explorer</h2>
            <p className={styles.levelDescription}>
              Filter the full JLPT N5–N1 set, search by English meaning,
              readings, or sample word, then add the kanji to today’s study
              deck.
            </p>
          </div>
          <span className={styles.resultBadge}>
            {filteredKanji.length} / {allKanji.length} kanji
          </span>
        </div>

        <div className={styles.toolbar}>
          <label className={styles.searchBox}>
            <span className={styles.searchHint}>Search</span>
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="例: travel, べんきょう, 日"
            />
          </label>

          <div className={styles.filterGroup}>
            {levelMeta.map((level) => (
              <button
                key={level.slug}
                type="button"
                className={`${styles.filterChip} ${
                  activeLevels.includes(level.slug)
                    ? styles.filterChipActive
                    : ""
                }`}
                onClick={() => toggleLevel(level.slug)}
              >
                {level.label}
              </button>
            ))}
          </div>

          <div className={styles.filterGroup}>
            {strokeFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={`${styles.filterChip} ${
                  strokeFilter === filter.id ? styles.filterChipActive : ""
                }`}
                onClick={() => setStrokeFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {filteredKanji.length === 0 ? (
          <div className={styles.emptyState}>
            <p>Nothing matched that search. Try clearing one of the filters.</p>
          </div>
        ) : (
          <div className={styles.kanjiGrid}>
            {filteredKanji.map((item) => (
              <article
                key={`${item.level}-${item.kanji}`}
                className={styles.kanjiCard}
              >
                <div className={styles.cardHeader}>
                  <div>
                    <div className={styles.kanjiCharacter}>{item.kanji}</div>
                    <div className={styles.meaning}>
                      {item.meanings.slice(0, 3).join(", ")}
                    </div>
                  </div>
                  <span className={styles.cardTag}>
                    {item.displayLevel} • {item.strokeCount ?? "?"}画
                  </span>
                </div>

                <div className={styles.readingRow}>
                  <span className={styles.readingLabel}>Onyomi</span>
                  <span className={styles.readingValue}>
                    {item.onReadings.length
                      ? item.onReadings.join(" ・ ")
                      : "—"}
                  </span>
                </div>
                <div className={styles.readingRow}>
                  <span className={styles.readingLabel}>Kunyomi</span>
                  <span className={styles.readingValue}>
                    {item.kunReadings.length
                      ? item.kunReadings.join(" ・ ")
                      : "—"}
                  </span>
                </div>

                {item.examples.length > 0 && (
                  <div className={styles.exampleBlock}>
                    {item.examples.map((example) => (
                      <div
                        key={`${item.kanji}-${example.written}`}
                        className={styles.exampleLine}
                      >
                        <div className={styles.exampleHeader}>
                          <span className={styles.exampleJp}>
                            {example.written}
                          </span>
                          <span className={styles.exampleReading}>
                            {example.reading}
                          </span>
                        </div>
                        <p className={styles.exampleEn}>{example.meaning}</p>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </section>

      {levelMeta.map((level) => {
        const levelData = dataset[level.slug] ?? [];
        if (!levelData.length) {
          return null;
        }

        const avgStrokes = levelData.length
          ? Math.round(
              levelData.reduce(
                (sum, entry) => sum + (entry.strokeCount || 0),
                0
              ) / levelData.length
            )
          : 0;
        const preview = levelData.slice(0, 6);

        return (
          <section key={level.slug} className={styles.levelSection}>
            <div className={styles.levelCard}>
              <div className={styles.levelHeader}>
                <div>
                  <h2 className={styles.levelTitle}>{level.name}</h2>
                  <p className={styles.levelDescription}>{level.description}</p>
                </div>
                <span
                  className={styles.levelBadge}
                  style={{
                    backgroundColor: level.badgeColor,
                    color: level.badgeText,
                  }}
                >
                  {levelData.length} kanji • avg {avgStrokes || "—"}画
                </span>
              </div>

              <ul className={styles.focusList}>
                {level.focus.map((item) => (
                  <li key={`${level.slug}-${item}`}>{item}</li>
                ))}
              </ul>

              <div className={styles.previewGrid}>
                {preview.map((item) => (
                  <div
                    key={`${level.slug}-${item.kanji}`}
                    className={styles.previewCard}
                  >
                    <div className={styles.previewKanji}>{item.kanji}</div>
                    <p>{item.meanings[0] ?? ""}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className={styles.studyTips}>
        {studyTips.map((tip) => (
          <div key={tip.title}>
            <h3 className={styles.tipTitle}>{tip.title}</h3>
            <p className={styles.tipText}>{tip.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Lessons;