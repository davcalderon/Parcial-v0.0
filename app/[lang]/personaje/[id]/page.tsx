
import Image from 'next/image';




async function getCharacter(id:string) {
  const res = await fetch(`https://hp-api.onrender.com/api/character/${id}`);
  //console.log(res)
  return res.json();
  
}



const BorderColorHouses = {
   Gryffindor: 'border-[#740001]',
   Slytherin: 'border-[#1A472A]',
   Ravenclaw: 'border-[#0E1A40]',
   Hufflepuff: 'border-[#FFD800]',
   NoHouse: 'border-[#D1D5DB]',
}

export default async function personaje({params}: { params: Promise<{ id: string }>}){
  const {id} = await params
  const character = (await getCharacter(id))[0]
  console.log("personaje: ", character)

  return(
    <main className="min-h-[575px] flex flex-col overflow-hidden justify-center items-center">
      <h2 className="text-center">{character.name}</h2>
      <div className={`grid grid-cols-1 ${BorderColorHouses[character.house as 'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff' | 'NoHouse']} md:grid-cols-2 border-4 rounded-lg shadow-lg overflow-hidden min-h-[300px] max-w-sm align-center`}>
        <div className="p-8 flex flex-col justify-center">
          <p>{`Casa: ${character.house}`}</p>
          <p>{`Genero: ${character.gender}`}</p>
          <p>{`Varita: ${character.wand.core}`}</p>
          <p>{`Madera: ${character.wand.wood}`}</p>
          <p>{`Longitud: ${character.wand.length}`}</p>
        </div>
        <Image
             src={character.image}
             alt={`Imagen para ${character.name}`}
             width={300} // Usamos dimensiones genéricas para el layout
             height={500}
             className="w-full min-h-[300px] object-cover"
           />
      </div>
    </main>
  )
}
