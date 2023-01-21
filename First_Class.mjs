import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';

// All Whitelisted Address
let whiteistedaddress = [
    'HTBgdk31STEpy87UJReETbkSbidc4oTBLrH2ToFrD4EU',
    '4CJRzi2Wasb5FTtD2AKbB55zmwJeukD3ZpHdvZPEvFda',
    'AKYnDjfbbqSEkGFbWup9WJvWkx4iDra2LRft8G3giwy7',
    'Ak96rFa5iVgxiXyGoyZuzFHLyEbzET5Wcg1S3ZMFEWjG'
]

// Address you want to find merkle HexProof
let addr = 'Ak96rFa5iVgxiXyGoyZuzFHLyEbzET5Wcg1S3ZMFEWjG';

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

findMerkleRoot();
//findHexProof();
