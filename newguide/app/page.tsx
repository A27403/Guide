// "use client";
// import React from "react";
// import AnimatedFadeIn from "../components/AnimatedFadeIn";

// const features = [
//   {
//     name: "Lessons",
//     path: "/lessons",
//     desc: "Japanese N5 level vocabulary, grammar, kanji, and quizzes.",
//   },
  
//   {
//     name: "Survival Guide",
//     path: "/survival",
//     desc: "Registration, banking, transport, emergency contacts.",
//   },
  
//   {
//     name: "Tools",
//     path: "/tools",
//     desc: "Currency converter, weather, train routes, maps.",
//   },
//   // Progress page removed
//   {
//     name: "News",
//     path: "/news",
//     desc: "Latest news and updates for students.",
//   },
//   {
//     name:"Search",
//     path:"/search",
//     desc:"Search for lessons, conversations, etiquette tips, and more.",
//   }
 
// ];

// export default function Home() {
//   return (
//     <>
//       <AnimatedFadeIn delay={100}>
//         <h2>Welcome to Nepalese Guide to Japan</h2>
//       </AnimatedFadeIn>
//       <AnimatedFadeIn delay={300}>
//         <p>
//           This app helps Nepalese students coming to Japan learn Japanese (N5
//           level), basic conversations, rules, and much more. Explore each
//           section below:
//         </p>
//       </AnimatedFadeIn>
//       <div className="feature-summary">
//         {features.map((feature, idx) => (
//           <AnimatedFadeIn key={feature.name} delay={500 + idx * 200}>
//             <div className="feature-card">
//               <h3>
//                 <a href={feature.path}>{feature.name}</a>
//               </h3>
//               <p>{feature.desc}</p>
//             </div>
//           </AnimatedFadeIn>
//         ))}
//       </div>
//     </>
//   );
// }
// "use client";
// import React from "react";
// import AnimatedFadeIn from "../components/AnimatedFadeIn";

// const features = [
//   {
//     name: "📘 Lessons",
//     path: "/lessons",
//     desc: "Study Japanese vocabulary, kanji, and grammar with examples.",
//   },
//   {
//     name: "🗾 Survival Guide",
//     path: "/survival",
//     desc: "Learn how to handle banks, hospitals, and local registration.",
//   },
//   {
//     name: "🧭 Tools",
//     path: "/tools",
//     desc: "Use helpful tools like currency converter, weather, and maps.",
//   },
//   {
//     name: "📰 News",
//     path: "/news",
//     desc: "Stay updated with the latest news and student info.",
//   },
//   {
//     name: "🔍 Search",
//     path: "/search",
//     desc: "Quickly find lessons, phrases, or important tips.",
//   },
// ];

// export default function Home() {
//   return (
//     <div
//       style={{
//         backgroundColor: "#fffaf0",
//         minHeight: "100vh",
//         padding: "2rem",
//         textAlign: "center",
//       }}
//     > <h1
//           style={{
//             fontSize: "2.5rem",
//             fontWeight: "bold",
//             color: "#3b3937ff",
//             marginBottom: "1rem",
//           }}
//         >
//           🇳🇵 Nepalese Guide to Japan 🇯🇵
//         </h1>
//       {/* <AnimatedFadeIn delay={100}>
//         <h1
//           style={{
//             fontSize: "2.5rem",
//             fontWeight: "bold",
//             color: "#f0ece7ff",
//             marginBottom: "1rem",
//           }}
//         >
//           🇳🇵 Nepalese Guide to Japan 🇯🇵
//         </h1>
//       </AnimatedFadeIn> */}

//       <AnimatedFadeIn delay={300}>
//         <p
//           style={{
//             fontSize: "1.1rem",
//             color: "#444",
//             maxWidth: "700px",
//             margin: "0 auto 2rem",
//             lineHeight: "1.7",
//           }}
//         >
//           A complete guide for Nepalese students in Japan — learn the language,
//           explore useful places, and get essential tips for daily life. Start
//           your journey below 👇
//         </p>
//       </AnimatedFadeIn>

