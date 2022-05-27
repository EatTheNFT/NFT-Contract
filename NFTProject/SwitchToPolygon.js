const switchNetwork = async () => {
    try {
      await web3.currentProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x89" }],
      });
    } catch (error) {
      if (error.code === 4902) {
        try {
          await web3.currentProvider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: `0x${Number(137).toString(16)}`,
                chainName: "Polygon Mainnet",
                nativeCurrency: {
                  name: "MATIC",
                  symbol: "MATIC",
                  decimals: 18
                },
                rpcUrls: ["https://polygon-rpc.com/"],
                blockExplorerUrls: ["https://polygonscan.com/"]
              },
            ],
          });
        } catch (error) {
          alert(error.message);
        }
      }
    }
  }