
// // // "use client";
// // // import React, { useState } from "react";

// // // const Weather: React.FC = () => {
// // //   const [city, setCity] = useState("Tokyo");
// // //   const [weather, setWeather] = useState<string | null>(null);
// // //   const [imageUrl, setImageUrl] = useState<string | null>(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState("");

// // //   const fetchWeather = async () => {
// // //     setLoading(true);
// // //     setError("");
// // //     try {
// // //       // 1️⃣ Get coordinates
// // //       const geoRes = await fetch(
// // //         `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
// // //           city
// // //         )}`
// // //       );
// // //       const geoData = await geoRes.json();
// // //       if (!geoData.results || geoData.results.length === 0) {
// // //         setError("City not found");
// // //         setWeather(null);
// // //         setLoading(false);
// // //         return;
// // //       }
// // //       const { latitude, longitude, country } = geoData.results[0];

// // //       // 2️⃣ Fetch weather data
// // //       const weatherRes = await fetch(
// // //         `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
// // //       );
// // //       const weatherData = await weatherRes.json();

// // //       const temp = weatherData.current_weather.temperature;
// // //       const condition = weatherData.current_weather.weathercode;

// // //       // 3️⃣ Map condition → description + image
// // //       const weatherMap: Record<
// // //         number,
// // //         { desc: string; img: string }
// // //       > = {
// // //         0: { desc: "☀️ Clear sky", img: "https://source.unsplash.com/featured/?clear-sky" },
// // //         1: { desc: "🌤️ Mainly clear", img: "https://source.unsplash.com/featured/?sunny" },
// // //         2: { desc: "⛅ Partly cloudy", img: "https://source.unsplash.com/featured/?cloudy" },
// // //         3: { desc: "☁️ Overcast", img: "https://source.unsplash.com/featured/?overcast" },
// // //         45: { desc: "🌫️ Fog", img: "https://source.unsplash.com/featured/?fog" },
// // //         48: { desc: "🌫️ Rime fog", img: "https://source.unsplash.com/featured/?mist" },
// // //         51: { desc: "🌦️ Light drizzle", img: "https://source.unsplash.com/featured/?drizzle" },
// // //         61: { desc: "🌧️ Rain", img: "https://source.unsplash.com/featured/?rain" },
// // //         71: { desc: "❄️ Snow", img: "https://source.unsplash.com/featured/?snow" },
// // //         95: { desc: "⛈️ Thunderstorm", img: "https://source.unsplash.com/featured/?thunderstorm" },
// // //       };

// // //       const weatherInfo = weatherMap[condition] || {
// // //         desc: "🌍 Weather data",
// // //         img: "https://source.unsplash.com/featured/?weather",
// // //       };

// // //       setWeather(`${weatherInfo.desc}, ${temp}°C (${country})`);
// // //       setImageUrl(weatherInfo.img);
// // //     } catch (err) {
// // //       setError("Failed to fetch weather data");
// // //       setWeather(null);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div
// // //       style={{
// // //         marginBottom: "2rem",
// // //         padding: "1rem",
// // //         borderRadius: "12px",
// // //         backgroundColor: "#f0f4ff",
// // //         textAlign: "center",
// // //       }}
// // //     >
// // //       <h3>🌦️ Live Weather</h3>
// // //       <div>
// // //         <input
// // //           type="text"
// // //           value={city}
// // //           onChange={(e) => setCity(e.target.value)}
// // //           placeholder="Enter city (e.g. Tokyo, Kathmandu)"
// // //           style={{ padding: "0.5rem", borderRadius: "8px" }}
// // //         />
// // //         <button
// // //           onClick={fetchWeather}
// // //           style={{
// // //             padding: "0.5rem 1rem",
// // //             marginLeft: "1rem",
// // //             background: "#2563eb",
// // //             color: "#fff",
// // //             borderRadius: "8px",
// // //             border: "none",
// // //           }}
// // //         >
// // //           Get Weather
// // //         </button>
// // //       </div>

// // //       {loading && <p>Loading weather data...</p>}
// // //       {error && <p style={{ color: "red" }}>{error}</p>}