//       {/* Feature Cards Grid */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//           gap: "1.5rem",
//           maxWidth: "1000px",
//           margin: "0 auto",
//         }}
//       >
//         {features.map((feature, idx) => (
//           <AnimatedFadeIn key={feature.name} delay={500 + idx * 200}>
//             <a
//               href={feature.path}
//               style={{
//                 display: "block",
//                 backgroundColor: "#ffffff",
//                 padding: "1.5rem",
//                 borderRadius: "16px",
//                 boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//                 textDecoration: "none",
//                 color: "#333",
//                 transition: "all 0.3s ease",
//               }}
//               onMouseEnter={(e) =>
//                 (e.currentTarget.style.transform = "translateY(-5px)")
//               }
//               onMouseLeave={(e) =>
//                 (e.currentTarget.style.transform = "translateY(0)")
//               }
//             >
//               <h3
//                 style={{
//                   fontSize: "1.5rem",
//                   color: "#c47f00",
//                   marginBottom: "0.6rem",
//                 }}
//               >
//                 {feature.name}
//               </h3>
//               <p
//                 style={{
//                   fontSize: "1rem",
//                   color: "#555",
//                   lineHeight: "1.5",
//                 }}
//               >
//                 {feature.desc}
//               </p>
//             </a>
//           </AnimatedFadeIn>
//         ))}
//       </div>

//             {/* Footer */}
//             <footer
//               style={{
//                 marginTop: "3rem",
//                 color: "#888",
//                 fontSize: "0.9rem",
//               }}
//             >
//               <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
//                 <p style={{ margin: 0 }}>
//                   © {new Date().getFullYear()} Nepalese Guide to Japan — Built with ❤️ for students.
//                 </p>
//                 <p style={{ margin: "0.25rem 0 0" }}>
//                   <a href="/privacy" style={{ color: "#888", textDecoration: "underline" }}>Privacy</a>{" "}
//                   · <a href="/terms" style={{ color: "#888", textDecoration: "underline" }}>Terms</a>
//                 </p>
//               </div>
//             </footer>
//           </div>
//         );
//       }
//         "use client";
// import React from "react";
// import AnimatedFadeIn from "../components/AnimatedFadeIn";

// const features = [
//   {
//     name: "📘 Lessons",
//     path: "/lessons",
//     desc: "Study Japanese vocabulary, kanji, and grammar with examples.",
//   },
//   {
//     name: "🗾 Survival Guide",
//     path: "/survival",
//     desc: "Learn how to handle banks, hospitals, and local registration.",
//   },
//   {
//     name: "🧭 Tools",
//     path: "/tools",
//     desc: "Use helpful tools like currency converter, weather, and maps.",
//   },
//   {
//     name: "📰 News",
//     path: "/news",
//     desc: "Stay updated with the latest news and student info.",
//   },
//   {
//     name: "🔍 Search",
//     path: "/search",
//     desc: "Quickly find lessons, phrases, or important tips.",
//   },
// ];

// export default function Home() {
//   return (
//     <>
//       {/* THEME CSS (Light + Dark) */}
//       <style jsx global>{`
//         :root {
//           --bg: #fcfbf8ff;
//           --text: #444;
//           --text-strong: #2c2c2c;
//           --text-light: #666;

//           --card: #ffffff;
//           --accent: #c47f00;
//           --shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//         }

//         html[data-theme="dark"] {
//           --bg: #2d2d2d;
//           --text: #eeeeee;
//           --text-strong: #ffffff;
//           --text-light: #cccccc;

//           --card: #3a3a3a;
//           --accent: #f7f7f6ff;
//           --shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
//         }

//         body {
//           background: var(--bg);
//           color: var(--text);
//           transition: background 0.3s ease, color 0.3s ease;
//         }
//       `}</style>

//       {/* PAGE CONTENT */}
//       <div
//         style={{
//           backgroundColor: "var(--bg)",
//           minHeight: "100vh",
//           padding: "2rem",
//           textAlign: "center",
//           transition: "background 0.3s ease",
//         }}
//       >
//         <h1
//           style={{
//             fontSize: "2.5rem",
//             fontWeight: "bold",
//             color: "var(--text-strong)",
//             marginBottom: "1rem",
//           }}
//         >
//           🇯🇵 Japan Guide for Nepalese 🇳🇵
//         </h1>

//         <AnimatedFadeIn delay={300}>
//           <p
//             style={{
//               fontSize: "1.1rem",
//               color: "var(--text)",
//               maxWidth: "700px",
//               margin: "0 auto 2rem",
//               lineHeight: "1.7",
//             }}
//           >
//             A complete guide for Nepalese students in Japan — learn the
//             language, explore useful places, and get essential daily-life tips.
//             Choose a section below 👇
//           </p>
//         </AnimatedFadeIn>

