import { useState } from 'react'
import { ethers } from 'ethers'

import React from 'react'

export const Balance = () => {
const [balance, setBalance] = useState()

    const getBalance = async () => {
        const [account] = await window.ethereum.request({ method: "eth_requestAccounts" });
        const providers = new ethers.providers.Web3Provider(window.ethereum)
        const balance = await providers.getBalance(account);
        setBalance(ethers.utils.formatEther(balance))

        console.log(balance)
    }
    

    return (
			<div>
				<button
					className="text-white text-lg"
					onClick={() => {
						getBalance();
					}}
				>
					ETH: {balance}
				</button>
			</div>
		);

}
