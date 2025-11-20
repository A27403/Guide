
// "use client";
// import React, { useState } from "react";

// // ✅ Reusable Map Component
// const AddressWithMap = ({
//   address,
//   height = 200,
// }: {
//   address: string;
//   height?: number;
// }) => {
//   const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
//     address
//   )}&output=embed`;
//   return (
//     <div style={{ marginTop: "0.5rem" }}>
//       <p style={{ fontWeight: 500 }}>{address}</p>
//       <iframe
//         src={mapUrl}
//         width="100%"
//         height={height}
//         loading="lazy"
//         style={{ border: 0, borderRadius: "12px", marginTop: "0.3rem" }}
//       ></iframe>
//     </div>
//   );
// };

// // ✅ Locations
// const locations = {
//   Banks: [
//     { name: "Japan Post Bank (JP Bank) Naha Branch", address: "〒900-8799 沖縄県那覇市旭町116−37" },
//     { name: "Okinawa Bank Head Office", address: "〒900-0015 沖縄県那覇市久茂地3丁目10−1" },
//     { name: "Bank of the Ryukyus", address: "〒900-0015 沖縄県那覇市久茂地1丁目11−1" },
//   ],
//   Transport: [
//     { name: "Naha Bus Terminal", address: "〒900-0021 沖縄県那覇市泉崎1丁目20−1" },
//     { name: "Asahibashi Monorail Station", address: "〒900-0029 沖縄県那覇市旭町" },
//     { name: "Miebashi Monorail Station", address: "〒900-0016 沖縄県那覇市前島2丁目" },
//   ],
//   Emergency: [
//     { name: "Naha City Hospital", address: "〒902-0076 沖縄県那覇市与儀1丁目3−21" },
//     { name: "Okinawa Prefectural Police Headquarters", address: "〒900-0021 沖縄県那覇市泉崎1丁目2−2" },
//   ],
//   Embassy: [
//     { name: "Embassy of Nepal in Tokyo", address: "〒108-0074 東京都港区高輪4丁目17−23" },
//     { name: "Honorary Consulate of Nepal in Okinawa", address: "〒900-0015 沖縄県那覇市久茂地2丁目3−15" },
//   ],
//   Restaurants: [
//     { name: "Nepali Chulo Restaurant (Tokyo)", address: "〒169-0073 東京都新宿区百人町1丁目19−13" },
//     { name: "Everest Kitchen Okinawa", address: "〒901-0152 沖縄県那覇市小禄1丁目1−1" },
//     { name: "Himalayan Curry House Tokyo", address: "〒160-0023 東京都新宿区西新宿7丁目8−11" },
//   ],
// };

// export default function SurvivalGuide() {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [searchQuery, setSearchQuery] = useState<string>("");

//   // ✅ Map search query to categories
//   const searchToCategory = (query: string) => {
//     const q = query.toLowerCase();
//     if (q.includes("bank")) return "Banks";
//     if (q.includes("restaurant") || q.includes("food") || q.includes("curry") || q.includes("nepali")) return "Restaurants";
//     if (q.includes("police") || q.includes("hospital") || q.includes("emergency")) return "Emergency";
//     if (q.includes("transport") || q.includes("station") || q.includes("bus") || q.includes("train")) return "Transport";
//     if (q.includes("embassy") || q.includes("consulate")) return "Embassy";
//     return null;
//   };

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     const category = searchToCategory(searchQuery);
//     setSelectedCategory(category);
//   };

//   return (
//     <div style={{ padding: "1rem", backgroundColor: "#fffaf0", minHeight: "100vh" }}>
//       <h1 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold", color: "#c47f00", marginBottom: "2rem" }}>
//        Survival Guide for Students in Japan
//       </h1>

//       {/* 🔹 Search bar */}
//       <form onSubmit={handleSearch} style={{ display: "flex", justifyContent: "center", marginBottom: "2rem", gap: "0.5rem" }}>
//         <input
//           type="text"
//           placeholder="Search category (e.g., bank, restaurant, police)"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           style={{
//             padding: "0.6rem 1rem",
//             borderRadius: "8px",
//             border: "1px solid #ccc",
//             width: "300px",
//             fontSize: "1rem",
//           }}
//         />
//         <button
//           type="submit"
//           style={{
//             background: "#2563eb",
//             color: "#fff",
//             border: "none",
//             borderRadius: "8px",
//             padding: "0.6rem 1.2rem",
//             cursor: "pointer",
//           }}
//         >
//           Search
//         </button>
//       </form>

//       {/* 🔹 Clickable categories */}
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center", marginBottom: "2rem" }}>
//         {Object.keys(locations).map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
//             style={{
//               padding: "0.5rem 1rem",
//               borderRadius: "8px",
//               border: "1px solid #b36e00",
//               backgroundColor: selectedCategory === cat ? "#b36e00" : "#fff",
//               color: selectedCategory === cat ? "#fff" : "#b36e00",
//               cursor: "pointer",
//               fontWeight: 500,
//             }}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* 🔹 Show maps dynamically */}
//       {selectedCategory ? (
//         <section style={{ marginTop: "1rem" }}>
//           <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem", color: "#b36e00" }}>
//             {selectedCategory} Locations
//           </h3>
//           {locations[selectedCategory as keyof typeof locations].map((loc, idx) => (
//             <div key={idx} style={{ marginBottom: "1.5rem" }}>
//               <strong>{loc.name}</strong>
//               <AddressWithMap address={loc.address} height={200} />
//             </div>
//           ))}
//         </section>
//       ) : searchQuery && (
//         <p style={{ textAlign: "center", color: "#777" }}>No results found for "{searchQuery}"</p>
//       )}

//       {/* 🔹 Other Guide Info */}
//       <section style={{ marginTop: "2.5rem" }}>
//         <h3>🏠 Residence Registration / 住民登録</h3>
//         <p>
//           Within 14 days after arriving, visit your local city or ward office to register your residence (住民登録 / じゅうみんとうろく).
//         </p>

//         <h3>💳 Opening a Bank Account / 銀行口座</h3>
//         <p>
//           Bring your residence card and student ID. Major banks include JP Bank and local banks like Okinawa Bank.
//         </p>

//         <h3>🚆 Public Transport / 公共交通機関</h3>
//         <p>
//           Use IC cards like Suica or OKICA for easy travel on buses and trains.
//         </p>

//         <h3>🚨 Emergency Contacts / 緊急連絡先</h3>
//         <ul>
//           <li>Police (警察): 110</li>
//           <li>Ambulance / Fire (救急・消防): 119</li>
//           <li>Japan Helpline (English): 0570-000-911</li>
//         </ul>

//         <h3>🗑️ Garbage Separation / ごみの分別</h3>
//         <p>
//           Separate trash properly: burnable, non-burnable, and recyclable. Follow your city’s collection schedule.
//         </p>
//       </section>
//     </div>
//   );
// }
// "use client";
// import React, { useState } from "react";

// // Reusable Map Component
// const AddressWithMap = ({
//   address,
//   height = 200,
// }: {
//   address: string;
//   height?: number;
// }) => {
//   const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
//     address
//   )}&output=embed`;
//   return (
//     <div style={{ marginTop: "0.5rem" }}>
//       <p style={{ fontWeight: 500, color: "var(--text)" }}>{address}</p>
//       <iframe
//         src={mapUrl}
//         width="100%"
//         height={height}
//         loading="lazy"
//         style={{
//           border: 0,
//           borderRadius: "12px",
//           marginTop: "0.3rem",
//           backgroundColor: "var(--panel)",
//         }}
//       ></iframe>
//     </div>
//   );
// };

