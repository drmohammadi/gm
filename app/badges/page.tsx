'use client';

import NFTCard from '@/components/NFTCard';

export default function Badges() {
  const badges = [
    {
      id: 1,
      name: "GM Starter Badge",
      image: "https://picsum.photos/id/1015/400/400",
      description: "After 3 daily GM",
      rarity: "Common"
    },
    {
      id: 2,
      name: "GM Legend Badge",
      image: "https://picsum.photos/id/106/400/400",
      description: "After 5 daily GM",
      rarity: "Legendary"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">GM Badges</h1>
        <p className="text-center text-zinc-400 mb-12">NFTs You Earn by Sending GM</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge) => (
            <NFTCard key={badge.id} {...badge} />
          ))}
        </div>
      </div>
    </div>
  );
}