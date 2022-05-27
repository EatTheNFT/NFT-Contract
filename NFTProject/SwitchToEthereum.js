const switchNetwork = async () => {
    try {
      await web3.currentProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x1" }],
      });
    } catch (error) {
      if (error.code === 4902) {
        try {
          await web3.currentProvider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: `0x${Number(1).toString(16)}`,
                chainName: "Ethereum Mainnet",
                nativeCurrency: {
                  name: "Ethereum",
                  symbol: "ETH",
                  decimals: 18
                },
                rpcUrls: ["https://mainnet.infura.io/v3/"],
                blockExplorerUrls: ["https://etherscan.io"]
              },
            ],
          });
        } catch (error) {
          alert(error.message);
        }
      }
    }
  }