# Instructions

## OmnichainWarsv0

Your first task is to create a smart contract that will hold Armies (Units and Heros) for the Players and will facilitate battles between them. Follow the [Army](https://daniel-67.gitbook.io/omnichain-wars/core-game-mechanics/army) and [Combat](https://daniel-67.gitbook.io/omnichain-wars/core-game-mechanics/combat) guides and choose optimal Structs and mappings to store the information on chain. Speed,Carrying Capacity and Hero's Resource multiplier do not play role in the battles, so just leave them stored.

Make sure to write an adequate amount of tests to ensure that minting and combat work as intended.

Core objectives:
* Players can mint Armies which are collections of fungible Units and non-fungible Heroes. Armies can fight each other. One player can hold multiple armies. There could only be one Hero in each army. You can pass 10**9 as the limit supply for Units in the Army.
* There is 6 Units in the Army (aside from the Hero). You can use the following table to fill out the data for the units in the game:

| Type         | Name      | Attack Points | Defense against Infantry | Defense against Cavalry | Speed | Carrying Capacity |
|--------------|-----------|---------------|--------------------------|-------------------------|-------|-------------------|
| Light Infantry | Spearmen      | 15           |25|40|10|20|
| Heavy Infantry      | Swordsmen  | 50          |20|15|15|40|
| Light Cavalry | Hussars | 80 |55|35|35|60|
| Heavy Cavalry | Holy Knights | 150 | 80| 100|30|50|
| Siege Machine | Rams | 0 | 75 | 75 | 15 | 0 |
| Special Unit | Barons | 70 | 55 | 45 | 15 | 80 |

* Each of 4 Hero's attributes must be updatable (stored as a store variable). You can set the default value of the Power to 100 and all multipliers to 0.
* Each of 5 Unit's attributes must be updatable (stored as a store variable).
* Armies must be able to fight each other. Follow the [Combat](https://daniel-67.gitbook.io/omnichain-wars/core-game-mechanics/combat) page to learn more about the combat formulas. For now you can disregard the City Wall and Castle defense bonuses. Consider only the Capture attack mode for now. The loser army loses all the Units and the Hero.
* Combat function should accept an id of one Army as an attacker and id of the other Army as a defender. Make the function callable only if the msg.sender owns the Army that is attacking and check that the defending army exists.
* Make a free external mint function that would mint a Hero, 10 Spearmen and 4 Hussars to a Player.


Technical Specs:
* All metadata must be stored on-chain!
* Use @openzeppelin/contracts to implement instances of ERC1155, Strings and other libraries if necessary.
* Use the provided Base64.sol library to encode the metadata into the json format in the tokenURI function.
* While deploying, you can leave the image links in the metadata empty or replace them with strings of your choice.