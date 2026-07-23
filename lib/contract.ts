import { parseAbi } from 'viem';

export const GM_CONTRACT_ADDRESS = '0x0000000000000000000000000000000000000000'; // بعد از deploy بروزرسانی کن

export const GM_ABI = parseAbi([
  'function gm() external',
  'function tokenURI(uint256 tokenId) external view returns (string)',
  'event GM(address indexed user, uint256 points)',
  'event Mint(address indexed to, uint256 tokenId)',
  'event BadgeMint(address indexed to, string badgeType, uint256 tokenId)',
]);