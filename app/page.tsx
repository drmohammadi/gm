'use client';

import { useAccount } from 'wagmi';
import ConnectWallet from '@/components/ConnectWallet';
import GMButton from '@/components/GMButton';
import { Trophy, Users, Award } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const { isConnected, address } = useAccount();

  return (
    <main className="min-h-screen bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-white">GM with NFT</h1>
            <p className="text-red-500 mt-2 text-xl">Free Daily GM • NFTs & Badges</p>
          </div>
          <ConnectWallet />
        </div>

        {/* Hero */}
        <div className="text-center py-16 border-b border-zinc-800">
          <div className="mx-auto w-24 h-24 bg-red-500/10 rounded-3xl flex items-center justify-center mb-8">
            <span className="text-6xl">👋</span>
          </div>
          
          <h2 className="text-6xl font-bold mb-6 tracking-tighter">
            Daily GM <br />Free NFT 
          </h2>
          
          <p className="text-xl text-zinc-400 max-w-md mx-auto mb-10">
            Send your daily GM, earn points, and unlock the Starter and Legend Badges.
          </p>

          {isConnected ? (
            <GMButton />
          ) : (
            <div className="text-zinc-500 text-lg">Connect your wallet first</div>
          )}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
            <Trophy className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">leaderboard</h3>
            <p className="text-zinc-400">GM Points</p>
          </div>
          
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
            <Award className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Special Badges</h3>
            <p className="text-zinc-400">Starter and Legend After 3 and 5 GM </p>
          </div>
          
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
            <Users className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Free</h3>
            <p className="text-zinc-400">Free on Base</p>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <Link href="/leaderboard" className="text-red-500 hover:underline flex items-center gap-2">
            ← leaderboard
          </Link>
          <Link href="/badges" className="text-red-500 hover:underline flex items-center gap-2">
            Badges →
          </Link>
        </div>
      </div>
    </main>
  );
}