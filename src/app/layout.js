import "./globals.css";
import LayoutWrapper from "../components/LayoutWrapper";
import "react-phone-input-2/lib/style.css";

export const metadata = {
  title: "Convis AI - AI-powered conversational assistant",
  description:
    "Convis AI is an AI-powered conversational assistant that helps you manage your tasks and projects efficiently.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}