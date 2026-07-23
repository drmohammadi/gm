'use client';

import { useState } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';
import { toast } from 'sonner';
import { Loader2, Clock } from 'lucide-react';
import dayjs from 'dayjs';
import { GM_CONTRACT_ADDRESS, GM_ABI } from '@/lib/contract';

export default function GMButton() {
  const { address } = useAccount();
  const [isLoading, setIsLoading] = useState(false);
  const [nextGMTime, setNextGMTime] = useState<Date | null>(null);

  const { writeContract, data: hash } = useWriteContract();
  const { isLoading: isConfirming } = useWaitForTransactionReceipt({ hash });

  const handleGM = async () => {
    if (!address) return;

    setIsLoading(true);
    try {
      await writeContract({
        address: GM_CONTRACT_ADDRESS,
        abi: GM_ABI,
        functionName: 'gm',
      });
      
      toast.success("GM Submited 🎉", {
        description: "On chain confirming...",
      });
    } catch (error: any) {
      toast.error("error", { description: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  const isDisabled = isLoading || isConfirming;

  return (
    <button
      onClick={handleGM}
      disabled={isDisabled}
      className="gm-button mx-auto block bg-red-600 hover:bg-red-700 text-white text-2xl font-bold px-16 py-8 rounded-3xl disabled:opacity-70"
    >
      {isLoading || isConfirming ? (
        <span className="flex items-center gap-3">
          <Loader2 className="animate-spin" /> Loading
        </span>
      ) : (
        "👋 GM !"
      )}
    </button>
  );
}