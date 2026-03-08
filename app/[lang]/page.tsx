import { getDictionary } from "@/lib/dictionary";
import Card from "@/components/card";
import Link from 'next/link';

async function getCharacters() {
  const res = await fetch('https://hp-api.onrender.com/api/characters');
  return res.json();
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {

  const { lang } = await params;
  const dict = await getDictionary(lang as 'es' | 'en');
  const characters = (await getCharacters()).slice(0,12);

  return (
  <main  className="flex flex-col items-center  bg-[#e0e0e0] text-black p-4">
    <h1>{dict.welcome}</h1>
    <h2 className="center-text text-[#FDB608] font-bold">Personajes de Harry Potter</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {characters.map((dato: { id: string; name: string; image: string; house: string }) => 
        <Link href={`/${lang}/personaje/${dato.id}`} key={dato.id}>
          <Card 
           title={dato.name}
           imageUrl={dato.image}
           house={dato.house as 'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff' | 'NoHouse'}
          />
        </Link>
      )}
      </div>
  </main>
  )
}