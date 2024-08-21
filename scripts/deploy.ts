// npx hardhat run scripts/deploy.ts --network tBSC
import { artifacts, ethers } from 'hardhat';
import path from 'path';
import { MainContract, TokenERC20 } from '../typechain-types';

async function main() {
  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    'Deploying the contracts with the account:',
    await deployer.getAddress(),
  );

  console.log('Account balance:', (await deployer.getBalance()).toString());

  const TokenERC20Factory = await ethers.getContractFactory('TokenERC20');
  const tokenERC20 = await TokenERC20Factory.deploy('Test ERC20', 'TERC20');
  await tokenERC20.deployed();

  console.log('Token ERC20 contract deployed to:', tokenERC20.address);

  const MainContractFactory = await ethers.getContractFactory('MainContract');
  const mainContract = await MainContractFactory.deploy(
    tokenERC20.address,
    'My NFT',
    'MNFT',
  );
  await mainContract.deployed();
  console.log('Main Contract deployed to:', mainContract.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(tokenERC20, 'TokenERC20');
  saveFrontendFiles(mainContract, 'MainContract');
}

function saveFrontendFiles(token: TokenERC20 | MainContract, name: string) {
  const fs = require('fs');
  const contractsDir = path.join(
    __dirname,
    '..',
    '..',
    'assignment_3_client',
    'src',
    'contracts',
  );

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, `${name}-address.json`),
    JSON.stringify({ [name]: token.address }, undefined, 2),
  );

  const TokenArtifact = artifacts.readArtifactSync(name);

  fs.writeFileSync(
    path.join(contractsDir, `${name}.json`),
    JSON.stringify(TokenArtifact, null, 2),
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
