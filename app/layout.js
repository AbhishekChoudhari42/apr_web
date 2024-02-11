import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Apricity",
  description: "Agency site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="px-4">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
