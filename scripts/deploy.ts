import { ethers } from 'hardhat'
import { Contract, ContractFactory } from 'ethers'

async function main (): Promise<void> {
    // We get the contract to deploy
    const OmnichainWarsv0: ContractFactory = await ethers.getContractFactory(
        'OmnichainWarsv0'
    )
    const omnichainWar: Contract = await OmnichainWarsv0.deploy(
        ['Spearmen', 'Swordsmen', 'Hussars', 'Holy Knights', 'Rams', 'Barons', 'Hero'],
        ['https://i.imgur.com/1BYgjyz.jpg', 'https://i.imgur.com/1BYgjyz.jpg', 'https://i.imgur.com/1BYgjyz.jpg', 'https://i.imgur.com/1BYgjyz.jpg', 'https://i.imgur.com/1BYgjyz.jpg', 'https://i.imgur.com/1BYgjyz.jpg', 'https://i.imgur.com/1BYgjyz.jpg'],
        [15, 50, 80, 150, 0, 70],
        [25, 20, 55, 80, 75, 55],
        [40, 15, 35, 100, 75, 45],
        [10, 15, 35, 30, 15, 15],
        [20, 40, 60, 50, 0, 80],
        100,
        0,
        0,
        0
    )
    await omnichainWar.deployed()
    console.log('OmnichainWarsv0 deployed to: ', omnichainWar.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