// // //       {weather && (
// // //         <div style={{ marginTop: "1rem" }}>
// // //           <p style={{ fontSize: "1.1rem" }}>{weather}</p>
// // //           {imageUrl && (
// // //             <img
// // //               src={imageUrl}
// // //               alt="Weather condition"
// // //               style={{
// // //                 marginTop: "1rem",
// // //                 width: "100%",
// // //                 maxWidth: "400px",
// // //                 borderRadius: "12px",
// // //               }}
// // //             />
// // //           )}
// // //         </div>
// // //       )}

// // //       <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "1rem" }}>
// // //         * Live data by Open-Meteo + Unsplash
// // //       </p>
// // //     </div>
// // //   );
// // // };

// // // export default Weather;
// // "use client";
// // import React, { useState } from "react";

// // const Weather: React.FC = () => {
// //   const [city, setCity] = useState("Tokyo");
// //   const [weather, setWeather] = useState<string | null>(null);
// //   const [imageUrl, setImageUrl] = useState<string | null>(null);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");

// //   const fetchWeather = async () => {
// //     setLoading(true);
// //     setError("");
// //     try {
// //       const geoRes = await fetch(
// //         `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`
// //       );
// //       const geoData = await geoRes.json();
// //       if (!geoData.results || geoData.results.length === 0) {
// //         setError("City not found");
// //         setWeather(null);
// //         setLoading(false);
// //         return;
// //       }
// //       const { latitude, longitude, country } = geoData.results[0];

// //       const weatherRes = await fetch(
// //         `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
// //       );
// //       const weatherData = await weatherRes.json();

// //       const temp = weatherData.current_weather.temperature;
// //       const condition = weatherData.current_weather.weathercode;

// //       const weatherMap: Record<number, { desc: string; img: string }> = {
// //         0: { desc: "☀️ Clear sky", img: "https://source.unsplash.com/featured/?clear-sky" },
// //         1: { desc: "🌤️ Mainly clear", img: "https://source.unsplash.com/featured/?sunny" },
// //         2: { desc: "⛅ Partly cloudy", img: "https://source.unsplash.com/featured/?cloudy" },
// //         3: { desc: "☁️ Overcast", img: "https://source.unsplash.com/featured/?overcast" },
// //         45: { desc: "🌫️ Fog", img: "https://source.unsplash.com/featured/?fog" },
// //         48: { desc: "🌫️ Rime fog", img: "https://source.unsplash.com/featured/?mist" },
// //         51: { desc: "🌦️ Light drizzle", img: "https://source.unsplash.com/featured/?drizzle" },
// //         61: { desc: "🌧️ Rain", img: "https://source.unsplash.com/featured/?rain" },
// //         71: { desc: "❄️ Snow", img: "https://source.unsplash.com/featured/?snow" },
// //         95: { desc: "⛈️ Thunderstorm", img: "https://source.unsplash.com/featured/?thunderstorm" },
// //       };

// //       const weatherInfo = weatherMap[condition] || {
// //         desc: "🌍 Weather data",
// //         img: "https://source.unsplash.com/featured/?weather",
// //       };

// //       setWeather(`${weatherInfo.desc}, ${temp}°C (${country})`);
// //       setImageUrl(weatherInfo.img);
// //     } catch {
// //       setError("Failed to fetch weather data");
// //       setWeather(null);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div
// //       style={{
// //         marginBottom: "2rem",
// //         padding: "1rem",
// //         borderRadius: "12px",
// //         backgroundColor: "var(--panel)",
// //         color: "var(--text)",
// //         textAlign: "center",
// //         transition: "background-color 0.3s ease, color 0.3s ease",
// //       }}
// //     >
// //       <h3 style={{ color: "var(--accent)" }}>🌦️ Live Weather</h3>

// //       <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center", marginBottom: "1rem" }}>
// //         <input
// //           type="text"
// //           value={city}
// //           onChange={(e) => setCity(e.target.value)}
// //           placeholder="Enter city (e.g. Tokyo, Kathmandu)"
// //           style={{
// //             padding: "0.5rem",
// //             borderRadius: "6px",
// //             border: "1px solid var(--border)",
// //             backgroundColor: "var(--bg)",
// //             color: "var(--text)",
// //             flex: "1 1 150px",
// //             transition: "all 0.3s ease",
// //           }}
// //         />
// //         <button
// //           onClick={fetchWeather}
// //           style={{
// //             padding: "0.5rem 1rem",
// //             background: "var(--accent)",
// //             color: "var(--bg)",
// //             borderRadius: "6px",
// //             border: "none",
// //             cursor: "pointer",
// //             flex: "0 0 auto",
// //           }}
// //         >
// //           Get Weather
// //         </button>
// //       </div>