// // Locations Data
// const locations = {
//   Banks: [
//     { name: "Japan Post Bank (JP Bank) Naha Branch", address: "〒900-8799 沖縄県那覇市旭町116−37" },
//     { name: "Okinawa Bank Head Office", address: "〒900-0015 沖縄県那覇市久茂地3丁目10−1" },
//     { name: "Bank of the Ryukyus", address: "〒900-0015 沖縄県那覇市久茂地1丁目11−1" },
//   ],
//   Transport: [
//     { name: "Naha Bus Terminal", address: "〒900-0021 沖縄県那覇市泉崎1丁目20−1" },
//     { name: "Asahibashi Monorail Station", address: "〒900-0029 沖縄県那覇市旭町" },
//     { name: "Miebashi Monorail Station", address: "〒900-0016 沖縄県那覇市前島2丁目" },
//   ],
//   Emergency: [
//     { name: "Naha City Hospital", address: "〒902-0076 沖縄県那覇市与儀1丁目3−21" },
//     { name: "Okinawa Prefectural Police Headquarters", address: "〒900-0021 沖縄県那覇市泉崎1丁目2−2" },
//   ],
//   Embassy: [
//     { name: "Embassy of Nepal in Tokyo", address: "〒108-0074 東京都港区高輪4丁目17−23" },
//     { name: "Honorary Consulate of Nepal in Okinawa", address: "〒900-0015 沖縄県那覇市久茂地2丁目3−15" },
//   ],
//   Restaurants: [
//     { name: "Nepali Chulo Restaurant (Tokyo)", address: "〒169-0073 東京都新宿区百人町1丁目19−13" },
//     { name: "Everest Kitchen Okinawa", address: "〒901-0152 沖縄県那覇市小禄1丁目1−1" },
//     { name: "Himalayan Curry House Tokyo", address: "〒160-0023 東京都新宿区西新宿7丁目8−11" },
//   ],
// };

// export default function SurvivalGuide() {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [searchQuery, setSearchQuery] = useState<string>("");

//   const searchToCategory = (query: string) => {
//     const q = query.toLowerCase();
//     if (q.includes("bank")) return "Banks";
//     if (q.includes("restaurant") || q.includes("food") || q.includes("curry") || q.includes("nepali")) return "Restaurants";
//     if (q.includes("police") || q.includes("hospital") || q.includes("emergency")) return "Emergency";
//     if (q.includes("transport") || q.includes("station") || q.includes("bus") || q.includes("train")) return "Transport";
//     if (q.includes("embassy") || q.includes("consulate")) return "Embassy";
//     return null;
//   };

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     const category = searchToCategory(searchQuery);
//     setSelectedCategory(category);
//   };

//   return (
//     <div
//       style={{
//         padding: "1rem",
//         backgroundColor: "var(--bg)",
//         color: "var(--text)",
//         minHeight: "100vh",
//         transition: "background-color 0.3s ease, color 0.3s ease",
//         fontFamily: "sans-serif",
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
//         Survival Guide for Students in Japan
//       </h1>

//       {/* Search */}
//       <form
//         onSubmit={handleSearch}
//         style={{ display: "flex", justifyContent: "center", marginBottom: "2rem", gap: "0.5rem" }}
//       >
//         <input
//           type="text"
//           placeholder="Search category (bank, restaurant, police...)"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           style={{
//             padding: "0.6rem 1rem",
//             borderRadius: "8px",
//             border: "1px solid var(--border)",
//             width: "300px",
//             fontSize: "1rem",
//             backgroundColor: "var(--panel)",
//             color: "var(--text)",
//             transition: "background-color 0.3s ease, color 0.3s ease, border 0.3s ease",
//           }}
//         />
//         <button
//           type="submit"
//           style={{
//             background: "var(--accent)",
//             color: "#fff",
//             border: "none",
//             borderRadius: "8px",
//             padding: "0.6rem 1.2rem",
//             cursor: "pointer",
//           }}
//         >
//           Search
//         </button>
//       </form>

//       {/* Category buttons */}
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center", marginBottom: "2rem" }}>
//         {Object.keys(locations).map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
//             style={{
//               padding: "0.5rem 1rem",
//               borderRadius: "8px",
//               border: `1px solid var(--accent)`,
//               backgroundColor: selectedCategory === cat ? "var(--accent)" : "var(--panel)",
//               color: selectedCategory === cat ? "#fff" : "var(--text)",
//               cursor: "pointer",
//               fontWeight: 500,
//               transition: "background-color 0.3s ease, color 0.3s ease",
//             }}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Maps */}
//       {selectedCategory ? (
//         <section style={{ marginTop: "1rem" }}>
//           <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem", color: "var(--accent)" }}>
//             {selectedCategory} Locations
//           </h3>
//           {locations[selectedCategory as keyof typeof locations].map((loc, idx) => (
//             <div key={idx} style={{ marginBottom: "1.5rem" }}>
//               <strong style={{ color: "var(--text)" }}>{loc.name}</strong>
//               <AddressWithMap address={loc.address} height={200} />
//             </div>
//           ))}
//         </section>
//       ) : searchQuery && (
//         <p style={{ textAlign: "center", color: "var(--text)", opacity: 0.7 }}>
//           No results found for "{searchQuery}"
//         </p>
//       )}

//       {/* Other Guide */}
//       <section style={{ marginTop: "2.5rem" }}>
//         <h3 style={{ color: "var(--accent)" }}>🏠 Residence Registration / 住民登録</h3>
//         <p>Within 14 days after arriving, visit your local city or ward office to register your residence.</p>

//         <h3 style={{ color: "var(--accent)" }}>💳 Opening a Bank Account / 銀行口座</h3>
//         <p>Bring your residence card and student ID. Major banks include JP Bank and local banks like Okinawa Bank.</p>

//         <h3 style={{ color: "var(--accent)" }}>🚆 Public Transport / 公共交通機関</h3>
//         <p>Use IC cards like Suica or OKICA for easy travel on buses and trains.</p>

//         <h3 style={{ color: "var(--accent)" }}>🚨 Emergency Contacts / 緊急連絡先</h3>
//         <ul>
//           <li>Police (警察): 110</li>
//           <li>Ambulance / Fire (救急・消防): 119</li>
//           <li>Japan Helpline (English): 0570-000-911</li>
//         </ul>

//         <h3 style={{ color: "var(--accent)" }}>🗑️ Garbage Separation / ごみの分別</h3>
//         <p>Separate trash properly: burnable, non-burnable, and recyclable. Follow your city’s collection schedule.</p>
//       </section>
//     </div>
//   );
// }
// "use client";
// import React, { useState } from "react";

// // Reusable Map Component
// const AddressWithMap = ({ address, height = 200 }) => {
//   const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
//     address
//   )}&output=embed`;

//   return (
//     <div className="mt-2">
//       <p className="font-medium text-[var(--text)]">{address}</p>
//       <iframe
//         src={mapUrl}
//         width="100%"
//         height={height}
//         loading="lazy"
//         className="border-0 rounded-xl mt-1 bg-[var(--panel)]"
//       ></iframe>
//     </div>
//   );
// };

// // Locations Data
// const locations = {
//   Banks: [
//     { name: "Japan Post Bank (JP Bank) Naha Branch", address: "〒900-8799 沖縄県那覇市旭町116−37" },
//     { name: "Okinawa Bank Head Office", address: "〒900-0015 沖縄県那覇市久茂地3丁目10−1" },
//     { name: "Bank of the Ryukyus", address: "〒900-0015 沖縄県那覇市久茂地1丁目11−1" },
//   ],
//   Transport: [
//     { name: "Naha Bus Terminal", address: "〒900-0021 沖縄県那覇市泉崎1丁目20−1" },
//     { name: "Asahibashi Monorail Station", address: "〒900-0029 沖縄県那覇市旭町" },
//     { name: "Miebashi Monorail Station", address: "〒900-0016 沖縄県那覇市前島2丁目" },
//   ],
//   Emergency: [
//     { name: "Naha City Hospital", address: "〒902-0076 沖縄県那覇市与儀1丁目3−21" },
//     { name: "Okinawa Prefectural Police Headquarters", address: "〒900-0021 沖縄県那覇市泉崎1丁目2−2" },
//   ],
//   Embassy: [
//     { name: "Embassy of Nepal in Tokyo", address: "〒108-0074 東京都港区高輪4丁目17−23" },
//     { name: "Honorary Consulate of Nepal in Okinawa", address: "〒900-0015 沖縄県那覇市久茂地2丁目3−15" },
//   ],
//   Restaurants: [
//     { name: "Nepali Chulo Restaurant (Tokyo)", address: "〒169-0073 東京都新宿区百人町1丁目19−13" },
//     { name: "Everest Kitchen Okinawa", address: "〒901-0152 沖縄県那覇市小禄1丁目1−1" },
//     { name: "Himalayan Curry House Tokyo", address: "〒160-0023 東京都新宿区西新宿7丁目8−11" },
//   ],
// };

