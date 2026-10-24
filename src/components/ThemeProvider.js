"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const SHARED_COLOR_VARIABLES = {
  "--transparent": "transparent",
  "--mask-opaque": "#000000",
};

// This is the only place that owns theme colors. Edit either palette here and
// the rest of the site will follow through semantic CSS custom properties.
const COLOR_THEMES = {
  day: {
    colorScheme: "light",
    variables: {
      "--paper": "#fff5f8",
      "--ink": "#3b1726",
      "--secondary": "#795362",
      "--accent": "#f96c98",
      "--accent-hover": "#ff5a8e",
      "--accent-strong": "#9b2750",
      "--accent-strong-hover": "#711837",
      "--selection": "#ffc3d7",
      "--portrait-background": "#fac7e2",
      "--project-rose": "#c7b8ea",
      "--project-blush": "#e3879e",
      "--project-petal": "#fec0ce",
      "--project-hover": "rgb(59 23 38 / 8%)",
      "--project-scrim": "rgb(59 23 38 / 30%)",
      "--toggle-sky": "#27304f",
      "--toggle-orb": "#fff2c7",
      "--toggle-cloud": "#dce4f5",
      "--toggle-detail": "#9db0d6",
    },
  },
  night: {
    colorScheme: "dark",
    variables: {
      "--paper": "#17141b",
      "--ink": "#fff1f5",
      "--secondary": "#c7a5b2",
      "--accent": "#ff78a6",
      "--accent-hover": "#ff91b6",
      "--accent-strong": "#ff9aba",
      "--accent-strong-hover": "#ffc0d4",
      "--selection": "#713149",
      "--portrait-background": "#5d3750",
      "--project-rose": "#45405e",
      "--project-blush": "#643949",
      "--project-petal": "#6b4b55",
      "--project-hover": "rgb(255 241 245 / 10%)",
      "--project-scrim": "rgb(0 0 0 / 58%)",
      "--toggle-sky": "#b8dffc",
      "--toggle-orb": "#ffbd4a",
      "--toggle-cloud": "#f8fbff",
      "--toggle-detail": "#527b9e",
    },
  },
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("day");
  const palette = COLOR_THEMES[theme];
  const variables = useMemo(
    () => ({ ...SHARED_COLOR_VARIABLES, ...palette.variables }),
    [palette],
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = palette.colorScheme;
    Object.entries(variables).forEach(([name, value]) => {
      document.documentElement.style.setProperty(name, value);
    });

    let themeColor = document.querySelector('meta[name="theme-color"]');
    if (!themeColor) {
      themeColor = document.createElement("meta");
      themeColor.name = "theme-color";
      document.head.appendChild(themeColor);
    }
    themeColor.content = palette.variables["--paper"];
  }, [palette, theme, variables]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme(current => (current === "day" ? "night" : "day")),
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>
      <div
        className="theme-root"
        data-theme={theme}
        style={variables}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
}
