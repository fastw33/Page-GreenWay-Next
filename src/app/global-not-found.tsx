import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { NotFoundExperience } from "@/components/global/NotFoundExperience";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-brand",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  description:
    "404 page for Green Way International industrial metal recovery routes.",
  robots: {
    follow: false,
    index: false,
  },
  title: "404 | Green Way International",
};

export default function GlobalNotFound() {
  return (
    <html className={montserrat.variable} lang="es">
      <body>
        <NotFoundExperience locale="es" />
      </body>
    </html>
  );
}
