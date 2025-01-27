import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Magody Portfolio',
  description: 'Projects portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-gray-900 text-white">
        <header className="w-full bg-black p-4 flex justify-between items-center">
          <a href="/" className="text-cyan-400 text-2xl font-bold">
            Magody — Portfolio
          </a>

          <nav className="flex space-x-4">
  <a
    href="/"
    className="bg-gray-700 text-gray-300 hover:bg-cyan-500 hover:text-white transition-colors px-4 py-2 rounded-md"
  >
    Home
  </a>
  <a
    href="/projects"
    className="bg-gray-700 text-gray-300 hover:bg-cyan-500 hover:text-white transition-colors px-4 py-2 rounded-md"
  >
    Projects
  </a>
  <a
    href="/easter_egg"
    className="bg-gray-700 text-gray-300 hover:bg-cyan-500 hover:text-white transition-colors px-4 py-2 rounded-md"
  >
    Thoughts
  </a>
</nav>
        </header>
        <main className="p-6">
          {children}
        </main>
        <footer className="w-full bg-black p-4 text-center text-sm text-cyan-400">
          Thanks for visiting my portfolio. Remember to click on 'Thoughts' section 😉
        </footer>
      </body>
    </html>
  );
}
