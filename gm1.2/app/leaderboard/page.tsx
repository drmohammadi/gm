'use client';

import { useState, useEffect } from 'react';
import { Trophy } from 'lucide-react';
import { useAccount } from 'wagmi';

interface LeaderboardEntry {
  rank: number;
  address: string;
  gmCount: number;
  points: number;
  badges: string[];
}

export default function Leaderboard() {
  const { address } = useAccount();
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  
  useEffect(() => {
    setLeaderboard([
      { rank: 1, address: "0x1234...abcd", gmCount: 42, points: 2100, badges: ["Legend"] },
      { rank: 2, address: "0x5678...efgh", gmCount: 31, points: 1550, badges: ["Starter"] },
      { rank: 3, address: "0x9abc...ijkl", gmCount: 25, points: 1250, badges: [] },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <Trophy className="w-10 h-10 text-yellow-400" />
          <h1 className="text-5xl font-bold">GM Leaderboard</h1>
        </div>

        <div className="bg-zinc-900/70 border border-zinc-700 rounded-3xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-zinc-800 border-b border-zinc-700">
              <tr>
                <th className="px-8 py-5 text-left">Rank</th>
                <th className="px-8 py-5 text-left">Wallet</th>
                <th className="px-8 py-5 text-center">GM</th>
                <th className="px-8 py-5 text-center">Points</th>
                <th className="px-8 py-5 text-center">Badges</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry) => (
                <tr key={entry.rank} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                  <td className="px-8 py-6 font-mono text-xl">#{entry.rank}</td>
                  <td className="px-8 py-6 font-mono text-sm text-zinc-400">{entry.address}</td>
                  <td className="px-8 py-6 text-center font-semibold">{entry.gmCount}</td>
                  <td className="px-8 py-6 text-center text-red-400 font-bold">{entry.points}</td>
                  <td className="px-8 py-6 text-center">
                    {entry.badges.map(b => (
                      <span key={b} className="inline-block bg-red-500/20 text-red-400 text-xs px-3 py-1 rounded-full mx-1">
                        {b}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}