
// "use client";
// import React, { useState } from "react";
// import { DollarSign, Sun, Train, MapPin } from "lucide-react";
// import CurrencyConverter from "./CurrencyConverter";
// import Weather from "./Weather";
// // import TrainRoute from "./TrainRoute";
// // import Map from "./Map"; // optional

// const Tools: React.FC = () => {
//   const [activeTool, setActiveTool] = useState<string | null>(null);

//   const toolsData = [
//     { title: "Currency Converter", icon: <DollarSign size={22} />, component: <CurrencyConverter /> },
//     { title: "Weather", icon: <Sun size={22} />, component: <Weather /> },
//     //{ title: "Train Route", icon: <Train size={22} />, component: <TrainRoute /> },
//     // { title: "Map", icon: <MapPin size={22} />, component: <Map /> },
//   ];

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         backgroundColor: "var(--bg)",
//         color: "var(--text)",
//         padding: "2rem 1rem",
//         transition: "background-color 0.3s ease, color 0.3s ease",
//       }}
//     >
//       <h1
//         style={{
//           textAlign: "center",
//           fontSize: "2.2rem",
//           fontWeight: 700,
//           color: "var(--accent)",
//           marginBottom: "2rem",
//           transition: "color 0.3s ease",
//         }}
//       >
//         Practical Tools
//       </h1>

//       <div
//         style={{
//           maxWidth: "700px",
//           margin: "0 auto",
//           display: "flex",
//           flexDirection: "column",
//           gap: "1rem",
//         }}
//       >
//         {toolsData.map((tool) => (
//           <div
//             key={tool.title}
//             style={{
//               background: "var(--panel)",
//               borderRadius: "0.8rem",
//               boxShadow: "var(--shadow)",
//               transition: "background-color 0.3s ease, box-shadow 0.3s ease",
//             }}
//           >
//             {/* Clickable header */}
//             <button
//               onClick={() => setActiveTool(activeTool === tool.title ? null : tool.title)}
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "0.8rem",
//                 padding: "1rem 1.2rem",
//                 fontSize: "1.2rem",
//                 fontWeight: 600,
//                 background: "none",
//                 border: "none",
//                 textAlign: "left",
//                 cursor: "pointer",
//                 color: "var(--text)",
//                 transition: "color 0.3s ease",
//               }}
//             >
//               {React.cloneElement(tool.icon, { color: "var(--accent)" })}
//               {tool.title}
//               <span style={{ marginLeft: "auto" }}>{activeTool === tool.title ? "▲" : "▼"}</span>
//             </button>

//             {/* Pop-out content */}
//             {activeTool === tool.title && (
//               <div
//                 style={{
//                   padding: "1rem 1.2rem",
//                   borderTop: "1px solid var(--border)",
//                   transition: "border-color 0.3s ease",
//                 }}
//               >
//                 {tool.component}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tools;
