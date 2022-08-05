export default {
  id: 'meme-1',
  name: 'Meme Mainnet',
  description:
    'Meme is a network of independent parallel blockchains, powered by BFT consensus algorithms like Tendermint.',
  logo: `logo.svg`,
  website: 'https://meme.sx',
  // apiURL: 'http://localhost:8010/proxy',
  apiURL: 'https://api-meme-1.meme.sx',
  rpcURL: 'https://rpc-meme-1.meme.sx',
  minBlockHeight: 1601000, // actually 5200791, but it has the wrong block time.
  stakingDenom: 'MEME',
  coinLookup: [
    {
      viewDenom: 'MEME',
      chainDenom: 'umeme',
      chainToViewConversionFactor: 1e-6,
      icon: `currencies/atom.png`,
    },
  ],
  addressPrefix: 'meme',
  validatorAddressPrefix: 'cosmosvaloper',
  validatorConsensusaddressPrefix: 'cosmosvalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/118'/0'/0/0`,
  lockUpPeriod: `3 days`,
  fees: {
    default: {
      gasEstimate: 350000,
      feeOptions: [
        {
          denom: 'MEME',
          amount: 0.025,
        },
      ],
    },
  },
  icon: `https://v1.cosmos.network/img/brandmark.c15d55f6.png`,
  localSigning: true, // this is only to be used as a developer tool - never deployed in production or for mainnet chains
}