// export default function SurvivalGuide() {
//   const [expandedLocation, setExpandedLocation] = useState(null);
//   const [expandedSection, setExpandedSection] = useState(null);
//   const [lang, setLang] = useState("en");

//   const t = {
//     en: {
//       title: "Survival Guide for Students in Japan",
//       residence: "Residence Registration / 住民登録",
//       residenceDesc: "Within 14 days after arriving, visit your local city or ward office to register your residence.",
//       bank: "Opening a Bank Account / 銀行口座",
//       bankDesc: "Bring your residence card and student ID. Major banks include JP Bank and Okinawa Bank.",
//       transport: "Public Transport / 公共交通機関",
//       transportDesc: "Use IC cards like Suica or OKICA for easy travel on buses and trains.",
//       emergency: "Emergency Contacts / 緊急連絡先",
//       garbage: "Garbage Separation / ごみの分別",
//     },
//     jp: {
//       title: "日本での学生生活ガイド",
//       residence: "住民登録 / Residence Registration",
//       residenceDesc: "到着後14日以内に市役所または区役所で住民登録を行ってください。",
//       bank: "銀行口座の開設 / Opening a Bank Account",
//       bankDesc: "在留カードと学生証を持参してください。主要銀行はゆうちょ銀行や沖縄銀行です。",
//       transport: "公共交通機関 / Public Transport",
//       transportDesc: "Suica や OKICA などのICカードを使うと便利です。",
//       emergency: "緊急連絡先 / Emergency Contacts",
//       garbage: "ごみの分別 / Garbage Separation",
//     },
//     np: {
//       title: "जापानमा विद्यार्थीहरूको लागि गाइड",
//       residence: "बसोबास दर्ता / 住民登録",
//       residenceDesc: "जापान आइपुगेको 14 दिनभित्र स्थानीय कार्यालयमा दर्ता गर्नुहोस्।",
//       bank: "बैंक खाता खोल्ने / 銀行口座",
//       bankDesc: "रेजिडेन्स कार्ड र छात्र परिचयपत्र ल्याउनुहोस्।",
//       transport: "सार्वजनिक यातायात / 公共交通機関",
//       transportDesc: "Suica वा OKICA कार्ड प्रयोग गरेर सजिलो यात्रा।",
//       emergency: "आपतकालीन सम्पर्क / 緊急連絡先",
//       garbage: "फोहर व्यवस्थापन / ごみの分別",
//     },
//   };

//   return (
//     <div className="p-4 bg-[var(--bg)] text-[var(--text)] min-h-screen transition-colors duration-300 font-sans">
//       {/* LANGUAGE SWITCH */}
//       <div className="flex justify-end mb-4 gap-2">
//         {['en','jp','np'].map(code => (
//           <button
//             key={code}
//             onClick={() => setLang(code)}
//             className={`px-3 py-1 rounded-lg border ${lang === code ? 'bg-[var(--accent)] text-white' : 'bg-[var(--panel)] text-[var(--text)]'}`}
//           >
//             {code.toUpperCase()}
//           </button>
//         ))}
//       </div>

//       <h1 className="text-center text-4xl font-bold text-[var(--accent)] mb-8">
//         {t[lang].title}
//       </h1>

//       {/* CATEGORY SECTIONS */}
//       {Object.keys(locations).map((cat) => (
//         <div key={cat} className="mb-6">
//           <button
//             onClick={() => setExpandedSection(expandedSection === cat ? null : cat)}
//             className="w-full flex justify-between items-center bg-[var(--panel)] border border-[var(--accent)] rounded-lg p-3 font-semibold cursor-pointer hover:opacity-80 transition"
//           >
//             {cat}
//             <span>{expandedSection === cat ? '−' : '+'}</span>
//           </button>

//           <div className={`overflow-hidden transition-all duration-500 ${expandedSection === cat ? 'max-h-screen' : 'max-h-0'}`}>
//             <div className="mt-3 pl-3 border-l-2 border-[var(--accent)] space-y-3">
//               {locations[cat].map((loc, idx) => (
//                 <div key={idx}>
//                   <button
//                     onClick={() => setExpandedLocation(expandedLocation === loc.name ? null : loc.name)}
//                     className="w-full flex justify-between text-left text-lg font-medium text-[var(--text)] cursor-pointer hover:text-[var(--accent)]"
//                   >
//                     {loc.name}
//                     <span>{expandedLocation === loc.name ? '▲' : '▼'}</span>
//                   </button>

//                   <div className={`transition-all overflow-hidden duration-500 ${expandedLocation === loc.name ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
//                     <div className="ml-2">
//                       <AddressWithMap address={loc.address} height={200} />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* TIPS */}
//       <div className="mt-10 space-y-6">
//         <details className="bg-[var(--panel)] p-4 rounded-lg">
//           <summary className="cursor-pointer text-xl font-semibold text-[var(--accent)]">{t[lang].residence}</summary>
//           <p className="mt-2">{t[lang].residenceDesc}</p>
//         </details>

//         <details className="bg-[var(--panel)] p-4 rounded-lg">
//           <summary className="cursor-pointer text-xl font-semibold text-[var(--accent)]">{t[lang].bank}</summary>
//           <p className="mt-2">{t[lang].bankDesc}</p>
//         </details>

//         <details className="bg-[var(--panel)] p-4 rounded-lg">
//           <summary className="cursor-pointer text-xl font-semibold text-[var(--accent)]">{t[lang].transport}</summary>
//           <p className="mt-2">{t[lang].transportDesc}</p>
//         </details>
//       </div>
//     </div>
//   );
// }
// "use client";
// import React, { useState, useRef, useEffect } from "react";

// /* -------------------------
//    Small helper components
//    ------------------------- */

// const PlusIcon = ({ size = 18 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
//     <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
//   </svg>
// );
// const MinusIcon = ({ size = 18 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
//     <path fill="currentColor" d="M5 11h14v2H5z" />
//   </svg>
// );
// const ChevronDown = ({ size = 16 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
//     <path fill="currentColor" d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
//   </svg>
// );
// const ChevronUp = ({ size = 16 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
//     <path fill="currentColor" d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
//   </svg>
// );

// /* -------------------------
//    Address iframe component
//    ------------------------- */

// const AddressWithMap = ({ address, height = 240 }) => {
//   const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
//     address
//   )}&output=embed`;

//   return (
//     <div
//       style={{
//         marginTop: 8,
//         borderRadius: 12,
//         overflow: "hidden",
//         boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
//       }}
//     >
//       <p style={{ fontWeight: 600, margin: 8 }}>{address}</p>
//       <div style={{ background: "var(--panel)", padding: 6 }}>
//         <iframe
//           title={`map-${address}`}
//           src={mapUrl}
//           width="100%"
//           height={height}
//           loading="lazy"
//           style={{ border: 0, borderRadius: 8, display: "block" }}
//         />
//       </div>
//     </div>
//   );
// };

// /* -------------------------
//    Collapsible: measures inner height and animates
//    ------------------------- */

// function Collapsible({ open = false, children, transition = "300ms" }) {
//   const ref = useRef(null);
//   const [maxH, setMaxH] = useState(open ? "none" : "0px");
//   const [isOpen, setIsOpen] = useState(open);

//   useEffect(() => {
//     // measure when open changes
//     const el = ref.current;
//     if (!el) return;

//     if (isOpen) {
//       // set to exact scrollHeight, then after animation ends set to 'none' so it fits content
//       const measured = el.scrollHeight;
//       setMaxH(`${measured}px`);
//       const t = setTimeout(() => setMaxH("none"), parseInt(transition) + 30);
//       return () => clearTimeout(t);
//     } else {
//       // collapsing: from 'none' -> measured px -> 0px to animate
//       const measured = el.scrollHeight;
//       // force measured value first to start the transition
//       setMaxH(`${measured}px`);
//       // next tick set to 0 to animate
//       requestAnimationFrame(() => {
//         requestAnimationFrame(() => {
//           setMaxH("0px");
//         });
//       });
//     }
//   }, [isOpen, transition]);

