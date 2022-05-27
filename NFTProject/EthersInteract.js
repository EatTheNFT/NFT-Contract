//Example prices are values for 0.1 ETH public sale and 0.05 ETH in presale
const amount = ethers.utils.parseEther("NFT PRICE HERE"); // For example 0.1 
const PresaleAmount = ethers.utils.parseEther("Your Presale Price Here"); // For example 0.05
const provider = new ethers.providers.Web3Provider(window.ethereum);
const NFTContract = new ethers.Contract(NFT_address, NFTAbi, provider.getSigner());
const mintcount = "Your Number / User imput here"; // How many NFT to mint? Example "3" or You can querry user imput or add your custom amount

async function RegularMint() {
    
    const total = (amount.mul(mintcount)).toString();
    const mintNFT = await NFTContract.mint(mintcount, {value: total});
	console.log("success");
     
}

async function PresaleMint() {
    
    const total = (PresaleAmount.mul(mintcount)).toString();
    const mintNFT = await NFTContract.presaleMint(mintcount, {value: total});
	console.log("success");
     
}

async function MintRefferal() {
    
    const total = (amount.mul(mintcount)).toString();
    const reffererAddress = "Your imput / User imput here";
    const mintNFT = await NFTContract.referralMint(mintcount, reffererAddress, {value: total});
	console.log("success");
     
}