// //       {loading && <p>Loading weather data...</p>}
// //       {error && <p style={{ color: "red" }}>{error}</p>}

// //       {weather && (
// //         <div style={{ marginTop: "1rem" }}>
// //           <p style={{ fontSize: "1.1rem" }}>{weather}</p>
// //           {imageUrl && (
// //             <img
// //               src={imageUrl}
// //               alt="Weather condition"
// //               style={{ marginTop: "1rem", width: "100%", maxWidth: "400px", borderRadius: "12px" }}
// //             />
// //           )}
// //         </div>
// //       )}

// //       <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "1rem" }}>
// //         * Live data by Open-Meteo + Unsplash
// //       </p>
// //     </div>
// //   );
// // };

// // export default Weather;
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

import { useEffect, useMemo, useState } from "react";
import styles from "./weather.module.css";

type ConditionVisual = {
  label: string;
  emoji: string;
  photo: string;
};

type CurrentSnapshot = {
  temperature: number;
  windSpeed: number;
  code: number;
  time: string;
};

type ForecastDay = {
  date: string;
  max: number;
  min: number;
  code: number;
};

const CONDITION_GROUPS: Array<{ codes: number[]; visual: ConditionVisual }> = [
  {
    codes: [0],
    visual: {
      label: "Clear sky",
      emoji: "☀️",
      photo:
        "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=1600&q=80",
    },
  },
  {
    codes: [1],
    visual: {
      label: "Mainly clear",
      emoji: "🌤️",
      photo:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
    },
  },
  {
    codes: [2],
    visual: {
      label: "Partly cloudy",
      emoji: "⛅",
      photo:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    },
  },
  {
    codes: [3],
    visual: {
      label: "Overcast",
      emoji: "☁️",
      photo:
        "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?auto=format&fit=crop&w=1600&q=80",
    },
  },
  {
    codes: [45, 48],
    visual: {
      label: "Fog",
      emoji: "🌫️",
      photo:
        "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=1600&q=80",
    },
  },
  {
    codes: [51, 53, 55, 56, 57],
    visual: {
      label: "Drizzle",
      emoji: "🌦️",
      photo:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
    },
  },
  {
    codes: [61, 63, 65, 66, 67, 80, 81, 82],
    visual: {
      label: "Rain",
      emoji: "🌧️",
      photo:
        "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?auto=format&fit=crop&w=1600&q=80",
    },
  },
  {
    codes: [71, 73, 75, 77, 85, 86],
    visual: {
      label: "Snow",
      emoji: "❄️",
      photo:
        "https://images.unsplash.com/photo-1428931996691-a5108d4cdbf5?auto=format&fit=crop&w=1600&q=80",
    },
  },
  {
    codes: [95, 96, 99],
    visual: {
      label: "Thunderstorm",
      emoji: "⛈️",
      photo:
        "https://images.unsplash.com/photo-1461511669078-d46bf351cd6e?auto=format&fit=crop&w=1600&q=80",
    },
  },
];

const DEFAULT_VISUAL: ConditionVisual = {
  label: "Weather update",
  emoji: "🌍",
  photo:
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
};

const forecastFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  day: "numeric",
});

