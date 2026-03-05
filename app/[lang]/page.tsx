import { getDictionary } from "@/lib/dictionary";
import Card from "@/components/card";


async function getCharacters() {
  const res = await fetch('https://hp-api.onrender.com/api/characters');
  return res.json();
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'es' | 'en');

  const characters = await getCharacters();

  console.log(characters)

  return (
  <main  className="flex bg-[#e0e0e0] text-black p-4">
    <h1>{dict.welcome}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

       {characters.map((dato) => (
        <Card
          id={dato.id} // Siempre usa una clave única
          nombre={dato.name}
          imagen={dato.image}
        />
      ))}
      </div>
  </main>
  )
}