//   // If parent wants to toggle externally, expose setter by cloning children? Simpler: children will include setter.
//   return (
//     <div
//       style={{
//         maxHeight: maxH,
//         overflow: "hidden",
//         transition: `max-height ${transition} ease`,
//       }}
//       ref={ref}
//     >
//       {children}
//       {/* a tiny spacer so scrollHeight isn't 0 when empty */}
//       <div style={{ height: 0 }} />
//       {/* toggler control: parent manages isOpen state via returned setter */}
//       <button
//         aria-expanded={isOpen}
//         onClick={() => setIsOpen((s) => !s)}
//         style={{
//           display: "none",
//           // hidden: used only if you want an internal toggle
//         }}
//       />
//     </div>
//   );
// }

// /* -------------------------
//    CollapsibleItem: single location row with map
//    ------------------------- */

// function CollapsibleItem({ name, children, defaultOpen = false }) {
//   const contentRef = useRef(null);
//   const [open, setOpen] = useState(defaultOpen);
//   const [maxH, setMaxH] = useState(open ? "none" : "0px");
//   const transition = 240;

//   useEffect(() => {
//     const el = contentRef.current;
//     if (!el) return;
//     if (open) {
//       const h = el.scrollHeight;
//       setMaxH(`${h}px`);
//       const t = setTimeout(() => setMaxH("none"), transition + 20);
//       return () => clearTimeout(t);
//     } else {
//       const h = el.scrollHeight;
//       setMaxH(`${h}px`);
//       requestAnimationFrame(() => {
//         requestAnimationFrame(() => setMaxH("0px"));
//       });
//     }
//   }, [open]);

//   return (
//     <div style={{ marginBottom: 10 }}>
//       <button
//         onClick={() => setOpen((s) => !s)}
//         aria-expanded={open}
//         style={{
//           width: "100%",
//           textAlign: "left",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           background: "transparent",
//           border: "none",
//           padding: "8px 6px",
//           cursor: "pointer",
//           color: "var(--text)",
//           fontWeight: 600,
//         }}
//       >
//         <span>{name}</span>
//         <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
//           {open ? <ChevronUp /> : <ChevronDown />}
//         </span>
//       </button>

//       <div
//         ref={contentRef}
//         style={{
//           maxHeight: maxH,
//           overflow: "hidden",
//           transition: `max-height ${transition}ms ease, opacity ${transition}ms ease`,
//           opacity: open ? 1 : 0,
//         }}
//       >
//         <div style={{ paddingLeft: 8 }}>{children}</div>
//       </div>
//     </div>
//   );
// }

// /* -------------------------
//    Data (same as you had)
//    ------------------------- */

// const locations = {
//   Banks: [
//     { name: "Japan Post Bank (JP Bank) Naha Branch", address: "〒900-8799 沖縄県那覇市旭町116−37" },
//     { name: "Okinawa Bank Head Office", address: "〒900-0015 沖縄県那覇市久茂地3丁目10−1" },
//     { name: "Bank of the Ryukyus", address: "〒900-0015 沖縄県那覇市久茂地1丁目11−1" },
//   ],
//   Transport: [
//     { name: "Naha Bus Terminal", address: "〒900-0021 沖縄県那覇市泉崎1丁目20−1" },
//     { name: "Asahibashi Monorail Station", address: "〒900-0029 沖縄県那覇市旭町" },
//     { name: "Miebashi Monorail Station", address: "〒900-0016 沖縄県那覇市前島2丁目" },
//   ],
//   Emergency: [
//     { name: "Naha City Hospital", address: "〒902-0076 沖縄県那覇市与儀1丁目3−21" },
//     { name: "Okinawa Prefectural Police Headquarters", address: "〒900-0021 沖縄県那覇市泉崎1丁目2−2" },
//   ],
//   Embassy: [
//     { name: "Embassy of Nepal in Tokyo", address: "〒108-0074 東京都港区高輪4丁目17−23" },
//     { name: "Honorary Consulate of Nepal in Okinawa", address: "〒900-0015 沖縄県那覇市久茂地2丁目3−15" },
//   ],
//   Restaurants: [
//     { name: "Nepali Chulo Restaurant (Tokyo)", address: "〒169-0073 東京都新宿区百人町1丁目19−13" },
//     { name: "Everest Kitchen Okinawa", address: "〒901-0152 沖縄県那覇市小禄1丁目1−1" },
//     { name: "Himalayan Curry House Tokyo", address: "〒160-0023 東京都新宿区西新宿7丁目8−11" },
//   ],
// };

// /* -------------------------
//    Multi-language text
//    ------------------------- */

// const translations = {
//   en: {
//     title: "Survival Guide for Students in Japan",
//     residence: "Residence Registration",
//     residenceDesc: "Within 14 days after arriving, visit your local city or ward office to register your residence.",
//     bank: "Opening a Bank Account",
//     bankDesc: "Bring your residence card and student ID. Major banks include JP Bank and Okinawa Bank.",
//     transport: "Public Transport",
//     transportDesc: "Use IC cards like Suica or OKICA for easy travel on buses and trains.",
//     emergency: "Emergency Contacts",
//     garbage: "Garbage Separation",
//   },
//   jp: {
//     title: "日本での学生生活ガイド",
//     residence: "住民登録",
//     residenceDesc: "到着後14日以内に市役所または区役所で住民登録を行ってください。",
//     bank: "銀行口座の開設",
//     bankDesc: "在留カードと学生証を持参してください。主要銀行はゆうちょ銀行や沖縄銀行です。",
//     transport: "公共交通機関",
//     transportDesc: "Suica や OKICA などのICカードを使うと便利です。",
//     emergency: "緊急連絡先",
//     garbage: "ごみの分別",
//   },
//   np: {
//     title: "जापानमा विद्यार्थीहरूको लागि गाइड",
//     residence: "बसोबास दर्ता",
//     residenceDesc: "जापान आइपुगेको 14 दिनभित्र स्थानीय कार्यालयमा दर्ता गर्नुहोस्।",
//     bank: "बैंक खाता खोल्ने",
//     bankDesc: "रेजिडेन्स कार्ड र छात्र परिचयपत्र ल्याउनुहोस्।",
//     transport: "सार्वजनिक यातायात",
//     transportDesc: "Suica वा OKICA कार्ड प्रयोग गरेर सजिलो यात्रा।",
//     emergency: "आपतकालीन सम्पर्क",
//     garbage: "फोहर व्यवस्थापन",
//   },
// };

// /* -------------------------
//    Main component
//    ------------------------- */

// export default function SurvivalGuide() {
//   const [expandedCategory, setExpandedCategory] = useState(null);
//   const [lang, setLang] = useState("en");

//   return (
//     <div
//       style={{
//         padding: 16,
//         background: "var(--bg, #fdf8f8ff)",
//         color: "var(--text, #0b0909ff)",
//         minHeight: "100vh",
//         fontFamily: "Inter, system-ui, -apple-system, sans-serif",
//       }}
//     >
//       {/* language switch */}
//       <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginBottom: 12 }}>
//         {["en", "jp", "np"].map((code) => (
//           <button
//             key={code}
//             onClick={() => setLang(code)}
//             style={{
//               borderRadius: 8,
//               padding: "6px 10px",
//               border: "1px solid rgba(241, 238, 238, 0.08)",
//               background: lang === code ? "var(--accent, #0ea5a4)" : "var(--panel, #f3f4f6)",
//               color: lang === code ? "#fbf8f8ff" : "var(--text, #111)",
//               cursor: "pointer",
//             }}
//           >
//             {code.toUpperCase()}
//           </button>
//         ))}
//       </div>

//       <h1 style={{ textAlign: "center", fontSize: 28, fontWeight: 700, color: "var(--accent, #0ea5a4)", marginBottom: 20 }}>
//         {translations[lang].title}
//       </h1>

//       {/* categories */}
//       <div style={{ maxWidth: 900, margin: "0 auto" }}>
//         {Object.keys(locations).map((cat) => {
//           const isOpen = expandedCategory === cat;
//           return (
//             <div key={cat} style={{ marginBottom: 14 }}>
//               <button
//                 onClick={() => setExpandedCategory(isOpen ? null : cat)}
//                 aria-expanded={isOpen}
//                 style={{
//                   width: "100%",
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   padding: 12,
//                   borderRadius: 10,
//                   background: "var(--panel, #f7f9faff)",
//                   border: "1px solid rgba(0,0,0,0.06)",
//                   cursor: "pointer",
//                   fontWeight: 700,
//                 }}
//               >
//                 <span>{cat}</span>
//                 <span style={{ display: "flex", alignItems: "center" }}>{isOpen ? <MinusIcon /> : <PlusIcon />}</span>
//               </button>

