import {ethers} from 'ethers';
import tokens from './tokenABI.json';

// -----------------------

/* main net BNB
 * - https://etherscan.io/token/0xB8c77482e45F1F44dE1745F52C74426C631bDD52
 * - 0xB8c77482e45F1F44dE1745F52C74426C631bDD52
 */
export const makeContract = (
  eoAddress: string,
  web3Provider: ethers.providers.Web3Provider,
  scAddress: string = '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
) => {
  const signer = web3Provider.getSigner(eoAddress);
  return new ethers.Contract(scAddress, tokens, signer);
};

export const makeDaiContract = (
  eoAddress: string | undefined,
  web3Provider: Web3Provider,
) => {
  /* ethers.js v5.7
   *  - https://docs.ethers.org/v5/getting-started/#getting-started--contracts
   *  - main net
   *  -
   */
  const daiAddress = 'dai.tokens.ethers.eth';
  const daiAbi = [
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function balanceOf(address) view returns (uint)', // Get the account balance
    'function transfer(address to, uint amount)', // Send some of your tokens to someone else
    'event Transfer(address indexed from, address indexed to, uint amount)', // An event triggered whenever anyone transfers to someone else
  ];

  const daiContract = new ethers.Contract(
    daiAddress,
    daiAbi,
    makeSigner(eoAddress, web3Provider),
  );
  return daiContract;
};

const makeSigner = (
  eoAddress: string,
  web3Provider: ethers.providers.Web3Provider,
) => {
  return web3Provider.getSigner(eoAddress);
};

// -----------------------
export const getContractName = async (contract: ethers.Contract) => {
  console.log(contract);
  let info = {name: 'none'};
  if (contract) {
    const name = await contract.name();
    info = {name};
    console.log(`tokenInfo=`, info);
    return info;
  } else {
    console.warn(`tokenInfo=`, info);
    return info;
  }
};

export const getContractFullInfo = async (contract: ethers.Contract) => {
  console.log(contract);
  let info = {
    name: 'none',
    symbol: 'none',
    decimals: 18,
    totalSupply: '0',
    owner: 'none',
  };

  if (contract) {
    const name = await contract.name();
    const symbol = await contract.symbol();
    const decimals = contract.decimals ? await contract.decimals() : 18;
    const totalSupply = contract.totalSupply
      ? await contract.totalSupply()
      : '0';
    const owner = contract.owner ? await contract.owner() : 'none';

    info = {
      name,
      symbol,
      decimals,
      totalSupply: ethers.utils.formatUnits(totalSupply, decimals),
      owner,
    };
    console.log(`tokenInfo=`, info);
    return info;
  } else {
    console.warn(`tokenInfo=`, info);
    return info;
  }
};
