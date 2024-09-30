import * as dotenv from 'dotenv'

import { HardhatUserConfig } from 'hardhat/config'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import 'hardhat-contract-sizer'
import '@typechain/hardhat'
import 'hardhat-gas-reporter'
import 'solidity-coverage'
import './tasks/deployOmniWars'
import './tasks/mintOmniWars'

dotenv.config()

const PRIVATE_KEY = process.env.PRIVATE_KEY || ''
const RINKEBY_API_KEY = process.env.RINKEBY_API_KEY || 'your rinkeby api key'
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ''

const config: HardhatUserConfig = {
    solidity: {
        version: '0.8.4',
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },

    networks: {
        rinkeby: {
            url: RINKEBY_API_KEY,
            accounts: PRIVATE_KEY !== '' ? [PRIVATE_KEY] : []
        }
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY
    }
}

export default config
