
import "./globals.css";
import React from "react";

export const metadata = {
  title: "ExamQuest – ЕГЭ Математика",
  description: "Геймифицированная подготовка к ЕГЭ по профильной математике",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <header className="container py-4 flex items-center justify-between">
          <a href="/" className="text-lg font-bold">ExamQuest</a>
          <nav className="flex gap-3 text-sm">
            <a className="badge" href="/play">Играть</a>
            <a className="badge" href="/topics">Темы</a>
            <a className="badge" href="/raid">Рейд</a>
            <a className="badge" href="/profile">Профиль</a>
          </nav>
        </header>
        <main className="container pb-28">{children}</main>
        <footer className="fixed bottom-0 inset-x-0 border-t border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur">
          <div className="container py-3 grid grid-cols-4 text-center text-xs">
            <a href="/play">Играть</a>
            <a href="/topics">Темы</a>
            <a href="/raid">Рейд</a>
            <a href="/profile">Профиль</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
