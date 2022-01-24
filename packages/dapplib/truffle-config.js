require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remember erosion grid entire bone strike'; 
let testAccounts = [
"0x09adf3ce0e62c1aabffcad0e9e0e7425330fd4087c36afae664ca6d2b58e512e",
"0x45140182fea726bb9a61ff51ef84024d4dc16cfe03796b90e295cfa12c6ed344",
"0xac9dd1b3799a248639785d4d8f306fecb8c97928915faad62f9f95060965299f",
"0x0ae2af2b3be87800c494b82f78557af0c7c84bf1c1340df356ae6b22a76daba3",
"0x503b2a8f4b04430e95af7d34b39e646f1e59076922f3dd44246e59bc49b1f8ed",
"0xafa07a17098190eea27e81bc7baf66a54bbd119835726f862fc5aade3294d43a",
"0xa183b4d9182c276e3f845dbc2f0ae30381a833b4b4d3c1cb0a09c9feb46dd966",
"0x14c49d4a42e32f277a8ad57ef77a45a17d03cf7d8c76585af02d10a991eef014",
"0xfc0f8e70d1cebe4af077351f36a3bdf28c09309d45e13ff220e23826721f3f8d",
"0x4d1b1fc105141c8666304adda834a8e6a1dc91b9a94286dd1e5b7e8ba7a6bc01"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

