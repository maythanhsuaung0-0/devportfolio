import "../styles/globals.css";
import Navbar from "../components/Navbar";
import CursorSparkles from "../components/CursorSparkles";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata = {
  title: "May Than Hsu — Frontend & Fullstack Developer",
  description: "The projects, experience, and education of May Than Hsu, a frontend and fullstack developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <CursorSparkles />
        </ThemeProvider>
      </body>
    </html>
  );
}