//               {/* measured collapsible */}
//               <div
//                 style={{
//                   overflow: "hidden",
//                   transition: "max-height 320ms ease",
//                   maxHeight: isOpen ? "1000px" : "0px",
//                 }}
//               >
//                 <div style={{ paddingLeft: 10, borderLeft: "3px solid var(--accent, #0ea5a4)", marginTop: 10, paddingTop: 6 }}>
//                   {locations[cat].map((loc) => (
//                     <CollapsibleItem key={loc.name} name={loc.name}>
//                       <AddressWithMap address={loc.address} />
//                       {/* You can put small tips per location here */}
//                     </CollapsibleItem>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* tips */}
//       <div style={{ maxWidth: 900, margin: "28px auto 80px", display: "grid", gap: 12 }}>
//         <div style={{ background: "var(--panel, #fdfafaff)", padding: 14, borderRadius: 10 }}>
//           <strong>{translations[lang].residence}</strong>
//           <p style={{ marginTop: 8 }}>{translations[lang].residenceDesc}</p>
//         </div>

//         <div style={{ background: "var(--panel, #f8fafc)", padding: 14, borderRadius: 10 }}>
//           <strong>{translations[lang].bank}</strong>
//           <p style={{ marginTop: 8 }}>{translations[lang].bankDesc}</p>
//         </div>

//         <div style={{ background: "var(--panel, #f8fafc)", padding: 14, borderRadius: 10 }}>
//           <strong>{translations[lang].transport}</strong>
//           <p style={{ marginTop: 8 }}>{translations[lang].transportDesc}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client";
// import React, { useState, useRef, useEffect } from "react";

// /* -------------------------
//    Small helper components
//    ------------------------- */
// const PlusIcon = ({ size = 18 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
//     <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
//   </svg>
// );
// const MinusIcon = ({ size = 18 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
//     <path fill="currentColor" d="M5 11h14v2H5z" />
//   </svg>
// );
// const ChevronDown = ({ size = 16 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
//     <path fill="currentColor" d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
//   </svg>
// );
// const ChevronUp = ({ size = 16 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
//     <path fill="currentColor" d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
//   </svg>
// );

// /* -------------------------
//    Address iframe component
//    ------------------------- */
// const AddressWithMap = ({ address, height = 240 }) => {
//   const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
//     address
//   )}&output=embed`;

//   return (
//     <div
//       style={{
//         marginTop: 8,
//         borderRadius: 12,
//         overflow: "hidden",
//         boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
//       }}
//     >
//       <p style={{ fontWeight: 600, margin: 8 }}>{address}</p>
//       <div style={{ background: "var(--panel)", padding: 6 }}>
//         <iframe
//           title={`map-${address}`}
//           src={mapUrl}
//           width="100%"
//           height={height}
//           loading="lazy"
//           style={{ border: 0, borderRadius: 8, display: "block" }}
//         />
//       </div>
//     </div>
//   );
// };

// /* -------------------------
//    CollapsibleItem: single location row with map
//    ------------------------- */
// function CollapsibleItem({ name, children, defaultOpen = false }) {
//   const contentRef = useRef(null);
//   const [open, setOpen] = useState(defaultOpen);
//   const [maxH, setMaxH] = useState(open ? "none" : "0px");
//   const transition = 240;

//   useEffect(() => {
//     const el = contentRef.current;
//     if (!el) return;
//     if (open) {
//       const h = el.scrollHeight;
//       setMaxH(`${h}px`);
//       const t = setTimeout(() => setMaxH("none"), transition + 20);
//       return () => clearTimeout(t);
//     } else {
//       const h = el.scrollHeight;
//       setMaxH(`${h}px`);
//       requestAnimationFrame(() => {
//         requestAnimationFrame(() => setMaxH("0px"));
//       });
//     }
//   }, [open]);

//   return (
//     <div style={{ marginBottom: 10 }}>
//       <button
//         onClick={() => setOpen((s) => !s)}
//         aria-expanded={open}
//         style={{
//           width: "100%",
//           textAlign: "left",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           background: "transparent", // no hover color
//           border: "none",
//           padding: "8px 6px",
//           cursor: "pointer",
//           color: "var(--text)",
//           fontWeight: 600,
//         }}
//       >
//         <span>{name}</span>
//         <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
//           {open ? <ChevronUp /> : <ChevronDown />}
//         </span>
//       </button>

//       <div
//         ref={contentRef}
//         style={{
//           maxHeight: maxH,
//           overflow: "hidden",
//           transition: `max-height ${transition}ms ease, opacity ${transition}ms ease`,
//           opacity: open ? 1 : 0,
//         }}
//       >
//         <div style={{ paddingLeft: 8 }}>{children}</div>
//       </div>
//     </div>
//   );
// }

// /* -------------------------
//    Data
//    ------------------------- */
// const locations = {
//   Banks: [
//     { name: "Japan Post Bank (JP Bank) Naha Branch", address: "〒900-8799 沖縄県那覇市旭町116−37" },
//     { name: "Okinawa Bank Head Office", address: "〒900-0015 沖縄県那覇市久茂地3丁目10−1" },
//     { name: "Bank of the Ryukyus", address: "〒900-0015 沖縄県那覇市久茂地1丁目11−1" },
//   ],
//   Transport: [
//     { name: "Naha Bus Terminal", address: "〒900-0021 沖縄県那覇市泉崎1丁目20−1" },
//     { name: "Asahibashi Monorail Station", address: "〒900-0029 沖縄県那覇市旭町" },
//     { name: "Miebashi Monorail Station", address: "〒900-0016 沖縄県那覇市前島2丁目" },
//   ],
//   Emergency: [
//     { name: "Naha City Hospital", address: "〒902-0076 沖縄県那覇市与儀1丁目3−21" },
//     { name: "Okinawa Prefectural Police Headquarters", address: "〒900-0021 沖縄県那覇市泉崎1丁目2−2" },
//   ],
//   Embassy: [
//     { name: "Embassy of Nepal in Tokyo", address: "〒108-0074 東京都港区高輪4丁目17−23" },
//     { name: "Honorary Consulate of Nepal in Okinawa", address: "〒900-0015 沖縄県那覇市久茂地2丁目3−15" },
//   ],
//   Restaurants: [
//     { name: "Nepali Chulo Restaurant (Tokyo)", address: "〒169-0073 東京都新宿区百人町1丁目19−13" },
//     { name: "Everest Kitchen Okinawa", address: "〒901-0152 沖縄県那覇市小禄1丁目1−1" },
//     { name: "Himalayan Curry House Tokyo", address: "〒160-0023 東京都新宿区西新宿7丁目8−11" },
//   ],
// };

// /* -------------------------
//    Translations
//    ------------------------- */
// const translations = {
//   en: {
//     title: "Survival Guide for Students in Japan",
//     residence: "Residence Registration",
//     residenceDesc: "Within 14 days after arriving, visit your local city or ward office to register your residence.",
//     bank: "Opening a Bank Account",
//     bankDesc: "Bring your residence card and student ID. Major banks include JP Bank and Okinawa Bank.",
//     transport: "Public Transport",
//     transportDesc: "Use IC cards like Suica or OKICA for easy travel on buses and trains.",
//   },
//   jp: {
//     title: "日本での学生生活ガイド",
//     residence: "住民登録",
//     residenceDesc: "到着後14日以内に市役所または区役所で住民登録を行ってください。",
//     bank: "銀行口座の開設",
//     bankDesc: "在留カードと学生証を持参してください。主要銀行はゆうちょ銀行や沖縄銀行です。",
//     transport: "公共交通機関",
//     transportDesc: "Suica や OKICA などのICカードを使うと便利です。",
//   },
//   np: {
//     title: "जापानमा विद्यार्थीहरूको लागि गाइड",
//     residence: "बसोबास दर्ता",
//     residenceDesc: "जापान आइपुगेको 14 दिनभित्र स्थानीय कार्यालयमा दर्ता गर्नुहोस्।",
//     bank: "बैंक खाता खोल्ने",
//     bankDesc: "रेजिडेन्स कार्ड र छात्र परिचयपत्र ल्याउनुहोस्।",
//     transport: "सार्वजनिक यातायात",
//     transportDesc: "Suica वा OKICA कार्ड प्रयोग गरेर सजिलो यात्रा।",
//   },
// };

