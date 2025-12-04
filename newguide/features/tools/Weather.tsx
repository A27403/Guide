
// "use client";
// import React, { useState } from "react";

// const Weather: React.FC = () => {
//   const [city, setCity] = useState("Tokyo");
//   const [weather, setWeather] = useState<string | null>(null);
//   const [imageUrl, setImageUrl] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const fetchWeather = async () => {
//     setLoading(true);
//     setError("");
//     try {
//       // 1️⃣ Get coordinates
//       const geoRes = await fetch(
//         `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
//           city
//         )}`
//       );
//       const geoData = await geoRes.json();
//       if (!geoData.results || geoData.results.length === 0) {
//         setError("City not found");
//         setWeather(null);
//         setLoading(false);
//         return;
//       }
//       const { latitude, longitude, country } = geoData.results[0];

//       // 2️⃣ Fetch weather data
//       const weatherRes = await fetch(
//         `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
//       );
//       const weatherData = await weatherRes.json();

//       const temp = weatherData.current_weather.temperature;
//       const condition = weatherData.current_weather.weathercode;

//       // 3️⃣ Map condition → description + image
//       const weatherMap: Record<
//         number,
//         { desc: string; img: string }
//       > = {
//         0: { desc: "☀️ Clear sky", img: "https://source.unsplash.com/featured/?clear-sky" },
//         1: { desc: "🌤️ Mainly clear", img: "https://source.unsplash.com/featured/?sunny" },
//         2: { desc: "⛅ Partly cloudy", img: "https://source.unsplash.com/featured/?cloudy" },
//         3: { desc: "☁️ Overcast", img: "https://source.unsplash.com/featured/?overcast" },
//         45: { desc: "🌫️ Fog", img: "https://source.unsplash.com/featured/?fog" },
//         48: { desc: "🌫️ Rime fog", img: "https://source.unsplash.com/featured/?mist" },
//         51: { desc: "🌦️ Light drizzle", img: "https://source.unsplash.com/featured/?drizzle" },
//         61: { desc: "🌧️ Rain", img: "https://source.unsplash.com/featured/?rain" },
//         71: { desc: "❄️ Snow", img: "https://source.unsplash.com/featured/?snow" },
//         95: { desc: "⛈️ Thunderstorm", img: "https://source.unsplash.com/featured/?thunderstorm" },
//       };

//       const weatherInfo = weatherMap[condition] || {
//         desc: "🌍 Weather data",
//         img: "https://source.unsplash.com/featured/?weather",
//       };

//       setWeather(`${weatherInfo.desc}, ${temp}°C (${country})`);
//       setImageUrl(weatherInfo.img);
//     } catch (err) {
//       setError("Failed to fetch weather data");
//       setWeather(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       style={{
//         marginBottom: "2rem",
//         padding: "1rem",
//         borderRadius: "12px",
//         backgroundColor: "#f0f4ff",
//         textAlign: "center",
//       }}
//     >
//       <h3>🌦️ Live Weather</h3>
//       <div>
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter city (e.g. Tokyo, Kathmandu)"
//           style={{ padding: "0.5rem", borderRadius: "8px" }}
//         />
//         <button
//           onClick={fetchWeather}
//           style={{
//             padding: "0.5rem 1rem",
//             marginLeft: "1rem",
//             background: "#2563eb",
//             color: "#fff",
//             borderRadius: "8px",
//             border: "none",
//           }}
//         >
//           Get Weather
//         </button>
//       </div>

//       {loading && <p>Loading weather data...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {weather && (
//         <div style={{ marginTop: "1rem" }}>
//           <p style={{ fontSize: "1.1rem" }}>{weather}</p>
//           {imageUrl && (
//             <img
//               src={imageUrl}
//               alt="Weather condition"
//               style={{
//                 marginTop: "1rem",
//                 width: "100%",
//                 maxWidth: "400px",
//                 borderRadius: "12px",
//               }}
//             />
//           )}
//         </div>
//       )}

//       <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "1rem" }}>
//         * Live data by Open-Meteo + Unsplash
//       </p>
//     </div>
//   );
// };

// export default Weather;
"use client";
import React, { useState } from "react";

const Weather: React.FC = () => {
  const [city, setCity] = useState("Tokyo");
  const [weather, setWeather] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    setLoading(true);
    setError("");
    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`
      );
      const geoData = await geoRes.json();
      if (!geoData.results || geoData.results.length === 0) {
        setError("City not found");
        setWeather(null);
        setLoading(false);
        return;
      }
      const { latitude, longitude, country } = geoData.results[0];

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      const temp = weatherData.current_weather.temperature;
      const condition = weatherData.current_weather.weathercode;

      const weatherMap: Record<number, { desc: string; img: string }> = {
        0: { desc: "☀️ Clear sky", img: "https://source.unsplash.com/featured/?clear-sky" },
        1: { desc: "🌤️ Mainly clear", img: "https://source.unsplash.com/featured/?sunny" },
        2: { desc: "⛅ Partly cloudy", img: "https://source.unsplash.com/featured/?cloudy" },
        3: { desc: "☁️ Overcast", img: "https://source.unsplash.com/featured/?overcast" },
        45: { desc: "🌫️ Fog", img: "https://source.unsplash.com/featured/?fog" },
        48: { desc: "🌫️ Rime fog", img: "https://source.unsplash.com/featured/?mist" },
        51: { desc: "🌦️ Light drizzle", img: "https://source.unsplash.com/featured/?drizzle" },
        61: { desc: "🌧️ Rain", img: "https://source.unsplash.com/featured/?rain" },
        71: { desc: "❄️ Snow", img: "https://source.unsplash.com/featured/?snow" },
        95: { desc: "⛈️ Thunderstorm", img: "https://source.unsplash.com/featured/?thunderstorm" },
      };

      const weatherInfo = weatherMap[condition] || {
        desc: "🌍 Weather data",
        img: "https://source.unsplash.com/featured/?weather",
      };

      setWeather(`${weatherInfo.desc}, ${temp}°C (${country})`);
      setImageUrl(weatherInfo.img);
    } catch {
      setError("Failed to fetch weather data");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        marginBottom: "2rem",
        padding: "1rem",
        borderRadius: "12px",
        backgroundColor: "var(--panel)",
        color: "var(--text)",
        textAlign: "center",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <h3 style={{ color: "var(--accent)" }}>🌦️ Live Weather</h3>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center", marginBottom: "1rem" }}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city (e.g. Tokyo, Kathmandu)"
          style={{
            padding: "0.5rem",
            borderRadius: "6px",
            border: "1px solid var(--border)",
            backgroundColor: "var(--bg)",
            color: "var(--text)",
            flex: "1 1 150px",
            transition: "all 0.3s ease",
          }}
        />
        <button
          onClick={fetchWeather}
          style={{
            padding: "0.5rem 1rem",
            background: "var(--accent)",
            color: "var(--bg)",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            flex: "0 0 auto",
          }}
        >
          Get Weather
        </button>
      </div>

      {loading && <p>Loading weather data...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: "1rem" }}>
          <p style={{ fontSize: "1.1rem" }}>{weather}</p>
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Weather condition"
              style={{ marginTop: "1rem", width: "100%", maxWidth: "400px", borderRadius: "12px" }}
            />
          )}
        </div>
      )}

      <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "1rem" }}>
        * Live data by Open-Meteo + Unsplash
      </p>
    </div>
  );
};

export default Weather;
