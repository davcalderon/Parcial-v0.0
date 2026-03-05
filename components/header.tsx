import React from 'react';
import Link from "next/link";
import Image from 'next/image'; 

function Header({ dict }: { dict: { "logo": string,
  "name": string,
  "ini": string,
  "about": string,
  "contact": string} }) {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">{dict.logo}</h1>
        <Link href="/" className="flex items-center space-x-2">
          {/* We use Image for our logo */}
          <Image
            src="/vercel.svg"
            alt="App's logo"
            width={90}
            height={60}
          />
          <span className="text-xl font-bold">{dict.name}</span>
        </Link>
        <nav>
          <Link href="/" className="px-3 hover:text-gray-300">{dict.ini}</Link>
          <Link href="/acerca" className="px-3 hover:text-gray-300">{dict.about}</Link>
          <Link href="/contacto" className="px-3 hover:text-gray-300">{dict.contact}</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;