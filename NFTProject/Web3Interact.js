 //Example prices are values for 0.1 ETH public sale and 0.05 ETH in presale   
var BN = w3.utils.BN;
const NFTContract = new w3.eth.Contract(NFTAbi, NFT_address);
const amount = Web3.utils.toWei('Your NFT Price Here', 'ether'); // For example 0.1 
const PresaleAmount = Web3.utils.toWei('Your Presale Price Here', 'ether'); // For example 0.05
const mintcount = "Your Number / User imput here" // How many NFT to mint? Example "3" or You can querry user imput or add your custom amount

async function W3RegularMint() {

    const addressSender = await w3.eth.getAccounts();
    const sender = addressSender[0];
    const total = (amount.mul(mintcount)).toWei();
    const mintNFT = await BUSDContract.methods.mint(mintcount).send({from: sender, value: total});
    console.log("success");

}

async function W3PresaleMint() {
    
    const addressSender = await w3.eth.getAccounts();
    const sender = addressSender[0];
    const total = (PresaleAmount.mul(mintcount)).toWei();
    const mintNFT = await BUSDContract.methods.presaleMint(mintcount).send({from: sender, value: total});
    console.log("success");

}

async function W3MintRefferal() {

    const addressSender = await w3.eth.getAccounts();
    const sender = addressSender[0];
    const total = (amount.mul(mintcount)).toWei();
    const reffererAddress = "Your imput / User imput here";
    const mintNFT = await BUSDContract.methods.referralMint(mintcount, reffererAddress).send({from: sender, value: total});
    console.log("success");

}