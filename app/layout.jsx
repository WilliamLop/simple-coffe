import { DM_Sans } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Simple coffe | listing",
  description: "Site web of coffe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sans.className} bg-black`}>
          {children}        
      </body>
    </html>
  );
}
