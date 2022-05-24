Donations Wallet Address: 0x0468C8d4e517C37267aA1DbF307350FFC996CBcB ETH/BNB/AVAX/MATIC If you appreciate my work and you were able to deploy your NFT collection based on this github repo, if you want to support my work you can donate to wallet above

# Contract Setup

First, you have to call __EatTheNFT_init function // Only the owner can call

Set your token name example "YourProjectName"
Set your token symbol example "YPN"
Set max supply example "10000" 
![image](https://user-images.githubusercontent.com/106145059/170088551-dede0ca5-c497-45a7-b8e0-cfc721b5369a.png)
Press transact

This function will set your NFT Project name, your NFT Symbol and total supply of your NFT's

Don't worry, nobody can set these parameters. The constructor argument makes your address the owner of the contract and this function is locked for everyone except the owner.
Also, please note, if you set a wrong data, you can't undo or override it, this is a one-time-only function and setting will stay on blockchain forever

After you initiated your parameters, you need to update the sales details.

# UpdateSale only the owner can call

This function will set the price of minting, max number of tokens per Wallet (one address can't hold more than x- your parameter) and max number of tokens mintable within one transaction 

_cost: 100000000000000000 // 0.1 Eth in this example
_maxW: 50 // Maximum number of tokens / Wallet
_maxM: 20 // Maximum number of tokens mintable / transaction

![image](https://user-images.githubusercontent.com/106145059/170090430-3bf50369-9107-4836-9664-18bfa222f1a0.png)

transact

You can update this parameter whenever you want

# UpdatePresale only the owner can call

This function will set-up the presale price and maximum number of tokens mintable whithin the presale round (early investors usually buy tokens with discount)

_presaleCost: 5000000000000000 // 0.005 Eth in this example
_count: 1000 // Your presale round will put in circulation 1000 tokens, you can adjust this function whenever you want, on your needs

![image](https://user-images.githubusercontent.com/106145059/170091312-6b56ad97-98f7-4f3b-b147-6be3f4039bdd.png)

transact

# UpdateRoyalties only the owner can call

By default, the contract is set to receive 10% royalties of each sale ( whenever someone sells your NFTs on OpenSea or any NFT market, you will receive 10% comission fees )

Insert your wallet address:

![image](https://user-images.githubusercontent.com/106145059/170091826-9e60e028-7688-4afc-b79e-d5ef10b22f94.png)

transact

# Mint and PresaleMint public call - everybody can call this function (you need to sell your tokens to your community)

This function is a payable function, you need to pay ETH/BNB/AVAX/Matic (depending on the blockchain where you deploy your NFT collection)

count: 10 (for this example) i need to pay 1 ETH value to mint 10 tokens at a 0.1 ETH mint price
![image](https://user-images.githubusercontent.com/106145059/170092761-a079ed8f-ed1e-4a6a-b8a7-7a15749027ef.png)
![image](https://user-images.githubusercontent.com/106145059/170092809-6ef2f4a2-8ed3-408e-91dd-d7d4abd6078b.png)
Transact
![image](https://user-images.githubusercontent.com/106145059/170092940-2eb9a9b8-6f8d-469e-be40-9813bd61cab6.png)

But what happens if i want to cheat the smart contract and mint 10 tokens at price of only 1 token?
![image](https://user-images.githubusercontent.com/106145059/170093178-0c32d480-cba0-429d-8411-1189be46efe6.png)
It doesen't allow me to cheat it's logic.

Both functions mint and presalemint work with the same logic but with different prices.
The only difference between Mint and PresaleMint is that PresaleMint will not work when the token supply reach the amount specified by you in updatePresale function

# Withdraw public call but the only one who will receive funds, will be the owner ( you or the address where you transfered the ownership);

After your presale and public sale was a full success, you need to withdraw the funds from contract
Just press  the button
![image](https://user-images.githubusercontent.com/106145059/170093896-8d0162ab-639c-4edf-b518-939ce05dae11.png)
![image](https://user-images.githubusercontent.com/106145059/170094024-100395a5-15a1-42ce-9e73-f6f8218c62c5.png)

This function is set on public, everyone can call withdraw, but the contract logic will send funds only to owner
If someone calls withdraw, it will clean contract balance and send it direct to your wallet ( will help you to save 3$ gas fees )

Nobody can change the withdraw parameter, it is already set to owner. Be carefull and don't lose your private key, otherwise, the funds will be locked
forever in your contract or wallet address;

You need to transfer the ownership of the contract to another address if you want to send funds to another address ( only you can transfer ownership )

Let's see:

# TransferOwnership 

First, i will try to call this function from another address.
![image](https://user-images.githubusercontent.com/106145059/170095321-49576058-0468-4cca-a8b0-0000a363a393.png)
Input the address of new owner
If the address that call this function is not the owner, execution will revert, only the owner can call this function
![image](https://user-images.githubusercontent.com/106145059/170095285-56bf49b4-930f-4723-a060-7a6b0c24d894.png)

Let's do it for real now, to another address ( of our own or third party ) // Caution, don't transfer the ownership to strangers
![image](https://user-images.githubusercontent.com/106145059/170095659-821c9bea-6709-4c19-b427-a9ded72cb331.png)
Function called from owner address:
Now, the owner of the contract is the address of our choice

# UpdateReveal Only the owner can call

There you load the images of you NFT to your token contract
_revealed: true // you must specify this value if you want to be revealed 
You can also specify false if you want to load ipfs but don't reveal the collection yet to your public
_uri: ipfs://bafybeifnxrpngi5wfk5u6hievgdasbbajrvrczcsegnjmcs/ // the ipfs uri of your NFT images ( i will create a step by step guide soon, until it's done, you can search on google how to do that )
Transact

# UpdateReferal

If you want your token to be promoted by someone ( or more individuals ) you can use this function and pay with your token, fairly
Everytime when someone press "refferalMint" button, the refferer will receive one NFT ( if the refferal mint 20 NFT's, the refferer will still receive only 1 NFT )

_val: 5 // how many times the refferer will be eligible to receive your NFTs , in this case, max 5 times.
Transact

The refferer needs to be an active user, who already own one of your NFT's ( if you want to promote, you can transfer one NFT of your owns, in order to make your refferer eligible for refferal rewards )

# Read-Only functions

# Cost

Will display the actual cost of minting ( normal, not presale )
Just press the button
![image](https://user-images.githubusercontent.com/106145059/170098237-87f0ad69-b721-4aa2-a684-7c58bb7a3f02.png)

# MaxPerMint

Will display the maximum amount / mint
Just press the button
![image](https://user-images.githubusercontent.com/106145059/170098401-4d389311-d98f-4b2e-9592-e5a30e8d26f9.png)

# MaxPerWallet

Will display the maximum amount that one wallet can hold
Just press the button
![image](https://user-images.githubusercontent.com/106145059/170098534-e75fa0a8-22e7-4a88-b042-afc9cc667c8d.png)

# Name

Name of your NFT
Just press the button
![image](https://user-images.githubusercontent.com/106145059/170098641-e8c565de-79df-49a7-ad0b-891f82604921.png)

# Open

Boolean value, if you used "UpdateSale" function, will be displayed as true
Just press the button
![image](https://user-images.githubusercontent.com/106145059/170098746-3f94eb3a-86d9-4acd-b037-e66b76095aa5.png)

# Owner

Will display the current owner of the contract
Just press the button
![image](https://user-images.githubusercontent.com/106145059/170098855-298301b6-3ae8-4166-9780-e9b99f052698.png)

# PresaleCost

Will display the actual cost in presale round minting
Just press the button
![image](https://user-images.githubusercontent.com/106145059/170098982-e9a62860-4d41-4e77-827b-4fb7f13670d1.png)

# Supply

Will display the current supply of tokens
Just press the button
![image](https://user-images.githubusercontent.com/106145059/170099165-a3bb0e52-a7d2-48d4-b95a-a4d84190b6cd.png)

# RoyaltyInfo

Will display informations about royalties (the percent is set by default to 10%)
Input tokenID: 3
SalePrice: 100000000000000000
![image](https://user-images.githubusercontent.com/106145059/170099522-c0d9051f-c6de-4115-8776-8a1e8810742d.png)

This format of RoyaltyInfo is required by markets ( e.g. Opensea ) to understand the royalties
When someone sells your NFT on Opensea, Opensea contract will call your contract function (they have implemented the following function:
(YourContractAddress).call(abiEncodeWithSignature("RoyaltyInfo(tokenID, SalePrice)", x, y) where x is tokenID of NFT sold and price is
The price value ( if someone sells NFT on opensea for 100 ethereum, y will represent 100 ethereum ).
Based on this function, they will receive the ETH value (10 ethereum in this case) and collector ( address where to send the royalty )
Usually, it takes 1-2 weeks to receive royalties from external NFT contracts ( due to reentrancy risks of opensea smart contract )

If you mint NFT's on opensea you will receive the royalties within the same transaction of the sale ( but if you want to mint 10.000 tokens, you have to manually mint every single token, and nobody can mint in your collection and pay to mint )

# TotalSupply

Will display the total supply of your NFT's
Just click the button
![image](https://user-images.githubusercontent.com/106145059/170100936-8a13e8eb-98b7-4135-9a44-6d2874b554f9.png)

# Symbol

Will display the symbol of your NFT's
Just click the button
![image](https://user-images.githubusercontent.com/106145059/170101067-d57d0b03-6d93-4360-9138-82d49b977157.png)
