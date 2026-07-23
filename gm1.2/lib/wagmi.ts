import { http, createConfig } from 'wagmi';
import { baseSepolia, base } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';

export const config = createConfig({
  chains: [baseSepolia, base],
  connectors: [
    coinbaseWallet({
      appName: 'GM with NFT - Free',
      preference: 'all',
    }),
  ],
  transports: {
    [baseSepolia.id]: http(),
    [base.id]: http(),
  },
});