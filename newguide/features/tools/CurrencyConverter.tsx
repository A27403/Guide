
// // "use client";
// // import React, { useEffect, useState } from "react";

// // const CurrencyConverter: React.FC = () => {
// //   const [amount, setAmount] = useState(1000);
// //   const [converted, setConverted] = useState(0);
// //   const [rate, setRate] = useState<number | null>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
// //   const [reverse, setReverse] = useState(false); // false = JPY→NPR, true = NPR→JPY

// //   // Fetch exchange rate (JPY base)
// //   const fetchRate = async () => {
// //     try {
// //       setLoading(true);
// //       const res = await fetch("https://api.exchangerate.host/latest?base=JPY&symbols=NPR");
// //       const data = await res.json();
// //       const newRate = data.rates?.NPR || 0.88;
// //       setRate(newRate);
// //       updateConversion(amount, newRate, reverse);
// //       setLastUpdated(new Date());
// //     } catch (err) {
// //       console.error("Failed to fetch exchange rate:", err);
// //       setRate(0.88);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Update conversion based on direction
// //   const updateConversion = (value: number, rateValue: number | null, isReversed: boolean) => {
// //     if (!rateValue) return;
// //     const result = isReversed
// //       ? value / rateValue // NPR → JPY
// //       : value * rateValue; // JPY → NPR
// //     setConverted(Number(result.toFixed(2)));
// //   };

// //   useEffect(() => {
// //     fetchRate();
// //     const interval = setInterval(fetchRate, 5 * 60 * 1000); // auto refresh 5 min
// //     return () => clearInterval(interval);
// //   }, []);

// //   const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const value = Number(e.target.value);
// //     setAmount(value);
// //     if (rate) updateConversion(value, rate, reverse);
// //   };

// //   const toggleReverse = () => {
// //     setReverse(!reverse);
// //     if (rate) updateConversion(converted, rate, !reverse);
// //   };

// //   const refreshNow = () => {
// //     fetchRate();
// //   };

// //   return (
// //     <div style={{ marginBottom: "2rem", textAlign: "center" }}>
// //       <h3>💱 Currency Converter</h3>

// //       {loading ? (
// //         <p>Loading live exchange rate...</p>
// //       ) : (
// //         <>
// //           <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
// //             <span style={{ fontSize: "1.5rem" }}>{reverse ? "🇳🇵" : "🇯🇵"}</span>
// //             <input
// //               type="number"
// //               value={amount}
// //               onChange={handleAmountChange}
// //               style={{ padding: "0.5rem", width: "140px", textAlign: "center" }}
// //             />
// //             <span style={{ fontSize: "1.5rem" }}>➡️</span>
// //             <span style={{ fontSize: "1.5rem" }}>{reverse ? "🇯🇵" : "🇳🇵"}</span>
// //             <input
// //               type="text"
// //               value={converted}
// //               readOnly
// //               style={{ padding: "0.5rem", width: "140px", textAlign: "center", background: "#f8f8f8" }}
// //             />
// //           </div>

// //           <button
// //             onClick={toggleReverse}
// //             style={{
// //               background: "#007bff",
// //               color: "white",
// //               border: "none",
// //               padding: "0.5rem 1rem",
// //               borderRadius: "6px",
// //               cursor: "pointer",
// //               marginRight: "0.5rem",
// //             }}
// //           >
// //             🔁 Reverse
// //           </button>

// //           <button
// //             onClick={refreshNow}
// //             style={{
// //               background: "#28a745",
// //               color: "white",
// //               border: "none",
// //               padding: "0.5rem 1rem",
// //               borderRadius: "6px",
// //               cursor: "pointer",
// //             }}
// //           >
// //             🔄 Refresh
// //           </button>

// //           <p style={{ fontSize: "0.9rem", color: "#555", marginTop: "0.8rem" }}>
// //             1 JPY = <strong>{rate?.toFixed(2)} NPR</strong>
// //           </p>

// //           {lastUpdated && (
// //             <p style={{ fontSize: "0.8rem", color: "#888" }}>
// //               ⏱ Last updated: {lastUpdated.toLocaleTimeString()}
// //             </p>
// //           )}

// //           <p style={{ fontSize: "0.8rem", color: "#999", marginTop: "0.3rem" }}>
// //             * Rates auto-refresh every 5 minutes.
// //           </p>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default CurrencyConverter;
// // "use client";
// // import React, { useEffect, useState } from "react";

// // const CurrencyConverter: React.FC = () => {
// //   const [amount, setAmount] = useState(1000);
// //   const [converted, setConverted] = useState(0);
// //   const [rate, setRate] = useState<number | null>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
// //   const [reverse, setReverse] = useState(false); // false = JPY→NPR, true = NPR→JPY