//         {/* Feature Cards Grid */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//             gap: "1.5rem",
//             maxWidth: "1000px",
//             margin: "0 auto",
//           }}
//         >
//           {features.map((feature, idx) => (
//             <AnimatedFadeIn key={feature.name} delay={500 + idx * 200}>
//               <a
//                 href={feature.path}
//                 style={{
//                   display: "block",
//                   backgroundColor: "var(--card)",
//                   padding: "1.5rem",
//                   borderRadius: "16px",
//                   boxShadow: "var(--shadow)",
//                   textDecoration: "none",
//                   color: "var(--text)",
//                   transition: "all 0.3s ease",
//                 }}
//                 onMouseEnter={(e) =>
//                   (e.currentTarget.style.transform = "translateY(-5px)")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.transform = "translateY(0)")
//                 }
//               >
//                 <h3
//                   style={{
//                     fontSize: "1.5rem",
//                     color: "var(--accent)",
//                     marginBottom: "0.6rem",
//                   }}
//                 >
//                   {feature.name}
//                 </h3>
//                 <p
//                   style={{
//                     fontSize: "1rem",
//                     color: "var(--text-light)",
//                     lineHeight: "1.5",
//                   }}
//                 >
//                   {feature.desc}
//                 </p>
//               </a>
//             </AnimatedFadeIn>
//           ))}
//         </div>

//         {/* Footer */}
//         <footer
//           style={{
//             marginTop: "3rem",
//             color: "var(--text-light)",
//             fontSize: "0.9rem",
//           }}
//         >
//           <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
//             <p style={{ margin: 0 }}>
//               © {new Date().getFullYear()} Japan Guide for Nepalese — Built with
//               ❤️.
//             </p>
//             <p style={{ margin: "0.25rem 0 0" }}>
//               <a href="/privacy" style={{ color: "var(--text-light)" }}>
//                 Privacy
//               </a>{" "}
//               ·{" "}
//               <a href="/terms" style={{ color: "var(--text-light)" }}>
//                 Terms
//               </a>
//             </p>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// }
"use client";

import React from "react";
import AnimatedFadeIn from "../components/AnimatedFadeIn";

const features = [
  { name: "🗾 Survival Guide", path: "/survival", desc: "Tips for banks, hospitals, city office." },
  { name: "📘 Lessons", path: "/lessons", desc: "Study vocabulary, kanji, sentences." },
  
  { name: "🧭 Tools", path: "/tools", desc: "Weather, currency, maps, converters." },
  { name: "📰 News", path: "/news", desc: "Latest updates and student info." },
  { name: "🔍 Search", path: "/search", desc: "Find phrases, tips and categories fast." },
];

export default function Home() {
  return (
    <div className="home-wrapper">
      {/* Page Styles with theme support */}
      <style jsx global>{`
        .home-wrapper {
          background-color: var(--bg);
          color: var(--text);
          min-height: 100vh;
          padding: 2rem;
          text-align: center;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .home-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: var(--accent);
          transition: color 0.3s ease;
        }

        .home-description {
          font-size: 1.1rem;
          max-width: 700px;
          color: var(--text);
          margin: 0 auto 2rem;
          line-height: 1.7;
          opacity: 0.9;
          transition: color 0.3s ease;
        }

        .feature-card {
          background-color: var(--panel);
          padding: 1.5rem;
          border-radius: 16px;
          text-decoration: none;
          color: var(--text);
          box-shadow: var(--shadow);
          display: block;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.18);
        }

        .feature-title {
          font-size: 1.5rem;
          margin-bottom: 0.6rem;
          color: var(--accent);
        }

        .feature-desc {
          font-size: 1rem;
          opacity: 0.9;
        }

        .footer {
          margin-top: 3rem;
          color: var(--text);
          opacity: 0.7;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer a {
          color: var(--text);
          opacity: 0.7;
          text-decoration: underline;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }
      `}</style>

      {/* Title */}
      <h1 className="home-title">🇳🇵 Nepalese Guide to Japan 🇯🇵</h1>

      {/* Description */}
      <AnimatedFadeIn delay={300}>
        <p className="home-description">
          A complete guide for Nepalese students in Japan — learn the language,
          explore useful places, and get essential tips for daily life.
        </p>
      </AnimatedFadeIn>

      {/* Grid Cards */}
      <div className="grid">
        {features.map((feature, idx) => (
          <AnimatedFadeIn key={idx} delay={500 + idx * 200}>
            <a href={feature.path} className="feature-card">
              <h3 className="feature-title">{feature.name}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </a>
          </AnimatedFadeIn>
        ))}
      </div>

      {/* Footer */}
      {/* <footer className="footer">
        <p>© {new Date().getFullYear()} Nepalese Guide to Japan — Built with ❤️</p>
        <p>
          <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a>
        </p>
      </footer> */}
    </div>
  );
}