// /* -------------------------
//    Main component
//    ------------------------- */
// export default function SurvivalGuide() {
//   const [expandedCategory, setExpandedCategory] = useState(null);
//   const [lang, setLang] = useState("en");

//   return (
//     <div
//       style={{
//         padding: 16,
//         background: "var(--bg, #fdf8f8ff)",
//         color: "var(--text, #0b0909ff)",
//         minHeight: "100vh",
//         fontFamily: "Inter, system-ui, -apple-system, sans-serif",
//       }}
//     >
//       {/* language switch */}
//       {/* <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginBottom: 12 }}>
//         {["en", "jp", "np"].map((code) => (
//           <button
//             key={code}
//             onClick={() => setLang(code)}
//             style={{
//               borderRadius: 8,
//               padding: "6px 10px",
//               border: "1px solid rgba(241, 238, 238, 0.08)",
//               background: lang === code ? "var(--accent, #0ea5a4)" : "var(--panel, #f3f4f6)",
//               color: lang === code ? "#fff" : "var(--text, #111)",
//               cursor: "pointer",
//             }}
//           >
//             {code.toUpperCase()}
//           </button>
//         ))}
//       </div> */}

//       <h1
//         style={{
//           textAlign: "center",
//           fontSize: 28,
//           fontWeight: 700,
//           color: "var(--accent, #0ea5a4)",
//           marginBottom: 20,
//         }}
//       >
//         {translations[lang].title}
//       </h1>

//       {/* categories */}
//       <div style={{ maxWidth: 900, margin: "0 auto" }}>
//         {Object.keys(locations).map((cat) => {
//           const isOpen = expandedCategory === cat;
//           return (
//             <div key={cat} style={{ marginBottom: 14 }}>
//               <button
//                 onClick={() => setExpandedCategory(isOpen ? null : cat)}
//                 aria-expanded={isOpen}
//                 style={{
//                   width: "100%",
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   padding: 12,
//                   borderRadius: 10,
//                   background: "var(--panel, #f7f9faff)",
//                   border: "1px solid rgba(0,0,0,0.06)",
//                   cursor: "pointer",
//                   fontWeight: 700,
//                   color: "var(--text, #111)",
//                 }}
//               >
//                 <span>{cat}</span>
//                 <span style={{ display: "flex", alignItems: "center" }}>
//                   {isOpen ? <MinusIcon /> : <PlusIcon />}
//                 </span>
//               </button>

//               <div
//                 style={{
//                   overflow: "hidden",
//                   transition: "max-height 320ms ease",
//                   maxHeight: isOpen ? "1000px" : "0px",
//                 }}
//               >
//                 <div
//                   style={{
//                     paddingLeft: 10,
//                     borderLeft: "3px solid var(--accent, #0ea5a4)",
//                     marginTop: 10,
//                     paddingTop: 6,
//                   }}
//                 >
//                   {locations[cat].map((loc) => (
//                     <CollapsibleItem key={loc.name} name={loc.name}>
//                       <AddressWithMap address={loc.address} />
//                     </CollapsibleItem>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* tips */}
//       <div style={{ maxWidth: 900, margin: "28px auto 80px", display: "grid", gap: 12 }}>
//         <div style={{ background: "var(--panel, #fdfafaff)", padding: 14, borderRadius: 10 }}>
//           <strong>{translations[lang].residence}</strong>
//           <p style={{ marginTop: 8 }}>{translations[lang].residenceDesc}</p>
//         </div>

//         <div style={{ background: "var(--panel, #fdfafaff)", padding: 14, borderRadius: 10 }}>
//           <strong>{translations[lang].bank}</strong>
//           <p style={{ marginTop: 8 }}>{translations[lang].bankDesc}</p>
//         </div>

//         <div style={{ background: "var(--panel, #fdfafaff)", padding: 14, borderRadius: 10 }}>
//           <strong>{translations[lang].transport}</strong>
//           <p style={{ marginTop: 8 }}>{translations[lang].transportDesc}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client";
// import React, { useState } from "react";

// /* -------------------------
//    Icons
// ------------------------- */
// const PlusIcon = ({ size = 18 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24">
//     <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
//   </svg>
// );
// const MinusIcon = ({ size = 18 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24">
//     <path fill="currentColor" d="M5 11h14v2H5z" />
//   </svg>
// );

// /* -------------------------
//    Collapsible Item (for maps/info)
// ------------------------- */
// function CollapsibleItem({ name, children, defaultOpen = false }) {
//   const [open, setOpen] = useState(defaultOpen);
//   return (
//     <div style={{ marginBottom: 12 }}>
//       <button
//         onClick={() => setOpen((s) => !s)}
//         style={{
//           width: "100%",
//           textAlign: "left",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           padding: "10px 12px",
//           borderRadius: 10,
//           background: "var(--panel, #f7f9faff)",
//           border: "1px solid rgba(0,0,0,0.06)",
//           cursor: "pointer",
//           fontWeight: 700,
//           color: "var(--text, #111)",
//         }}
//       >
//         <span>{name}</span>
//         <span>{open ? <MinusIcon /> : <PlusIcon />}</span>
//       </button>

//       <div
//         style={{
//           maxHeight: open ? "1000px" : "0px",
//           overflow: "hidden",
//           transition: "max-height 0.32s ease",
//           marginTop: 6,
//         }}
//       >
//         <div style={{ padding: 10, borderLeft: "3px solid var(--accent, #0ea5a4)" }}>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* -------------------------
//    Main Component
// ------------------------- */
// export default function SurvivalGuideInfo() {
//   const infoData = [
//     { title: "Residence Registration", content: "Visit your local city or ward office within 14 days after arriving. Bring your residence card." },
//     { title: "Opening a Bank Account", content: "Bring your residence card and student ID. Major banks include JP Bank, Okinawa Bank." },
//     { title: "Public Transport", content: "Use IC cards like Suica or OKICA for buses and trains. Exact change works too." },
//     { title: "Garbage & Recycling", content: "Burnable: Mon/Thu, Non-burnable: Tue, Recyclables: Wed." },
//     { title: "Cultural Notes", content: "Remove shoes indoors, queue properly, speak softly in public transport." },
//     { title: "Emergency Numbers", content: "Police: 110, Ambulance: 119, Fire: 119." },
//   ];

//   return (
//     <div
//       style={{
//         padding: 16,
//         background: "var(--bg, #fdf8f8ff)",
//         color: "var(--text, #0b0909ff)",
//         minHeight: "100vh",
//         fontFamily: "Inter, system-ui, -apple-system, sans-serif",
//         maxWidth: 900,
//         margin: "0 auto",
//       }}
//     >
//       <h1
//         style={{
//           textAlign: "center",
//           fontSize: 28,
//           fontWeight: 700,
//           color: "var(--accent, #0ea5a4)",
//           marginBottom: 24,
//         }}
//       >
//         Student Survival Guide — Info
//       </h1>

//       {infoData.map((info, idx) => (
//         <CollapsibleItem key={idx} name={info.title}>
//           <p style={{ margin: 0 }}>{info.content}</p>
//         </CollapsibleItem>
//       ))}
//     </div>
//   );
// }
// "use client";
// import React, { useState } from "react";

// /* -------------------------
//    Icons Placeholder
// ------------------------- */
// const StepIcon = () => (
//   <span style={{ marginRight: 6 }}>📝</span>
// );

// const PlusIcon = ({ size = 18 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24">
//     <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
//   </svg>
// );
// const MinusIcon = ({ size = 18 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24">
//     <path fill="currentColor" d="M5 11h14v2H5z" />
//   </svg>
// );

// /* -------------------------
//    Collapsible Item
// ------------------------- */
// function CollapsibleItem({ name, children, defaultOpen = false }) {
//   const [open, setOpen] = useState(defaultOpen);
//   return (
//     <div style={{ marginBottom: 12 }}>
//       <button
//         onClick={() => setOpen((s) => !s)}
//         style={{
//           width: "100%",
//           textAlign: "left",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           padding: "10px 12px",
//           borderRadius: 10,
//           background: "var(--panel, #f7f9faff)",
//           border: "1px solid rgba(0,0,0,0.06)",
//           cursor: "pointer",
//           fontWeight: 700,
//           color: "var(--text, #111)",
//         }}
//       >
//         <span>{name}</span>
//         <span>{open ? <MinusIcon /> : <PlusIcon />}</span>
//       </button>

