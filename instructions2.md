# Instructions 2
There is multiple contracts to work on, make sure to contact @exakoss first to consult which ones you should pick for work first.

## OmniWarsv1.sol

Make a new omnichain version of the OmnichainWarsv0.sol

* Use LayerZero interfaces and lzReceive() to make the combat function omnichain.
* Start counting in hero's offensive and defensive multipliers into the sumAttackPoints and sumDefensePoints function.
* Make sure that the combat works as expected and properly deducts troops from the both sides.

## NFTSalev2.sol

Create a smart contract for sale of the genesis NFT collection.

* The contract must be gas optimized
* Setting a price
* Set the start time of the sale and also make it pausable
* Hard-coded whitelist
* 1500 pieces total, 50 reserved for the team and insiders
* On-chain royalties should be compatible with OpenSea
* Must have 2 royaltyReceivers: artist gets 25%, the treasury gets 75% of the royalties
* Use [AvatarNFTv2.sol](https://github.com/buildship-dev/nft-contracts/blob/main/contracts/AvatarNFTv2.sol) for the reference.