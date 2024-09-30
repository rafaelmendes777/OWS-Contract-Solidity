import hre from 'hardhat'

async function main () {
    await hre.run('verify:verify', {
        address: '0x927491D0820C9311fE4e019335390162e6c13355',
        constructorArguments: [
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
        ]
    })
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
