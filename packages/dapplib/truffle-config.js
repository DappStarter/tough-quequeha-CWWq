require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space strike rival noise concert grace drink equal gaze'; 
let testAccounts = [
"0x31737322280b3d3fb2ad97a041d60212fcfa92a99ab870609a6bfe665f29b338",
"0x336b6ee27d76682356f8657d3d942a1e300095f33b335453b212616888bd98e0",
"0x09eecdf17be60358ab36e6f1313d5c19918a2b361843b7fcce24762ecfbe368c",
"0x51445cf60cdccebc1cd85d1f39b7a5a8911696c8d54ba97bf53b1ad422665f17",
"0xf21b841d06ff39f82f8a6fb0fb747f6d6aaf803b658cb797d2b712b6f2a57dbd",
"0x8c585bb00c413dfad24e84404b79eb1328712468ca6f984382ef7a8570f321ce",
"0xadbfa487ef22ab32dfdecdd987bd49b633a7738bdb66f0ddd3d31a6c743afd52",
"0xa0d485e744663e63da894e27efe883b151e9ca31bc8dba554fc5a4094708064d",
"0xab17856273a0e44febe411222ef3bfab5f7c88a422a9af69805a586f57cc792b",
"0x5c03654d4eabba463abb2e176541db66129ac850b0cffae62a52a1ea30488546"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