//       <div
//         style={{
//           maxHeight: open ? "1000px" : "0px",
//           overflow: "hidden",
//           transition: "max-height 0.32s ease",
//           marginTop: 6,
//         }}
//       >
//         <div style={{ padding: 10, borderLeft: "3px solid var(--accent, #0ea5a4)" }}>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* -------------------------
//    Step Data with Japanese & Romaji
// ------------------------- */
// const survivalInfo = [
//   {
//     category: "Residence Registration",
//     steps: [
//       { 
//         text: "Visit your local city or ward office within 14 days of arrival.", 
//         jp: "到着後14日以内に市役所または区役所に行ってください。",
//         romaji: "Touchakugo 14-nichi inai ni shiyakusho mata wa kuyakusho ni itte kudasai."
//       },
//       { 
//         text: "Bring your Residence Card and Passport.",
//         jp: "在留カードとパスポートを持参してください。",
//         romaji: "Zairyuu kaado to pasupooto o mozan shite kudasai."
//       },
//       { 
//         text: "Fill in the residence registration form.",
//         jp: "住民登録用紙に記入してください。",
//         romaji: "Jumin touroku youshi ni kinyuu shite kudasai."
//       }
//     ]
//   },
//   {
//     category: "Opening a Bank Account",
//     steps: [
//       { 
//         text: "Bring Residence Card, Passport, and Student ID.",
//         jp: "在留カード、パスポート、学生証を持参してください。",
//         romaji: "Zairyuu kaado, pasupooto, gakuseishou o mozan shite kudasai."
//       },
//       { 
//         text: "Ask for a student bank account if available.",
//         jp: "学生用の銀行口座がありますか？と尋ねてください。",
//         romaji: "Gakusei you no ginkou kouza ga arimasu ka? to tazunete kudasai."
//       },
//       { 
//         text: "Deposit some money to activate the account.",
//         jp: "口座を有効にするために入金してください。",
//         romaji: "Kouza o yuukou ni suru tame ni nyuukin shite kudasai."
//       }
//     ]
//   },
//   {
//     category: "Public Transport",
//     steps: [
//       { 
//         text: "Get an IC card like Suica or Pasmo for trains and buses.",
//         jp: "電車やバスのためにSuicaやPasmoなどのICカードを入手してください。",
//         romaji: "Densha ya basu no tame ni Suica ya Pasmo nado no IC kaado o nyuushu shite kudasai."
//       },
//       { 
//         text: "Check the bus/train schedule before travelling.",
//         jp: "乗車前にバスや電車の時刻表を確認してください。",
//         romaji: "Jousha mae ni basu ya densha no jikokuhyou o kakunin shite kudasai."
//       }
//     ]
//   },
//   {
//     category: "Shopping",
//     steps: [
//       { 
//         text: "Carry cash; small stores may not accept cards.",
//         jp: "現金を持ってください。小さなお店ではカードが使えない場合があります。",
//         romaji: "Genkin o motte kudasai. Chiisana omise de wa kaado ga tsukaenai baai ga arimasu."
//       },
//       { 
//         text: "Ask for a tax-free receipt if you are a foreign student.",
//         jp: "外国人学生なら免税レシートをお願いします。",
//         romaji: "Gaikokujin gakusei nara menzei reishiito o onegaishimasu."
//       }
//     ]
//   },
//   {
//     category: "Garbage & Recycling",
//     steps: [
//       { 
//         text: "Burnable: Monday & Thursday, Non-burnable: Tuesday, Recyclables: Wednesday.",
//         jp: "燃えるゴミ: 月・木、燃えないゴミ: 火、資源ゴミ: 水",
//         romaji: "Moeru gomi: Getsu/Moku, Moenai gomi: Ka, Shigen gomi: Sui"
//       },
//       { 
//         text: "Separate according to local rules and clean recyclables.",
//         jp: "地域のルールに従い、資源ゴミはきれいにしてください。",
//         romaji: "Chiiki no ruuru ni shitagai, shigen gomi wa kirei ni shite kudasai."
//       }
//     ]
//   },
//   {
//     category: "Cultural Notes",
//     steps: [
//       { text: "Remove shoes when entering a home or traditional restaurant.", jp: "家や伝統的なレストランに入るときは靴を脱いでください。", romaji: "Ie ya dentouteki na resutoran ni hairu toki wa kutsu o nuide kudasai." },
//       { text: "Stand in line and wait your turn.", jp: "順番を守って並んでください。", romaji: "Junban o mamotte narande kudasai." },
//       { text: "Speak softly in public transport.", jp: "公共交通機関では静かに話してください。", romaji: "Koukyou koutsuukikan de wa shizuka ni hanashite kudasai." }
//     ]
//   },
//   {
//     category: "Emergency Numbers & Hospitals",
//     steps: [
//       { text: "Police: 110, Ambulance/Fire: 119", jp: "警察: 110、救急/消防: 119", romaji: "Keisatsu: 110, Kyuukyuu/Shoubou: 119" },
//       { text: "Carry your Residence Card in case of emergency.", jp: "緊急時には在留カードを携帯してください。", romaji: "Kinkyuuji ni wa zairyuu kaado o keitai shite kudasai." }
//     ]
//   },
//   {
//     category: "Embassy & Legal Support",
//     steps: [
//       { text: "Keep the contact of Nepal Embassy handy.", jp: "ネパール大使館の連絡先を手元に置いてください。", romaji: "Nepaaru taishikan no renrakusaki o temoto ni oite kudasai." },
//       { text: "For legal issues, contact your university or local support center.", jp: "法的な問題の場合は大学または地域サポートセンターに連絡してください。", romaji: "Houteki na mondai no baai wa daigaku mata wa chiiki sapooto sentaa ni renraku shite kudasai." }
//     ]
//   }
// ];

// /* -------------------------
//    Main Component
// ------------------------- */
// export default function SurvivalGuide() {
//   return (
//     <div
//       style={{
//         padding: 16,
//         background: "var(--bg, #fdf8f8ff)",
//         color: "var(--text, #0b0909ff)",
//         minHeight: "100vh",
//         fontFamily: "Inter, system-ui, -apple-system, sans-serif",
//         maxWidth: 900,
//         margin: "0 auto",
//       }}
//     >
//       <h1
//         style={{
//           textAlign: "center",
//           fontSize: 28,
//           fontWeight: 700,
//           color: "var(--accent, #0ea5a4)",
//           marginBottom: 24,
//         }}
//       >
//         🗾 Student Survival Guide
//       </h1>

//       {survivalInfo.map((category, idx) => (
//         <CollapsibleItem key={idx} name={category.category}>
//           {category.steps.map((step, sidx) => (
//             <div key={sidx} style={{ marginBottom: 10 }}>
//               <p style={{ margin: 0 }}><StepIcon />{step.text}</p>
//               {step.jp && <p style={{ margin: "2px 0 0 22px", fontSize: 14, color: "#555" }}>日本語: {step.jp}</p>}
//               {step.romaji && <p style={{ margin: "0 0 4px 22px", fontSize: 13, fontStyle: "italic", color: "#777" }}>Romaji: {step.romaji}</p>}
//             </div>
//           ))}
//         </CollapsibleItem>
//       ))}
//     </div>
//   );
// }
"use client";
import React, { useState, useMemo } from "react";

/* -------------------------
   Icons
------------------------- */
const PlusIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
  </svg>
);
const MinusIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <path fill="currentColor" d="M5 11h14v2H5z" />
  </svg>
);

