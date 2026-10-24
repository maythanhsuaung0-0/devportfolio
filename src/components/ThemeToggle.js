"use client";

import { useTheme } from "./ThemeProvider";

function MovingSky() {
  return (
    <svg
      className="theme-toggle__sky"
      viewBox="0 0 72 44"
      aria-hidden="true"
      focusable="false"
    >
      <g className="theme-toggle__stars" fill="var(--toggle-cloud)">
        <circle cx="12" cy="12" r="1.5" />
        <circle cx="25" cy="8" r="1" />
        <circle cx="19" cy="31" r="1.25" />
        <circle cx="30" cy="20" r="1" />
      </g>

      <g className="theme-toggle__orb">
        <circle
          className="theme-toggle__sun"
          cx="14"
          cy="19"
          r="10"
          fill="var(--toggle-orb)"
        />
        <path
          className="theme-toggle__moon"
          d="M15 8a13 13 0 1 0 12 19A11.5 11.5 0 0 1 16 8Z"
          fill="var(--toggle-orb)"
        />
      </g>

      <path
        className="theme-toggle__cloud"
        d="M5 34c0-3.1 2.5-5.6 5.6-5.6 1 0 1.9.2 2.7.7a7.5 7.5 0 0 1 14.2 2.1c.6-.2 1.2-.3 1.8-.3 2.7 0 4.9 1.7 5.7 4.1H5.1L5 34Z"
        fill="var(--toggle-cloud)"
      />
      <path
        className="theme-toggle__cloud"
        d="M11 37h20"
        stroke="var(--toggle-detail)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === "day" ? "night" : "day";

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} theme`}
      aria-pressed={theme === "night"}
      title={`Switch to ${nextTheme} theme`}
      data-theme={nextTheme}
    >
      <MovingSky />
    </button>
  );
}
