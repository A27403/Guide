
// "use client";
// import React, { useState } from "react";

// const TrainRoute: React.FC = () => {
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [routes, setRoutes] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const API_KEY = "YOUR_ODPT_API_KEY"; // 🔑 replace this after registration

//   const handleSearch = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setRoutes([]);

//     try {
//       const query = `https://api.odpt.org/api/v4/odpt:TrainInformation?acl:consumerKey=${API_KEY}`;
//       const res = await fetch(query);
//       if (!res.ok) throw new Error("Failed to fetch train info");
//       const data = await res.json();

//       // Example: Filter trains related to the input
//       const filtered = data.filter(
//         (t: any) =>
//           (t["odpt:railway"]?.toLowerCase().includes(from.toLowerCase()) ||
//             t["odpt:trainInformationText"]?.includes(from)) &&
//           (t["odpt:railway"]?.toLowerCase().includes(to.toLowerCase()) ||
//             t["odpt:trainInformationText"]?.includes(to))
//       );

//       setRoutes(filtered.slice(0, 5)); // Show first 5 routes
//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ marginBottom: "2rem" }}>
//       <h3>🚉 Live Train Route Finder (Tokyo)</h3>
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           value={from}
//           onChange={(e) => setFrom(e.target.value)}
//           placeholder="From station or line"
//           style={{ padding: "0.5rem" }}
//         />
//         <input
//           type="text"
//           value={to}
//           onChange={(e) => setTo(e.target.value)}
//           placeholder="To station or line"
//           style={{ padding: "0.5rem", marginLeft: "1rem" }}
//         />
//         <button
//           type="submit"
//           style={{
//             padding: "0.5rem 1rem",
//             marginLeft: "1rem",
//             background: "#2563eb",
//             color: "#fff",
//             borderRadius: "8px",
//             border: "none",
//           }}
//         >
//           Search
//         </button>
//       </form>

//       {loading && <p>Loading live data...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {routes.length > 0 && (
//         <div style={{ marginTop: "1rem" }}>
//           <h4>Results:</h4>
//           {routes.map((r, i) => (
//             <div
//               key={i}
//               style={{
//                 border: "1px solid #ccc",
//                 padding: "0.75rem",
//                 marginBottom: "0.5rem",
//                 borderRadius: "8px",
//               }}
//             >
//               <p>
//                 <strong>Railway:</strong>{" "}
//                 {r["odpt:railway"]?.replace("odpt.Railway:", "")}
//               </p>
//               <p>
//                 <strong>Status:</strong>{" "}
//                 {r["odpt:trainInformationText"] || "No delay info"}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TrainRoute;
"use client";
import React, { useState } from "react";

const TrainRoute: React.FC = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [routes, setRoutes] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "YOUR_ODPT_API_KEY"; // 🔑 replace this with your key

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setRoutes([]);

    try {
      const query = `https://api.odpt.org/api/v4/odpt:TrainInformation?acl:consumerKey=${API_KEY}`;
      const res = await fetch(query);
      if (!res.ok) throw new Error("Failed to fetch train info");
      const data = await res.json();

      // Example filter
      const filtered = data.filter(
        (t: any) =>
          (t["odpt:railway"]?.toLowerCase().includes(from.toLowerCase()) ||
            t["odpt:trainInformationText"]?.includes(from)) &&
          (t["odpt:railway"]?.toLowerCase().includes(to.toLowerCase()) ||
            t["odpt:trainInformationText"]?.includes(to))
      );

      setRoutes(filtered.slice(0, 5));
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        marginBottom: "2rem",
        backgroundColor: "var(--panel)",
        color: "var(--text)",
        padding: "1rem",
        borderRadius: "0.8rem",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <h3 style={{ color: "var(--accent)" }}>🚉 Live Train Route Finder (Tokyo)</h3>
      <form onSubmit={handleSearch} style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="From station or line"
          style={{
            padding: "0.5rem",
            flex: "1 1 150px",
            borderRadius: "6px",
            border: "1px solid var(--border)",
            backgroundColor: "var(--bg)",
            color: "var(--text)",
            transition: "background-color 0.3s ease, color 0.3s ease, border 0.3s ease",
          }}
        />
        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="To station or line"
          style={{
            padding: "0.5rem",
            flex: "1 1 150px",
            borderRadius: "6px",
            border: "1px solid var(--border)",
            backgroundColor: "var(--bg)",
            color: "var(--text)",
            transition: "background-color 0.3s ease, color 0.3s ease, border 0.3s ease",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            background: "var(--accent)",
            color: "var(--bg)",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            flex: "0 0 auto",
          }}
        >
          Search
        </button>
      </form>

      {loading && <p>Loading live data...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {routes.length > 0 && (
        <div style={{ marginTop: "1rem" }}>
          <h4 style={{ color: "var(--accent)" }}>Results:</h4>
          {routes.map((r, i) => (
            <div
              key={i}
              style={{
                border: "1px solid var(--border)",
                padding: "0.75rem",
                marginBottom: "0.5rem",
                borderRadius: "8px",
                backgroundColor: "var(--bg)",
                transition: "background-color 0.3s ease, border-color 0.3s ease",
              }}
            >
              <p>
                <strong>Railway:</strong> {r["odpt:railway"]?.replace("odpt.Railway:", "")}
              </p>
              <p>
                <strong>Status:</strong> {r["odpt:trainInformationText"] || "No delay info"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrainRoute;
