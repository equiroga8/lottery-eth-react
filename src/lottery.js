import web3 from './web3';

const address = '0x5b52961e56FE9f32c0d0152320424Abacd7eec68'//'0x509D44C658D4e7B439FcC3b3f974DC03Bab71604';
const abi = [{
        "constant": true,
        "inputs": [],
        "name": "manager",
        "outputs": [{
            "name": "",
            "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "pickWinner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getPlayers",
        "outputs": [{
            "name": "",
            "type": "address[]"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "enter",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "",
            "type": "uint256"
        }],
        "name": "players",
        "outputs": [{ "name": "", "type": "address" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, 
    { 
    	"inputs": [], 
    	"payable": false, 
    	"stateMutability": "nonpayable", 
    	"type": "constructor" 
    }
];
//const contract = '0x5b52961e56FE9f32c0d0152320424Abacd7eec68';

export default new web3.eth.Contract(abi, address);