import "./globals.css";
import Navbar from "@/components/Navbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-baseTheme">
        <Navbar/>
        {children}</body>
    </html>
  );
}
