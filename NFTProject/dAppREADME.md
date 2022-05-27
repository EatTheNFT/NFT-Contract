Uploaded your dApp interface + HTML source code, simple version only blockchain-related
It is your responsability to design your website to suit your needs

Disclaimer: Do not change file names, the entire dApp is built using these names and the HTML file will stop working without editing HTML too.

This library is created for user interaction. Your followers/investors should interact with your smart contract without being blockchain developers,
We have to make it easy for them to invest/buy your NFT
If you want to fully interact with your smart contract, access it via remix // Read the docs

Read these simple steps in order to learn to interact with your deployed contract

#Step1

Deploy NFTSmartContract.sol
Copy deployed contract Address
Install Visual Studio Code or any editor preffered by you ( you need to edit your dApp sources )
Ethers.js and Web3.js are already injected in HTML file, it is mandatory if you want to install them also
If you preffer to install them:

Install node.js
Open node.js command prompt
npm install ethers
npm install web3

#Step2

Open visual studio code
Open index.js and Edit first row "const NFT_address ="Your Contract Address Here""
Add you deployed contract address in "Your Contract Address Here" field
Go to File -> Save or press CTRL+S

#Step3

Open index.html
Search row 24
By default, the dApp is configured for Ethereum network, if your project is based on Ethereum mainnet chain, ignore Step3

For BSC Chain
<script src="SwitchToEthereum.js"></script> delete this row (24) and add:

<script src="SwitchToBSC.js"></script>

For Polygon Chain
<script src="SwitchToEthereum.js"></script> delete this row (24) and add:

<script src="SwitchToPolygon.js"></script>

#Step4

This dApp will provide to your users 2 types of connections:

Metamask ( browser extension of mobile app ) - Ethers.js based script
Wallet Connect - Connect any type of wallet ( for example Trust Wallet ) via QR Code or using mobile link for mobile browsers - Web3.js based script

#Step4.1
Open EthersInteract.js

On row 2, const amount = ethers.utils.parseEther("NFT PRICE HERE"); // For example 0.1

Edit "NFT PRICE HERE" with your desired price. If you want to sell your nft at a 0.1 Ether/BNB/MATIC public sale it should look like that:
const amount = ethers.utils.parseEther("0.1")

On row 3, const PresaleAmount = ethers.utils.parseEther("Your Presale Price Here"); // For example 0.05
Edit "Your Presale Price Here" with your desired presale price. If you want to sell your nft at a 0.05 Ether/BNB/MATIC presale price it should look like that:

const PresaleAmount = ethers.utils.parseEther("0.05"); // For example 0.05

On row 6 const mintcount = "Your Number / User imput here"; // How many NFT to mint? Example "3" or You can querry user imput or add your custom amount
Change the value of mintcount ( how many NFT's to mint by one single transaction? )
This value will be multiplied by your mint price or presale price. If you set mint price to 0.1 and mintcount to 3, everyone who will mint on your website will mint
3x NFT's at once and will pay 0.3 ETH

I strongly suggest to leave on users behalf, the minted tokens amount. Use querry selector inside HTML in order to set this amount by user's desired amount to mint

If you want to set it by your own, for 3x tokens to be minted at once, it should look like:

const mintcount = "3"

On row 24, if you want to turn on referralMint
const reffererAddress = "Your imput / User imput here";
replace "Your imput / User imput here" with a valid address 
I strongly suggest to allow users to set their own refferals
Read the docs if you want to understand the refferal process

Anyway, if you want to use and set a refferal address by your self, let say you want to set address 0x123456789asdef as refferal, this row should look like:

const reffererAddress = "0x123456789asdef";

#Step4.2

As values, i will use the same values mentioned above for every function, so, i will not write and explain them again

Open Web3Interact.js

Row 4 const amount = Web3.utils.toWei('0.1', 'ether'); // For example 0.1 
Row 5 const PresaleAmount = Web3.utils.toWei('0.05', 'ether'); // For example 0.05
Row 6 const mintcount = "3" // How many NFT to mint? Example "3" or You can querry user imput or add your custom amount
Row 33 const reffererAddress = "0x123456789asdef";