const Weather = () => {
  const [cityInput, setCityInput] = useState("Tokyo");
  const [locationLabel, setLocationLabel] = useState("Tokyo, Japan");
  const [current, setCurrent] = useState<CurrentSnapshot | null>(null);
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [visual, setVisual] = useState<ConditionVisual>(DEFAULT_VISUAL);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const description = useMemo(() => {
    if (!current) return "";
    return `${visual.emoji} ${visual.label}`;
  }, [current, visual]);

  const getVisualForCode = (code: number) => {
    return (
      CONDITION_GROUPS.find((group) => group.codes.includes(code))?.visual ||
      DEFAULT_VISUAL
    );
  };

  const fetchWeather = async (query?: string) => {
    const targetCity = (query ?? cityInput).trim();
    if (!targetCity) {
      setError("Please enter a city to search.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          targetCity
        )}&count=1`
      );
      if (!geoResponse.ok) {
        throw new Error("Failed to look up city");
      }
      const geoData = await geoResponse.json();
      const firstResult = geoData.results?.[0];
      if (!firstResult) {
        setError(`No results found for "${targetCity}".`);
        setCurrent(null);
        setForecast([]);
        return;
      }
      const { latitude, longitude, name, country, admin1, timezone } =
        firstResult;

      const weatherUrl = new URL("https://api.open-meteo.com/v1/forecast");
      weatherUrl.searchParams.set("latitude", latitude.toString());
      weatherUrl.searchParams.set("longitude", longitude.toString());
      weatherUrl.searchParams.set("current_weather", "true");
      weatherUrl.searchParams.set(
        "daily",
        "weathercode,temperature_2m_max,temperature_2m_min"
      );
      weatherUrl.searchParams.set("timezone", timezone || "auto");

      const weatherResponse = await fetch(weatherUrl.toString());
      if (!weatherResponse.ok) {
        throw new Error("Failed to fetch forecast");
      }
      const weatherData = await weatherResponse.json();
      const currentWeather = weatherData.current_weather;
      const daily = weatherData.daily;

      if (!currentWeather || !daily) {
        throw new Error("Incomplete weather payload");
      }

      const visualForNow = getVisualForCode(currentWeather.weathercode);

      setCurrent({
        temperature: currentWeather.temperature,
        windSpeed: currentWeather.windspeed,
        code: currentWeather.weathercode,
        time: currentWeather.time,
      });
      setVisual(visualForNow);
      setLocationLabel(
        `${name}${admin1 ? `, ${admin1}` : ""}${country ? `, ${country}` : ""}`
      );

      const nextDays: ForecastDay[] = daily.time
        .slice(0, 5)
        .map((date: string, index: number) => ({
          date,
          max: daily.temperature_2m_max[index],
          min: daily.temperature_2m_min[index],
          code: daily.weathercode[index],
        }));
      setForecast(nextDays);
    } catch (fetchError) {
      console.error(fetchError);
      setError("Unable to reach the weather service right now.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather("Tokyo");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchWeather();
  };

  return (
    <section className={styles.wrapper} aria-live="polite">
      <header
        className={styles.hero}
        style={{ backgroundImage: `url(${visual.photo})` }}
      >
        <div className={styles.heroOverlay}>
          <p className={styles.location}>{locationLabel}</p>
          {current ? (
            <>
              <p className={styles.condition}>{description}</p>
              <p className={styles.temp}>{Math.round(current.temperature)}°C</p>
              <p className={styles.meta}>
                Wind: {Math.round(current.windSpeed)} km/h
              </p>
            </>
          ) : (
            <p className={styles.meta}>
              Search for any city to view live weather.
            </p>
          )}
        </div>
      </header>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.inputLabel} htmlFor="weather-city">
          City
        </label>
        <div className={styles.inputRow}>
          <input
            id="weather-city"
            type="text"
            value={cityInput}
            onChange={(event) => setCityInput(event.target.value)}
            placeholder="Tokyo, Kathmandu, Osaka..."
          />
          <button type="submit" disabled={loading}>
            {loading ? "Searching..." : "Get Weather"}
          </button>
        </div>
      </form>

      {error && <p className={styles.error}>{error}</p>}

      {forecast.length > 0 && (
        <div className={styles.forecast}>
          {forecast.map((day) => {
            const visualForDay = getVisualForCode(day.code);
            return (
              <article key={day.date} className={styles.forecastCard}>
                <p className={styles.forecastDate}>
                  {forecastFormatter.format(new Date(day.date))}
                </p>
                <p className={styles.forecastIcon}>{visualForDay.emoji}</p>
                <p className={styles.forecastLabel}>{visualForDay.label}</p>
                <p className={styles.forecastTemps}>
                  <span>{Math.round(day.max)}°</span>
                  <span className={styles.forecastMin}>
                    {Math.round(day.min)}°
                  </span>
                </p>
              </article>
            );
          })}
        </div>
      )}

      <p className={styles.attribution}>
        Live data • Open‑Meteo × Unsplash imagery
      </p>
    </section>
  );
};

export default Weather;