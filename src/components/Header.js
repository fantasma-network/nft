import react from "react";
import { Link } from "react-router-dom";
import { useEthers, useEtherBalance } from "@usedapp/core";

const Header = () => {

    const {activateBrowserWallet, account} = useEthers();
    const etherBalance = useEtherBalance(account);

    const handleWallet = () => {
      activateBrowserWallet();
    }

    return (
        <div id="header">
        <Link to='/' id='logo'>FULL SENYUM NFT MARKETPLACE</Link>

        <div id="link-containers">
          <a>Homepage</a>
          <a>Dark NFTs</a>
          <a>Community</a>
          <a>Buy Token</a>

          <button id="connect-wallet" onClick={handleWallet} >{!account ? 'Connect Wallet' : account}</button>
        </div>
      </div>
    );
}

export default Header;