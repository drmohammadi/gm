'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Button } from './ui/button';
import { Wallet } from 'lucide-react';

export default function ConnectWallet() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const coinbaseConnector = connectors.find(c => c.name.includes('Coinbase'));

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-3">
        <div className="font-mono text-sm bg-zinc-900 px-4 py-2 rounded-full">
          {address.slice(0, 6)}...{address.slice(-4)}
        </div>
        <Button variant="outline" size="sm" onClick={() => disconnect()}>
          قطع
        </Button>
      </div>
    );
  }

  return (
    <Button 
      onClick={() => coinbaseConnector && connect({ connector: coinbaseConnector })}
      className="bg-white text-black hover:bg-zinc-200"
    >
      <Wallet className="mr-2" /> connect wallet
    </Button>
  );
}