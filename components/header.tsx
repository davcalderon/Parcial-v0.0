
import Link from "next/link";
import Image from 'next/image'; 
import Language from './language';




function Header({ dict }: { dict: { "logo": string, "name": string, "ini": string, "about": string, "contact": string} }) {
  
  return (
    <header className="bg-[#FDB608] text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex">
          {/* We use Image for our logo */}
          <Image
            src="https://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png"
            alt="App's logo"
            width={200}
            height={60}
          />
          
        </Link>
        <nav className="flex flex-row">
          <Link href="/" className="px-3 hover:text-gray-300">{dict.ini}</Link>
          <Link href="/acerca" className="px-3 hover:text-gray-300">{dict.about}</Link>
          <Link href="/contacto" className="px-3 hover:text-gray-300">{dict.contact}</Link>
          <Language/>
        </nav>
      </div>
    </header>

  );
};

export default Header;