// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { Sun, Moon, Menu, X } from "lucide-react";

// const Navbar: React.FC = () => {
//   const [theme, setTheme] = useState<"light" | "dark">("light");
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//   }, [theme]);

//   return (
//     <nav className="navbar">
//       <div className="nav-container">
//         <h1 className="logo">🇳🇵 Nepalese Guide</h1>

//         <button
//           className="menu-toggle"
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle menu"
//         >
//           {open ? <X /> : <Menu />}
//         </button>

//         <ul className={`nav-links ${open ? "open" : ""}`}>
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/lessons">Lessons</Link></li>
//           {/* <li><Link href="/conversation">Conversation</Link></li> */}
//           {/* <li><Link href="/etiquette">Etiquette</Link></li> */}
//           <li><Link href="/survival">Survival</Link></li>
//           {/* <li><Link href="/community">Community</Link></li> */}
//           <li><Link href="/tools">Tools</Link></li>
//           <li><Link href="/news">News</Link></li>
//           <li><Link href="/search">Search</Link></li>
//           <li><Link href="/login">Login</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.setAttribute(
    "data-theme",
    theme === "light" ? "dark" : "light"
  );
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">
          <Link href="/">
            Nepalese Guide
          </Link>
        </h1>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? <Moon /> : <Sun />}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><Link href="/">Home</Link></li>
           <li><Link href="/survival">Survival</Link></li>
          <li><Link href="/lessons">Lessons</Link></li>
         
          <li><Link href="/tools">Tools</Link></li>
          <li><Link href="/news">News</Link></li>
          <li><Link href="/search">Search</Link></li>
          <li><Link href="/login">Login</Link></li>
        </ul>
      </div>

      <style jsx>{`
        :root {
          --bg-light: #ffffff;
          --text-light: #111111;
          --bg-dark: #0b0b0b;
          --text-dark: #f5f5f5;
          --accent: #007aff;
          --radius: 8px;
          --shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        /* Theme Variables */
        [data-theme="light"] {
          --bg: var(--bg-light);
          --text: var(--text-light);
          --logo-color: #111111;
        }

        [data-theme="dark"] {
          --bg: var(--bg-dark);
          --text: var(--text-dark);
          --logo-color: #ffffff;
        }

        /* Navbar Styles */
        .navbar {
          background: var(--bg);
          color: var(--text);
          padding: 1rem 2rem;
          box-shadow: var(--shadow);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Logo */
        .logo a {
          font-weight: 700;
          font-size: 1.5rem;
          text-decoration: none;
          color: var(--logo-color);
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .logo a:hover {
          transform: scale(1.1) rotate(-2deg);
          color: var(--accent);
        }

        /* Nav Links */
        .nav-links {
          display: flex;
          gap: 1rem;
          list-style: none;
        }

        .nav-links li a {
          color: var(--text);
          text-decoration: none;
          padding: 6px 12px;
          border-radius: var(--radius);
          transition: all 0.2s ease;
        }

        .nav-links li a:hover {
          background: var(--accent);
          color: #fff;
          transform: translateY(-2px);
        }

        /* Actions */
        .nav-actions {
          display: flex;
          gap: 0.6rem;
          align-items: center;
        }

        .theme-toggle,
        .menu-toggle {
          background: none;
          border: 1px solid var(--text);
          color: var(--text);
          padding: 6px;
          border-radius: var(--radius);
          cursor: pointer;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .menu-toggle {
            display: inline-flex;
          }

          .nav-links {
            position: absolute;
            top: 64px;
            left: 0;
            right: 0;
            flex-direction: column;
            align-items: center;
            background: var(--bg);
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease, padding 0.3s ease;
          }

          .nav-links.open {
            max-height: 300px;
            padding: 1rem 0;
          }

          .nav-links li {
            margin: 8px 0;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
