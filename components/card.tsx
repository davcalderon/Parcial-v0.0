import React from 'react';
import Image from 'next/image';


interface CardProps {
  title: string;
  imageUrl: string;
  house: 'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff' | 'NoHouse';
}

const BgColorHouses = {
   Gryffindor: 'bg-[#740001]',
   Slytherin: 'bg-[#1A472A]',
   Ravenclaw: 'bg-[#0E1A40]',
   Hufflepuff: 'bg-[#FFD800]',
   NoHouse: 'bg-[#D1D5DB]',
}

const BorderColorHouses = {
   Gryffindor: 'border-[#740001]',
   Slytherin: 'border-[#1A472A]',
   Ravenclaw: 'border-[#0E1A40]',
   Hufflepuff: 'border-[#FFD800]',
   NoHouse: 'border-[#D1D5DB]',
}


const Card = ({ title, imageUrl, house }: CardProps) => {

  //const color=house
  return (
    <div className={`${BgColorHouses[house]} ${BorderColorHouses[house]} border-4 rounded-lg shadow-lg overflow-hidden max-w-sm`}>
      {/* 3. We use props to render dynamic content. */}
      <div>
        <h4 className={`text-white font-bold`}>{title}</h4>
      </div>
      <Image
        src={imageUrl}
        alt={`Imagen para ${title}`}
        width={600} // Usamos dimensiones genéricas para el layout
        height={300}
        className="w-full h-48 object-cover"
      />
    </div>
  );
};

export default Card;