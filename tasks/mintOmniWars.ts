import { task } from 'hardhat/config'

task('mintOmniWars', 'mints an initial army from OmnichainWarsv0.sol')
    .addParam('src', 'the address of the deployed OmnichainWarsv0 contract')
    .setAction(async (taskArgs) => {
        // @ts-ignore
        const omnichainWarsFactory = await hre.ethers.getContractFactory('OmnichainWarsv0')
        const omnichainWarsv0 = await omnichainWarsFactory.attach(taskArgs.src)
        const result = await omnichainWarsv0.mint()
        console.log(result)
    })
