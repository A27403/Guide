// import React from "react";

// const newsItems = [
//   {
//     title: "Visa Update for Students",
//     date: "2025-10-01",
//     content:
//       "Japan has updated its student visa process. Please check the embassy website for details.",
//   },
//   {
//     title: "Nepalese Festival in Tokyo",
//     date: "2025-10-15",
//     content:
//       "Join the Nepalese community festival at Ueno Park. Food, music, and cultural events!",
//   },
//   {
//     title: "COVID-19 Guidelines",
//     date: "2025-09-28",
//     content:
//       "Latest COVID-19 safety measures for international students. Masks required in public places.",
//   },
// ];

// const News: React.FC = () => (
//   <section>
//     <h2>News & Updates</h2>
//     <ul>
//       {newsItems.map((item, idx) => (
//         <li key={idx} style={{ marginBottom: "1.5rem" }}>
//           <strong>{item.title}</strong>{" "}
//           <span style={{ color: "#888" }}>({item.date})</span>
//           <p>{item.content}</p>
//         </li>
//       ))}
//     </ul>
//     <p style={{ fontSize: "0.9rem", color: "#888" }}>
//       <em>Latest news for Nepalese students in Japan.</em>
//     </p>
//   </section>
// );

// export default News;
"use client";
import React from "react";

const newsItems = [
  {
    title: "Visa Update for Students",
    date: "2025-10-01",
    content:
      "Japan has updated its student visa process. Please check the embassy website for details.",
  },
  {
    title: "Nepalese Festival in Tokyo",
    date: "2025-10-15",
    content:
      "Join the Nepalese community festival at Ueno Park. Food, music, and cultural events!",
  },
  {
    title: "COVID-19 Guidelines",
    date: "2025-09-28",
    content:
      "Latest COVID-19 safety measures for international students. Masks required in public places.",
  },
];

const News: React.FC = () => (
  <section
    style={{
      maxWidth: "800px",
      margin: "2rem auto",
      padding: "0 1rem",
    }}
  >
    <h2
      style={{
        fontSize: "2rem",
        fontWeight: 700,
        color: "var(--accent)",
        marginBottom: "1.5rem",
        textAlign: "center",
      }}
    >
      📰 News & Updates
    </h2>

    <ul
      style={{
        display: "grid",
        gap: "1.5rem",
      }}
    >
      {newsItems.map((item, idx) => (
        <li
          key={idx}
          style={{
            backgroundColor: "var(--panel)",
            borderRadius: "1rem",
            boxShadow: "var(--shadow)",
            padding: "1.5rem 1.2rem",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget;
            target.style.transform = "translateY(-4px)";
            target.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget;
            target.style.transform = "translateY(0)";
            target.style.boxShadow = "var(--shadow)";
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <strong style={{ fontSize: "1.2rem", color: "var(--text)" }}>{item.title}</strong>
            <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{item.date}</span>
          </div>
          <p style={{ color: "var(--text)", lineHeight: 1.5 }}>{item.content}</p>
        </li>
      ))}
    </ul>

    <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", textAlign: "center", marginTop: "2rem" }}>
      <em>Latest news for Nepalese students in Japan.</em>
    </p>
  </section>
);

export default News;
