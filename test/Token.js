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

    const TokenERC721Factory = await ethers.getContractFactory('TokenERC721');
    const tokenERC721 = await TokenERC721Factory.deploy('My NFT', 'MNFT');
    await tokenERC721.deployed();

    console.log('Token ERC721 contract deployed to:', tokenERC721.address);

    const MainContractFactory = await ethers.getContractFactory('MainContract');
    const mainContract = await MainContractFactory.deploy(
      tokenERC20.address,
      tokenERC721.address,
    );
    await mainContract.deployed();
    console.log('Main Contract deployed to:', mainContract.address);

    // Fixtures can return anything you consider useful for your tests
    return {
      TokenERC20Factory,
      tokenERC20,
      TokenERC721Factory,
      tokenERC721,
      MainContractFactory,
      mainContract,
      deployer,
      otherUser,
    };
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
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
        TokenERC721Factory,
        tokenERC721,
        MainContractFactory,
        mainContract,
        deployer,
        otherUser,
      } = await loadFixture(deployTokenFixture);

      const balance = await tokenERC20.balanceOf(deployer.address);
      console.log('balance', balance);

      expect(await tokenERC20.owner()).to.equal(deployer.address);

      expect(await tokenERC721.owner()).to.equal(deployer.address);
    }); */
    /* it('Should mint account 1 = 1000 erc20', async function () {
      const {
        TokenERC20Factory,
        tokenERC20,
        TokenERC721Factory,
        tokenERC721,
        MainContractFactory,
        mainContract,
        deployer,
        otherUser,
      } = await loadFixture(deployTokenFixture);
      console.log('user 1', otherUser[1].address);
      await tokenERC20.mint(otherUser[1].address, 1000);

      const balance = await tokenERC20.balanceOf(otherUser[1].address);
      expect(balance).to.equal(1000);
    }); */
    /* it('Should deposit account 1 = 1000000 erc20 then +1 NFT', async function () {
      const depositAmount = ethers.utils.parseUnits('1000000', 18);
      const allowanceAmount = ethers.utils.parseUnits('1000000', 18);

      console.log('depositAmount', depositAmount);

      const {
        TokenERC20Factory,
        tokenERC20,
        TokenERC721Factory,
        tokenERC721,
        MainContractFactory,
        mainContract,
        deployer,
        otherUser,
      } = await loadFixture(deployTokenFixture);

      await mainContract.updateInterest(otherUser[0].address);

      console.log('user 1', otherUser[0].address);
      await tokenERC20.mint(otherUser[0].address, depositAmount);

      await tokenERC20
        .connect(otherUser[0])
        .approve(mainContract.address, allowanceAmount);
      await mainContract.connect(otherUser[0]).depositToken(depositAmount);

      const depositOf = await mainContract.depositOf(otherUser[0].address);

      console.log('depositOf', depositOf);
      expect(depositOf.amount).to.equal(ethers.utils.parseUnits('1000000', 18));

      const balance = await tokenERC721.balanceOf(otherUser[0].address);
      const getEventInfo = await mainContract.getEventInfo(0);
      console.log('getEventInfo', getEventInfo);
      expect(balance).to.equal(1);
    }); */
    /* it('Should err "Tokens are still locked"', async function () {
      const depositAmount = ethers.utils.parseUnits('1000', 18);
      const allowanceAmount = ethers.utils.parseUnits('1000', 18);

      console.log('depositAmount', depositAmount);

      const { mainContract, deployer, tokenERC20, otherUser } =
        await loadFixture(deployTokenFixture);

      await mainContract.updateInterest(otherUser[0].address);

      console.log('user 1', otherUser[0].address);
      await tokenERC20.mint(otherUser[0].address, depositAmount);

      await tokenERC20
        .connect(otherUser[0])
        .approve(mainContract.address, allowanceAmount);
      await mainContract.connect(otherUser[0]).depositToken(depositAmount);

      await sleep(4000);

      const getEventInfo = await mainContract.getEventInfo(0);
      console.log('getEventInfo', getEventInfo);

      await expect(
        mainContract.connect(otherUser[0]).withdraw(0),
      ).to.be.revertedWith('Tokens are still locked');
    }); */
    /* it('Should withdraw then deposit amount = 0', async function () {
      const depositAmount = ethers.utils.parseUnits('1500', 18);
      const allowanceAmount = ethers.utils.parseUnits('1500', 18);
      const withdrawAmount = ethers.utils.parseUnits('1500', 18);

      console.log('depositAmount', depositAmount);

      const { mainContract, deployer, tokenERC20, otherUser } =
        await loadFixture(deployTokenFixture);

      await mainContract.updateInterest(otherUser[0].address);

      console.log('user 1', otherUser[0].address);
      await tokenERC20.mint(otherUser[0].address, depositAmount);

      await tokenERC20
        .connect(otherUser[0])
        .approve(mainContract.address, allowanceAmount);
      await mainContract.connect(otherUser[0]).depositToken(depositAmount);

      const balanceBefore = await tokenERC20.balanceOf(otherUser[0].address);
      console.log('balance Before withdraw', balanceBefore);

      await sleep(5000);

      await mainContract.connect(otherUser[0]).withdraw(withdrawAmount);

      const balance = await tokenERC20.balanceOf(otherUser[0].address);
      console.log('balance after withdraw', balance);

      const depositOf = await mainContract.depositOf(otherUser[0].address);

      const getEventInfo = await mainContract.getEventInfo(1);
      console.log('getEventInfo', getEventInfo);

      expect(depositOf.amount).to.equal(ethers.utils.parseUnits('0', 18));
    }); */
    /* it('Should err "Tokens are still locked" after 2th deposit ', async function () {
      const depositAmount = ethers.utils.parseUnits('1500', 18);
      const allowanceAmount = ethers.utils.parseUnits('1500', 18);
      const withdrawAmount = ethers.utils.parseUnits('500', 18);

      console.log('depositAmount', depositAmount);

      const { mainContract, deployer, tokenERC20, otherUser } =
        await loadFixture(deployTokenFixture);

      await mainContract.updateInterest(otherUser[0].address);

      console.log('user 1', otherUser[0].address);
      await tokenERC20.mint(
        otherUser[0].address,
        ethers.utils.parseUnits('3000', 18),
      );

      await tokenERC20
        .connect(otherUser[0])
        .approve(mainContract.address, allowanceAmount);
      await mainContract.connect(otherUser[0]).depositToken(depositAmount);

      const balanceBefore = await tokenERC20.balanceOf(otherUser[0].address);
      console.log('balance Before withdraw', balanceBefore);

      await sleep(5000);

      await mainContract.connect(otherUser[0]).withdraw(withdrawAmount);

      const balance = await tokenERC20.balanceOf(otherUser[0].address);
      console.log('balance after withdraw', balance);

      const depositOf = await mainContract.depositOf(otherUser[0].address);

      await tokenERC20
        .connect(otherUser[0])
        .approve(mainContract.address, allowanceAmount);
      await mainContract.connect(otherUser[0]).depositToken(depositAmount);

      const balance2 = await tokenERC20.balanceOf(otherUser[0].address);
      console.log('balance after withdraw', balance2);

      const depositOf2 = await mainContract.depositOf(otherUser[0].address);

      const getEventInfo = await mainContract.getEventInfo(2);
      console.log('getEventInfo', getEventInfo);

      await expect(
        mainContract.connect(otherUser[0]).withdraw(0),
      ).to.be.revertedWith('Tokens are still locked');
    }); */
    /* it('Should withdraw then deposit amount = 2000 after 2th deposit ', async function () {
      const depositAmount = ethers.utils.parseUnits('1000', 18);
      const allowanceAmount = ethers.utils.parseUnits('1000', 18);
      const withdrawAmount = ethers.utils.parseUnits('100000', 18);

      const { mainContract, deployer, tokenERC20, otherUser, tokenERC721 } =
        await loadFixture(deployTokenFixture);

      console.log('user 1', otherUser[0].address);
      await tokenERC20.mint(
        otherUser[0].address,
        ethers.utils.parseUnits('1000000', 18),
      );

      await tokenERC20
        .connect(otherUser[0])
        .approve(mainContract.address, allowanceAmount);
      await mainContract.connect(otherUser[0]).depositToken(depositAmount);

      const balanceBefore = await tokenERC20.balanceOf(otherUser[0].address);
      console.log('balance Before withdraw', balanceBefore);

      const depositOf1 = await mainContract.depositOf(otherUser[0].address);
      console.log('depositOf1', depositOf1);

      await sleep(3000);

      await tokenERC20
        .connect(otherUser[0])
        .approve(mainContract.address, allowanceAmount);
      await mainContract.connect(otherUser[0]).depositToken(depositAmount);

      const depositOf2 = await mainContract.depositOf(otherUser[0].address);
      console.log('depositOf2', depositOf2);

      await sleep(3000);

      await tokenERC20
        .connect(otherUser[0])
        .approve(mainContract.address, ethers.utils.parseUnits('998000', 18));
      await mainContract
        .connect(otherUser[0])
        .depositToken(ethers.utils.parseUnits('998000', 18));

      const depositOf3 = await mainContract.depositOf(otherUser[0].address);
      console.log('depositOf3', depositOf3);

      await tokenERC721.connect(otherUser[0]).approve(mainContract.address, 0);
      await mainContract.connect(otherUser[0]).depositNFT(0);

      const depositOf4 = await mainContract.depositOf(otherUser[0].address);
      console.log('depositOf4', depositOf4);

      await sleep(3000);

      await mainContract.connect(otherUser[0]).withdraw(withdrawAmount);

      const depositOf5 = await mainContract.depositOf(otherUser[0].address);
      console.log('depositOf5', depositOf5);

      await sleep(3000);

      await mainContract.connect(otherUser[0]).withdrawNFT(0);

      const depositOf6 = await mainContract.depositOf(otherUser[0].address);
      console.log('depositOf6', depositOf6);

      await sleep(3000);

      await mainContract.connect(otherUser[0]).withdraw(withdrawAmount);

      const depositOf7 = await mainContract.depositOf(otherUser[0].address);
      console.log('depositOf7', depositOf7);

      await sleep(3000);

      const balanceBeforeClaimReward = await tokenERC20.balanceOf(
        otherUser[0].address,
      );
      console.log('balanceBeforeClaimReward', balanceBeforeClaimReward);

      await mainContract.connect(otherUser[0]).claimReward();

      const depositOf8 = await mainContract.depositOf(otherUser[0].address);
      console.log('depositOf8', depositOf8);

      const balanceAfterClaimReward = await tokenERC20.balanceOf(
        otherUser[0].address,
      );

      console.log('balanceAfterClaimReward', balanceAfterClaimReward);

      await sleep(3000);

      await tokenERC20.connect(otherUser[0]).approve(mainContract.address, '1');
      await mainContract.connect(otherUser[0]).depositToken('1');

      const depositOf9 = await mainContract.depositOf(otherUser[0].address);
      console.log('depositOf9', depositOf9);
    }); */
    /* it('Should accumulatedInterest = 60000 with (% seconds)(optional NFT) ', async function () {
      const depositAmount = ethers.utils.parseUnits('900000', 18);
      const allowanceAmount = ethers.utils.parseUnits('900000', 18);
      const withdrawAmount = ethers.utils.parseUnits('500', 18);

      const {
        TokenERC20Factory,
        tokenERC20,
        TokenERC721Factory,
        tokenERC721,
        MainContractFactory,
        mainContract,
        deployer,
        otherUser,
      } = await loadFixture(deployTokenFixture);

      await mainContract.updateInterest(otherUser[0].address);

      console.log('user 1', otherUser[0].address);
      await tokenERC20.mint(
        otherUser[0].address,
        ethers.utils.parseUnits('900000', 18),
      );

      await tokenERC20
        .connect(otherUser[0])
        .approve(mainContract.address, allowanceAmount);
      await mainContract.connect(otherUser[0]).depositToken(depositAmount);

      const balance = await tokenERC20.balanceOf(otherUser[0].address);
      console.log('balance', balance);

      const depositOf = await mainContract.depositOf(otherUser[0].address);
      console.log('depositOf', depositOf);

      // await tokenERC721.connect(otherUser[0]).approve(mainContract.address, 1);
      // await mainContract.connect(otherUser[0]).depositNFT(1);
      // const balance721 = await tokenERC721.balanceOf(otherUser[0].address);
      // console.log('balance721', balance721);

      const depositOfNFT = await mainContract.depositOfNFT(
        otherUser[0].address,
      );
      console.log('depositOfNFT', depositOfNFT);

      await sleep(5000);

      await mainContract.updateInterest(otherUser[0].address);

      const depositOfAfter = await mainContract.depositOf(otherUser[0].address);
      console.log('depositOfAfter', depositOfAfter);

      expect(depositOf.amount).to.equal(ethers.utils.parseUnits('900000', 18));
    }); */
    /* it('Should accumulatedInterest = 60000 with (% seconds)(optional NFT) ', async function () {
      const depositAmount = ethers.utils.parseUnits('1200000', 18);
      const allowanceAmount = ethers.utils.parseUnits('1200000', 18);
      const withdrawAmount = ethers.utils.parseUnits('500', 18);

      const {
        TokenERC20Factory,
        tokenERC20,
        TokenERC721Factory,
        tokenERC721,
        MainContractFactory,
        mainContract,
        deployer,
        otherUser,
      } = await loadFixture(deployTokenFixture);

      await mainContract.updateInterest(otherUser[0].address);

      console.log('user 1', otherUser[0].address);
      await tokenERC20.mint(
        otherUser[0].address,
        ethers.utils.parseUnits('1200000', 18),
      );

      await tokenERC20
        .connect(otherUser[0])
        .approve(mainContract.address, allowanceAmount);
      await mainContract.connect(otherUser[0]).depositToken(depositAmount);

      const balance = await tokenERC20.balanceOf(otherUser[0].address);
      console.log('balance', balance);

      const depositOf = await mainContract.depositOf(otherUser[0].address);
      console.log('depositOf', depositOf);

      await tokenERC721.connect(otherUser[0]).approve(mainContract.address, 1);
      await mainContract.connect(otherUser[0]).depositNFT(1);
      const balance721 = await tokenERC721.balanceOf(otherUser[0].address);
      console.log('balance721', balance721);

      const depositOfNFT = await mainContract.depositOfNFT(
        otherUser[0].address,
      );
      console.log('depositOfNFT', depositOfNFT);

      await sleep(5000);

      await mainContract.updateInterest(otherUser[0].address);

      const depositOfAfter = await mainContract.depositOf(otherUser[0].address);
      console.log('depositOfAfter', depositOfAfter);

      await mainContract.connect(otherUser[0]).claimReward();

      await mainContract.connect(otherUser[0]).withdrawNFT(0);

      const depositOfNFTAfter = await mainContract.depositOfNFT(
        otherUser[0].address,
      );
      console.log('depositOfNFTAfter', depositOfNFTAfter);

      await mainContract.updateInterest(otherUser[0].address);

      const depositOfAfter2 = await mainContract.depositOf(
        otherUser[0].address,
      );

      await mainContract.connect(otherUser[0]).claimReward();
      console.log('depositOfAfter2', depositOfAfter2);

      const balanceAfterWithdraw = await tokenERC20.balanceOf(
        otherUser[0].address,
      );

      console.log('balanceAfterWithdraw', balanceAfterWithdraw);

      expect(depositOfNFTAfter.length).to.equal(0);
    }); */
    /* it('Should transfer 1000 erc20 account 1 to account2', async function () {
      const {
        TokenERC20Factory,
        tokenERC20,
        TokenERC721Factory,
        tokenERC721,
        MainContractFactory,
        mainContract,
        deployer,
        otherUser,
      } = await loadFixture(deployTokenFixture);
      console.log('user 1', otherUser[0].address);
      await tokenERC20.mint(
        otherUser[0].address,
        ethers.utils.parseUnits('1000', 18),
      );

      const balance1 = await tokenERC20.balanceOf(otherUser[0].address);
      console.log('balance1', balance1);

      await tokenERC20
        .connect(otherUser[0])
        .approve(mainContract.address, ethers.utils.parseUnits('1000', 18));
      await mainContract
        .connect(otherUser[0])
        .transferERC20(
          otherUser[1].address,
          ethers.utils.parseUnits('1000', 18),
        );
      const balance2 = await tokenERC20.balanceOf(otherUser[0].address);
      console.log('balance2', balance2);

      const getEventInfo = await mainContract.getEventInfo(0);
      console.log('getEventInfo', getEventInfo);

      const balance = await tokenERC20.balanceOf(otherUser[1].address);
      expect(balance).to.equal(ethers.utils.parseUnits('1000', 18));
    }); */
    /* it('Should transfer 1000 erc20 account 1 to account2', async function () {
      const {
        TokenERC20Factory,
        tokenERC20,
        TokenERC721Factory,
        tokenERC721,
        MainContractFactory,
        mainContract,
        deployer,
        otherUser,
      } = await loadFixture(deployTokenFixture);
      console.log('user 1', otherUser[0].address);
      await tokenERC721.mint(otherUser[0].address);

      const balance1 = await tokenERC721.balanceOf(otherUser[0].address);
      console.log('balance1', balance1);

      await tokenERC721.connect(otherUser[0]).approve(mainContract.address, 0);
      await mainContract
        .connect(otherUser[0])
        .transferNFT(otherUser[1].address, 0);
      const balance2 = await tokenERC721.balanceOf(otherUser[0].address);
      console.log('balance2', balance2);

      const getEventInfo = await mainContract.getEventInfo(0);
      console.log('getEventInfo', getEventInfo);

      const balance = await tokenERC721.balanceOf(otherUser[1].address);
      expect(balance).to.equal(1);
    }); */
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
