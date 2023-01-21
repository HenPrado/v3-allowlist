import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';

// All Whitelisted Address
let whiteistedaddress = [
    'FiAEXLpWU3UQor18gtKrPG1CyhX217K2Fh65L1EZubTx',
    'FXs61u97g4XRy6uFcNXnJ7qmiV5LUBFDAPWb4gqfgVCJ',
    'AKYnDjfbbqSEkGFbWup9WJvWkx4iDra2LRft8G3giwy7',
    'Ak96rFa5iVgxiXyGoyZuzFHLyEbzET5Wcg1S3ZMFEWjG'
]

// Address you want to find merkle HexProof
let addr = 'AKYnDjfbbqSEkGFbWup9WJvWkx4iDra2LRft8G3giwy7';

const findMerkleRoot = () => {
    let leafNode = whiteistedaddress.map(addr => keccak256(addr));
    const merkleTree = new MerkleTree(leafNode, keccak256, {sortPairs: true});
    const rootHash = merkleTree.getHexRoot();
    console.log(rootHash,'roothash');
}


// Find Hex Proof
const findHexProof = async() => {
    let indexOfArray = await whiteistedaddress.indexOf(addr);
    let leafNode = whiteistedaddress.map(addr => keccak256(addr));
    const merkleTree = await new MerkleTree(leafNode, keccak256, {sortPairs: true});
    const clamingAddress = leafNode[indexOfArray];
    const hexProof = merkleTree.getHexProof(clamingAddress);
    console.log(hexProof , 'hexProof');
}

//findMerkleRoot();
findHexProof();
