// This is an example test file. Hardhat will run every *.js file in `test/`,
// so feel free to add new ones.

// Hardhat tests are normally written with Mocha and Chai.

// We import Chai to use its asserting functions here.
const { expect } = require('chai');

// We use `loadFixture` to share common setups (or fixtures) between tests.
// Using this simplifies your tests and makes them run faster, by taking
// advantage or Hardhat Network's snapshot functionality.
const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');

// `describe` is a Mocha function that allows you to organize your tests.
// Having your tests organized makes debugging them easier. All Mocha
// functions are available in the global scope.
//
// `describe` receives the name of a section of your test suite, and a
// callback. The callback must define the tests of that section. This callback
// can't be an async function.
describe('Token contract', function () {
  // We define a fixture to reuse the same setup in every test. We use
  // loadFixture to run this setup once, snapshot that state, and reset Hardhat
  // Network to that snapshot in every test.
  async function deployTokenFixture() {
    // Get the ContractFactory and Signers here.

    const [deployer, ...otherUser] = await ethers.getSigners();
    console.log(
      'Deploying the contracts with the account:',
      await deployer.getAddress(),
    );

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

    // Fixtures can return anything you consider useful for your tests
    return {
      TokenERC20Factory,
      tokenERC20,
      MainContractFactory,
      mainContract,
      deployer,
      otherUser,
    };
  }

  // You can nest describe calls to create subsections.
  describe('Deployment', function () {
    // `it` is another Mocha function. This is the one you use to define your
    // tests. It receives the test name, and a callback function.
    //
    // If the callback function is async, Mocha will `await` it.
    /* it('Should set the right owner', async function () {
      // We use loadFixture to setup our environment, and then assert that
      // things went well
      const {
        TokenERC20Factory,
        tokenERC20,
        MainContractFactory,
        mainContract,
        deployer,
        otherUser,
      } = await loadFixture(deployTokenFixture);

      expect(await tokenERC20.owner()).to.equal(deployer.address);
    }); */

    /* it('Should mint account 1 = 1000 erc20', async function () {
      const { TokenERC20Factory, deployer, tokenERC20, otherUser } =
        await loadFixture(deployTokenFixture);
      console.log('user 1', otherUser[1].address);
      await tokenERC20.mint(otherUser[1].address, 1000);

      const balance = await tokenERC20.balanceOf(otherUser[1].address);
      expect(balance).to.equal(1000);
    }); */

    /* it('Should deposit account 1 = 1000 erc20', async function () {
      const depositAmount = ethers.utils.parseUnits('1000', 18);
      const allowanceAmount = ethers.utils.parseUnits('1000', 18);

      console.log('depositAmount', depositAmount);

      const { mainContract, deployer, tokenERC20, otherUser } =
        await loadFixture(deployTokenFixture);
      console.log('user 1', otherUser[0].address);
      await tokenERC20.mint(otherUser[0].address, depositAmount);

      await tokenERC20
        .connect(otherUser[0])
        .approve(mainContract.address, allowanceAmount);
      await mainContract.connect(otherUser[0]).depositToken(depositAmount);

      const depositOf = await mainContract.depositOf(otherUser[0].address);

      console.log('depositOf', depositOf);
      expect(depositOf.amount).to.equal(ethers.utils.parseUnits('1000', 18));
    }); */

    it('Should deposit account 1 = 1000 erc20', async function () {
      const depositAmount = ethers.utils.parseUnits('1000', 18);
      const allowanceAmount = ethers.utils.parseUnits('1000', 18);

      console.log('depositAmount', depositAmount);

      const { mainContract, deployer, tokenERC20, otherUser } =
        await loadFixture(deployTokenFixture);
      console.log('user 1', otherUser[0].address);
      await tokenERC20.mint(otherUser[0].address, depositAmount);

      await tokenERC20
        .connect(otherUser[0])
        .approve(mainContract.address, allowanceAmount);
      await mainContract.connect(otherUser[0]).depositToken(depositAmount);

      const depositOf = await mainContract.depositOf(otherUser[0].address);

      console.log('depositOf', depositOf);
      expect(depositOf.amount).to.equal(ethers.utils.parseUnits('1000', 18));
    });
  });

  /* describe('Transactions', function () {
    it('Should transfer tokens between accounts', async function () {
      const { hardhatToken, owner, addr1, addr2 } =
        await loadFixture(deployTokenFixture);
      // Transfer 50 tokens from owner to addr1
      await expect(
        hardhatToken.transfer(addr1.address, 50),
      ).to.changeTokenBalances(hardhatToken, [owner, addr1], [-50, 50]);

      // Transfer 50 tokens from addr1 to addr2
      // We use .connect(signer) to send a transaction from another account
      await expect(
        hardhatToken.connect(addr1).transfer(addr2.address, 50),
      ).to.changeTokenBalances(hardhatToken, [addr1, addr2], [-50, 50]);
    });

    it('should emit Transfer events', async function () {
      const { hardhatToken, owner, addr1, addr2 } =
        await loadFixture(deployTokenFixture);

      // Transfer 50 tokens from owner to addr1
      await expect(hardhatToken.transfer(addr1.address, 50))
        .to.emit(hardhatToken, 'Transfer')
        .withArgs(owner.address, addr1.address, 50);

      // Transfer 50 tokens from addr1 to addr2
      // We use .connect(signer) to send a transaction from another account
      await expect(hardhatToken.connect(addr1).transfer(addr2.address, 50))
        .to.emit(hardhatToken, 'Transfer')
        .withArgs(addr1.address, addr2.address, 50);
    });

    it("Should fail if sender doesn't have enough tokens", async function () {
      const { hardhatToken, owner, addr1 } =
        await loadFixture(deployTokenFixture);
      const initialOwnerBalance = await hardhatToken.balanceOf(owner.address);

      // Try to send 1 token from addr1 (0 tokens) to owner (1000 tokens).
      // `require` will evaluate false and revert the transaction.
      await expect(
        hardhatToken.connect(addr1).transfer(owner.address, 1),
      ).to.be.revertedWith('Not enough tokens');

      // Owner balance shouldn't have changed.
      expect(await hardhatToken.balanceOf(owner.address)).to.equal(
        initialOwnerBalance,
      );
    });
  }); */
});