/* -------------------------
   Collapsible Item
------------------------- */
function CollapsibleItem({ name, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ marginBottom: 12 }}>
      <button
        onClick={() => setOpen((s) => !s)}
        style={{
          width: "100%",
          textAlign: "left",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 12px",
          borderRadius: 10,
          background: "var(--panel, #f7f9faff)",
          border: "1px solid rgba(0,0,0,0.06)",
          cursor: "pointer",
          fontWeight: 700,
          color: "var(--text, #111)",
        }}
      >
        <span>{name}</span>
        <span>{open ? <MinusIcon /> : <PlusIcon />}</span>
      </button>

      <div
        style={{
          maxHeight: open ? "1000px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.32s ease",
          marginTop: 6,
        }}
      >
        <div style={{ padding: 10, borderLeft: "3px solid var(--accent, #0ea5a4)" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

/* -------------------------
   Map Embed
------------------------- */
const MapEmbed = ({ address }: { address: string }) => {
  const url = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  return (
    <div style={{ marginTop: 6, borderRadius: 10, overflow: "hidden" }}>
      <iframe
        title={address}
        src={url}
        width="100%"
        height={200}
        style={{ border: 0, borderRadius: 10 }}
        loading="lazy"
      />
    </div>
  );
};

/* -------------------------
   Extended JSON Data
------------------------- */
const stepsData = [
  {
    title: "Register Residence",
    jp: "住民登録",
    romaji: "Jūmin tōroku",
    content:
      "Within 14 days, visit your local city/ward office with Residence Card. Ask: '住民登録をしたいです' / 'Jūmin tōroku o shitai desu'.",
    address: "Your local city/ward office address",
    keywords: ["residence", "city office", "registration"],
  },
  {
    title: "Open a Bank Account",
    jp: "銀行口座開設",
    romaji: "Ginkō kōza kaisetsu",
    content:
      "Bring Residence Card, Passport, Student ID. Ask: '口座を開きたいです' / 'Kōza o hirakitai desu'.",
    address: "〒900-8799 沖縄県那覇市旭町116−37",
    keywords: ["bank", "account", "JP Bank", "Okinawa Bank"],
  },
  {
    title: "Public Transport",
    jp: "公共交通機関",
    romaji: "Kōkyō kōtsū kikan",
    content:
      "Use IC cards like Suica/OKICA. Exact change works for buses. Ask: '次のバス停はどこですか？' / 'Tsugi no basutei wa doko desu ka?'.",
    keywords: ["bus", "train", "transport", "Suica", "OKICA"],
  },
  {
    title: "Garbage & Recycling",
    jp: "ごみとリサイクル",
    romaji: "Gomi to risaikuru",
    content:
      "Burnable: Mon/Thu, Non-burnable: Tue, Recyclables: Wed. Ask neighbors if unsure: 'ごみはどのように出しますか？' / 'Gomi wa dono yō ni dashimasu ka?'.",
    keywords: ["garbage", "trash", "recycle"],
  },
  {
    title: "Emergency Numbers",
    jp: "緊急番号",
    romaji: "Kinkyū bangō",
    content: "Police: 110, Ambulance: 119, Fire: 119.",
    keywords: ["emergency", "police", "ambulance", "fire"],
  },
  {
    title: "Cultural Notes",
    jp: "文化的注意事項",
    romaji: "Bunka-teki chūi jikō",
    content:
      "Remove shoes indoors, queue properly, speak softly, use polite greetings.",
    keywords: ["culture", "manners", "etiquette"],
  },
  {
    title: "Visit Hospitals",
    jp: "病院の訪問",
    romaji: "Byōin no hōmon",
    content:
      "Bring your Residence Card and insurance card. Ask: '診察を受けたいです' / 'Shinsatsu o uketai desu'.",
    address: "〒902-0076 沖縄県那覇市与儀1丁目3−21",
    keywords: ["hospital", "doctor", "medical"],
  },
  {
    title: "Visit Police Station",
    jp: "警察署訪問",
    romaji: "Keisatsusho hōmon",
    content:
      "Report lost items or emergencies. Ask: '紛失届を出したいです' / 'Funsitsu todoke o dashitai desu'.",
    address: "〒900-0021 沖縄県那覇市泉崎1丁目2−2",
    keywords: ["police", "station", "lost", "report"],
  },
  {
    title: "Shopping",
    jp: "買い物",
    romaji: "Kaimono",
    content:
      "Convenience stores, supermarkets, malls. Ask staff politely: 'これをください' / 'Kore o kudasai'.",
    address: "〒900-0014 沖縄県那覇市松尾2丁目8−19",
    keywords: ["shopping", "store", "mall"],
  },
  {
    title: "Visit Embassy",
    jp: "大使館の訪問",
    romaji: "Taishikan no hōmon",
    content:
      "For visas or documents. Ask: '書類を提出したいです' / 'Shorui o teishutsu shitai desu'.",
    address: "〒900-0015 沖縄県那覇市久茂地2丁目3−15",
    keywords: ["embassy", "visa", "Nepal"],
  },
  {
    title: "Buy SIM Card / Internet",
    jp: "SIMカード購入",
    romaji: "SIM kādo kōnyū",
    content:
      "Bring passport. Ask: 'SIMカードを購入したいです' / 'SIM kādo o kōnyū shitai desu'.",
    keywords: ["internet", "sim", "phone", "mobile"],
  },
  {
    title: "Opening Hours",
    jp: "営業時間",
    romaji: "Eigyō jikan",
    content:
      "Check stores and offices opening times. Weekdays are standard; Sundays may close.",
    keywords: ["hours", "schedule", "time"],
  },
  {
    title: "Language Assistance",
    jp: "言語サポート",
    romaji: "Gengo sapōto",
    content:
      "Use translation apps or request English-speaking staff. Ask: '英語を話せますか？' / 'Eigo o hanasemasu ka?'.",
    keywords: ["language", "English", "translation"],
  },
  {
    title: "Cultural Festivals",
    jp: "文化祭",
    romaji: "Bunka sai",
    content:
      "Participate in local festivals. Ask neighbors or school for schedules.",
    keywords: ["festival", "event", "culture"],
  },
  {
    title: "Local Etiquette",
    jp: "地域のマナー",
    romaji: "Chiiki no manā",
    content:
      "Greetings, respect elders, do not litter. Common phrases: 'こんにちは' / 'Konnichiwa'.",
    keywords: ["manners", "etiquette", "greeting"],
  },
  {
    title: "Bank Withdrawals / ATMs",
    jp: "銀行引き出し / ATM",
    romaji: "Ginkō hikidashi / ATM",
    content:
      "ATMs available at banks, convenience stores. Ask: '現金を引き出したいです' / 'Genkin o hikidashitai desu'.",
    keywords: ["ATM", "withdraw", "cash", "bank"],
  },
  {
    title: "Postal Services",
    jp: "郵便サービス",
    romaji: "Yūbin sābisu",
    content:
      "Post letters, parcels. Ask: '郵便を出したいです' / 'Yūbin o dashitai desu'.",
    keywords: ["post", "mail", "letter", "parcel"],
  },
];

/* -------------------------
   Main Component
------------------------- */
export default function ExtendedSearchableGuide() {
  const [search, setSearch] = useState("");

  const results = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return stepsData;

    return stepsData.filter((step) => {
      return (
        step.title.toLowerCase().includes(q) ||
        step.jp.toLowerCase().includes(q) ||
        step.romaji.toLowerCase().includes(q) ||
        step.content.toLowerCase().includes(q) ||
        (step.keywords && step.keywords.some((kw) => kw.toLowerCase().includes(q)))
      );
    });
  }, [search]);

  return (
    <div
      style={{
        padding: 16,
        background: "var(--bg, #fdf8f8ff)",
        color: "var(--text, #0b0909ff)",
        minHeight: "100vh",
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: 28,
          fontWeight: 700,
          color: "var(--accent, #0ea5a4)",
          marginBottom: 20,
        }}
      >
         Student Survival Guide 
      </h1>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by keyword..."
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: 8,
          border: "1px solid var(--border, #ccc)",
          marginBottom: 16,
          fontSize: 16,
        }}
      />

      {results.map((step, idx) => (
        <CollapsibleItem key={idx} name={step.title}>
          {/* Placeholder icon */}
          <div
            style={{
              width: 60,
              height: 60,
              background: "#eee",
              borderRadius: 8,
              marginBottom: 8,
            }}
          />
          <p style={{ margin: 4 }}>
            <strong>JP:</strong> {step.jp}
          </p>
          <p style={{ margin: 4 }}>
            <strong>Romaji:</strong> {step.romaji}
          </p>
          <p style={{ marginTop: 6 }}>{step.content}</p>

          {step.address && <MapEmbed address={step.address} />}
        </CollapsibleItem>
      ))}
    </div>
  );
}
