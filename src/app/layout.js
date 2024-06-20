import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "./utils/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sales-Focused Marketing",
  description: "Our Objective: Increase Your Revenue",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" style={{ overflowX: "hidden" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <meta property="og:image" content="/final-op-img.png" />
        <meta property="og:image:alt" content="Sales-Focused Marketing" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />{" "}
      </head>

      <body className={inter.className}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