// //   const fetchRate = async () => {
// //     try {
// //       setLoading(true);
// //       const res = await fetch("https://api.exchangerate.host/latest?base=JPY&symbols=NPR");
// //       const data = await res.json();
// //       const newRate = data.rates?.NPR || 0.88;
// //       setRate(newRate);
// //       updateConversion(amount, newRate, reverse);
// //       setLastUpdated(new Date());
// //     } catch (err) {
// //       console.error("Failed to fetch exchange rate:", err);
// //       setRate(0.88);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const updateConversion = (value: number, rateValue: number | null, isReversed: boolean) => {
// //     if (!rateValue) return;
// //     const result = isReversed ? value / rateValue : value * rateValue;
// //     setConverted(Number(result.toFixed(2)));
// //   };

// //   useEffect(() => {
// //     fetchRate();
// //     const interval = setInterval(fetchRate, 5 * 60 * 1000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const value = Number(e.target.value);
// //     setAmount(value);
// //     if (rate) updateConversion(value, rate, reverse);
// //   };

// //   const toggleReverse = () => {
// //     setReverse(!reverse);
// //     if (rate) updateConversion(converted, rate, !reverse);
// //   };

// //   const refreshNow = () => {
// //     fetchRate();
// //   };

// //   return (
// //     <div
// //       style={{
// //         marginBottom: "2rem",
// //         textAlign: "center",
// //         backgroundColor: "var(--bg)",
// //         color: "var(--text)",
// //         padding: "1rem",
// //         borderRadius: "12px",
// //         transition: "background-color 0.3s ease, color 0.3s ease",
// //       }}
// //     >
// //       <h3 style={{ marginBottom: "1rem", color: "var(--accent)" }}>💱 Currency Converter</h3>

// //       {loading ? (
// //         <p>Loading live exchange rate...</p>
// //       ) : (
// //         <>
// //           <div
// //             style={{
// //               display: "flex",
// //               justifyContent: "center",
// //               alignItems: "center",
// //               gap: "1rem",
// //               marginBottom: "1rem",
// //             }}
// //           >
// //             <span style={{ fontSize: "1.5rem" }}>{reverse ? "🇳🇵" : "🇯🇵"}</span>
// //             <input
// //               type="number"
// //               value={amount}
// //               onChange={handleAmountChange}
// //               style={{
// //                 padding: "0.5rem",
// //                 width: "140px",
// //                 textAlign: "center",
// //                 borderRadius: "6px",
// //                 border: "1px solid var(--border)",
// //                 backgroundColor: "var(--panel)",
// //                 color: "var(--text)",
// //                 transition: "background-color 0.3s ease, color 0.3s ease, border 0.3s ease",
// //               }}
// //             />
// //             <span style={{ fontSize: "1.5rem" }}>➡️</span>
// //             <span style={{ fontSize: "1.5rem" }}>{reverse ? "🇯🇵" : "🇳🇵"}</span>
// //             <input
// //               type="text"
// //               value={converted}
// //               readOnly
// //               style={{
// //                 padding: "0.5rem",
// //                 width: "140px",
// //                 textAlign: "center",
// //                 borderRadius: "6px",
// //                 border: "1px solid var(--border)",
// //                 backgroundColor: "var(--panel)",
// //                 color: "var(--text)",
// //                 transition: "background-color 0.3s ease, color 0.3s ease, border 0.3s ease",
// //               }}
// //             />
// //           </div>

// //           <button
// //             onClick={toggleReverse}
// //             style={{
// //               background: "var(--accent)",
// //               color: "#fff",
// //               border: "none",
// //               padding: "0.5rem 1rem",
// //               borderRadius: "6px",
// //               cursor: "pointer",
// //               marginRight: "0.5rem",
// //               transition: "background-color 0.3s ease",
// //             }}
// //           >
// //             🔁 Reverse
// //           </button>

// //           <button
// //             onClick={refreshNow}
// //             style={{
// //               background: "var(--accent)",
// //               color: "#fff",
// //               border: "none",
// //               padding: "0.5rem 1rem",
// //               borderRadius: "6px",
// //               cursor: "pointer",
// //               transition: "background-color 0.3s ease",
// //             }}
// //           >
// //             🔄 Refresh
// //           </button>

// //           <p style={{ fontSize: "0.9rem", color: "var(--text)", marginTop: "0.8rem", opacity: 0.8 }}>
// //             1 JPY = <strong>{rate?.toFixed(2)} NPR</strong>
// //           </p>

// //           {lastUpdated && (
// //             <p style={{ fontSize: "0.8rem", color: "var(--text)", opacity: 0.6 }}>
// //               ⏱ Last updated: {lastUpdated.toLocaleTimeString()}
// //             </p>
// //           )}

// //           <p style={{ fontSize: "0.8rem", color: "var(--text)", opacity: 0.6, marginTop: "0.3rem" }}>
// //             * Rates auto-refresh every 5 minutes.
// //           </p>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default CurrencyConverter;
// "use client";
// import React, { useEffect, useState } from "react";

// const CurrencyConverter: React.FC = () => {
//   const [amount, setAmount] = useState(1000);
//   const [converted, setConverted] = useState(0);
//   const [rate, setRate] = useState<number | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
//   const [reverse, setReverse] = useState(false); // false = JPY→NPR, true = NPR→JPY

