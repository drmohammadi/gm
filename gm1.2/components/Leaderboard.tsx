'use client';

import { Trophy } from 'lucide-react';

export default function Leaderboard() {
 
  return (
    <div className="p-8 bg-zinc-900 rounded-3xl">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="text-yellow-400" />
        <h3 className="text-2xl font-bold">Leaderboard</h3>
      </div>
      {/* leaderboard */}
    </div>
  );
}