'use client';

import Image from 'next/image';
import { Card } from './ui/card';

interface NFTCardProps {
  id: number;
  name: string;
  image: string;
  description: string;
  rarity?: string;
}

export default function NFTCard({ id, name, image, description, rarity }: NFTCardProps) {
  return (
    <Card className="nft-card overflow-hidden bg-zinc-900 border-zinc-700 hover:border-red-500 group">
      <div className="relative h-80">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        {rarity && (
          <div className="absolute top-4 right-4 bg-black/70 text-xs px-3 py-1 rounded-full border border-yellow-400 text-yellow-400">
            {rarity}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-zinc-400 text-sm line-clamp-2">{description}</p>
        
        <div className="mt-6 text-xs font-mono text-zinc-500">
          Token ID: #{id}
        </div>
      </div>
    </Card>
  );
}