//   const fallbackRate = 0.88;

//   const fetchConversion = async (value: number) => {
//     if (isNaN(value) || value < 0) return;
//     try {
//       setLoading(true);
//       const from = reverse ? "NPR" : "JPY";
//       const to = reverse ? "JPY" : "NPR";

//       const res = await fetch(
//         `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${value}`
//       );
//       const data = await res.json();
//       console.log("API response:", data);

//       const fetchedRate = data?.info?.rate;
//       const fetchedResult = data?.result;

//       if (fetchedRate && fetchedResult !== undefined) {
//         setRate(fetchedRate);
//         setConverted(Number(fetchedResult.toFixed(2)));
//         setLastUpdated(new Date());
//       } else {
//         console.warn("Rate not found, using fallback");
//         setRate(fallbackRate);
//         setConverted(reverse ? value / fallbackRate : value * fallbackRate);
//         setLastUpdated(new Date());
//       }
//     } catch (err) {
//       console.error("Failed to fetch conversion:", err);
//       setRate(fallbackRate);
//       setConverted(reverse ? value / fallbackRate : value * fallbackRate);
//       setLastUpdated(new Date());
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch on mount and every 5 minutes
//   useEffect(() => {
//     fetchConversion(amount);
//     const interval = setInterval(() => fetchConversion(amount), 5 * 60 * 1000);
//     return () => clearInterval(interval);
//   }, [reverse]);

//   const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = Number(e.target.value);
//     setAmount(value);
//     fetchConversion(value); // fetch conversion for new input
//   };

//   const toggleReverse = () => {
//     setReverse(!reverse);
//     fetchConversion(amount); // fetch conversion for current input with new direction
//   };

//   const refreshNow = () => fetchConversion(amount);

//   return (
//     <div
//       style={{
//         marginBottom: "2rem",
//         textAlign: "center",
//         backgroundColor: "var(--bg)",
//         color: "var(--text)",
//         padding: "1rem",
//         borderRadius: "12px",
//         transition: "background-color 0.3s ease, color 0.3s ease",
//       }}
//     >
//       <h3 style={{ marginBottom: "1rem", color: "var(--accent)" }}>💱 Currency Converter</h3>

//       {loading ? (
//         <p>Loading live exchange rate...</p>
//       ) : (
//         <>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               gap: "1rem",
//               marginBottom: "1rem",
//             }}
//           >
//             <span style={{ fontSize: "1.5rem" }}>{reverse ? "🇳🇵" : "🇯🇵"}</span>
//             <input
//               type="number"
//               value={amount}
//               onChange={handleAmountChange}
//               style={{
//                 padding: "0.5rem",
//                 width: "140px",
//                 textAlign: "center",
//                 borderRadius: "6px",
//                 border: "1px solid var(--border)",
//                 backgroundColor: "var(--panel)",
//                 color: "var(--text)",
//               }}
//             />
//             <span style={{ fontSize: "1.5rem" }}>➡️</span>
//             <span style={{ fontSize: "1.5rem" }}>{reverse ? "🇯🇵" : "🇳🇵"}</span>
//             <input
//               type="text"
//               value={converted}
//               readOnly
//               style={{
//                 padding: "0.5rem",
//                 width: "140px",
//                 textAlign: "center",
//                 borderRadius: "6px",
//                 border: "1px solid var(--border)",
//                 backgroundColor: "var(--panel)",
//                 color: "var(--text)",
//               }}
//             />
//           </div>

//           <button
//             onClick={toggleReverse}
//             style={{
//               background: "var(--accent)",
//               color: "#fff",
//               border: "none",
//               padding: "0.5rem 1rem",
//               borderRadius: "6px",
//               cursor: "pointer",
//               marginRight: "0.5rem",
//             }}
//           >
//             🔁 Reverse
//           </button>

//           <button
//             onClick={refreshNow}
//             style={{
//               background: "var(--accent)",
//               color: "#fff",
//               border: "none",
//               padding: "0.5rem 1rem",
//               borderRadius: "6px",
//               cursor: "pointer",
//             }}
//           >
//             🔄 Refresh
//           </button>

//           <p style={{ fontSize: "0.9rem", color: "var(--text)", marginTop: "0.8rem", opacity: 0.8 }}>
//             1 {reverse ? "NPR" : "JPY"} ={" "}
//             <strong>
//               {rate?.toFixed(2)} {reverse ? "JPY" : "NPR"}
//             </strong>
//           </p>

//           {lastUpdated && (
//             <p style={{ fontSize: "0.8rem", color: "var(--text)", opacity: 0.6 }}>
//               ⏱ Last updated: {lastUpdated.toLocaleTimeString()}
//             </p>
//           )}

//           <p style={{ fontSize: "0.8rem", color: "var(--text)", opacity: 0.6, marginTop: "0.3rem" }}>
//             * Rates auto-refresh every 5 minutes.
//           </p>
//         </>
//       )}
//     </div>
//   );
// };

// export default CurrencyConverter;
