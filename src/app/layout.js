// src/app/layout.js

import './globals.css'; 
import { Inter } from 'next/font/google'; 

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-semibold mb-6">To-Do Application</h1>
          
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
