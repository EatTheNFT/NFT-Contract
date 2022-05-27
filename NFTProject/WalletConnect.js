var account;
const showAccount1 = document.querySelector('.showAccount1');

    // https://docs.walletconnect.com/quick-start/dapps/web3-provider
    const provider = new WalletConnectProvider.default({
      //rpc: {
            //56:'https://rpc.ankr.com/bsc'
     // },
     // chainId:56,
     // rpc: {
            //137: 'https://matic-mainnet.chainstacklabs.com'
    //   },
    // chainId:137,
        rpc: {
            1: 'https://mainnet.infura.io/v3/'
        },
        chainId:1,
    });

    // Delete // inside const provider declaration if you want to select another chain (by default it will select ethereum)
    // You have a simple example for bsc and polygon chain (not active due to // params) 

    var connectWC = async () => {
      await provider.enable();

      //  Create Web3 instance
      const web3 = new Web3(provider);
      window.w3 = web3

      var accounts  = await web3.eth.getAccounts(); // get all connected accounts
      account = accounts[0]; // get the primary account
      showAccount1.innerHTML = account;
    }


    var sign = async (msg) => {
      if (w3) {
        return await w3.eth.personal.sign(msg, account)
      } else {
        return false
      }
    }

    var contract = async (abi, address) => {
      if (w3) {
        return new w3.eth.Contract(abi, address)
      } else {
        return false
      }
    }

    var disconnect = async () => {
      // Close provider session
      await provider.disconnect()
    }
