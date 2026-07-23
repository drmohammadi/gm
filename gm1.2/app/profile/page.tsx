'use client';

import { useAccount } from 'wagmi';
import { formatAddress } from '@/lib/utils';
import { Award, Trophy, Calendar } from 'lucide-react';

export default function Profile() {
  const { address, isConnected } = useAccount();

  if (!isConnected) {
    return <div className="text-center py-20">Connect your wallet first</div>;
  }

  return (
    <div className="min-h-screen bg-zinc-950 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-zinc-900 border border-zinc-700 rounded-3xl p-10">
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl mb-6 flex items-center justify-center text-5xl">
              👤
            </div>
            
            <h1 className="text-3xl font-bold mb-2">My profile</h1>
            <p className="font-mono text-red-400 text-sm mb-8">{formatAddress(address!)}</p>

            <div className="grid grid-cols-3 gap-8 w-full max-w-md text-center">
              <div>
                <div className="text-4xl font-bold text-red-400">27</div>
                <div className="text-sm text-zinc-500">GM</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-400">1350</div>
                <div className="text-sm text-zinc-500">Point</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-400">2</div>
                <div className="text-sm text-zinc-500">NFT</div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <Award className="text-yellow-400" /> My Badges
            </h3>
            {/* NFT cards here */}
          </div>
        </div>
      </div>
    </div>
  );
}