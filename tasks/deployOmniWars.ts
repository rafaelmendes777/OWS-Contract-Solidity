import { task } from 'hardhat/config'

task('deployOmniWars', 'deploys an OmnichainWarsv0.sol')
    .setAction(async () => {
        // @ts-ignore
        const omnichainWarsFactory = await hre.ethers.getContractFactory('OmnichainWarsv0')
        // The names and the images for the units below are for: Polygonia faction
        const omnichainWarsv0 = await omnichainWarsFactory.deploy(
            ['Adepts', 'Crusaders', 'Tigers', 'Armored Bears', 'Siege Beasts', 'Corruptors', 'Hero'],
            ['https://gateway.pinata.cloud/ipfs/QmXpfDZyKcrpjdnGUb3LYgECQNW6hzMLpxdf7wHZDSsRew/adept.png', 'https://gateway.pinata.cloud/ipfs/QmXpfDZyKcrpjdnGUb3LYgECQNW6hzMLpxdf7wHZDSsRew/crusader.png', 'https://gateway.pinata.cloud/ipfs/QmXpfDZyKcrpjdnGUb3LYgECQNW6hzMLpxdf7wHZDSsRew/tiger.png', 'https://gateway.pinata.cloud/ipfs/QmXpfDZyKcrpjdnGUb3LYgECQNW6hzMLpxdf7wHZDSsRew/armored%20bear.png', 'https://gateway.pinata.cloud/ipfs/QmXpfDZyKcrpjdnGUb3LYgECQNW6hzMLpxdf7wHZDSsRew/siege%20beast.png', 'https://gateway.pinata.cloud/ipfs/QmXpfDZyKcrpjdnGUb3LYgECQNW6hzMLpxdf7wHZDSsRew/corruptor.png', 'https://gateway.pinata.cloud/ipfs/QmXpfDZyKcrpjdnGUb3LYgECQNW6hzMLpxdf7wHZDSsRew/hero.png'],
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
        console.log(`omnichainWarsv0 address: ${omnichainWarsv0.address}`)
    })
