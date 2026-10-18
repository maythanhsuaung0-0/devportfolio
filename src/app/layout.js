import "../styles/globals.css";
import Navbar from "../components/Navbar";
import CursorSparkles from "../components/CursorSparkles";

export const metadata = {
  title: "May Than Hsu — Frontend & Fullstack Developer",
  description: "The projects, experience, and education of May Than Hsu, a frontend and fullstack developer.",
};

export const viewport = {
  themeColor: "#FF90B3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <CursorSparkles />
      </body>
    </html>
  );
}
