import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { TransactionContext } from "../context/TransactionContext";


const companyCommonStyles =
	"min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
	<input
		placeholder={placeholder}
		type={type}
		step="0.0001"
		value={value}
		onChange={(e) => handleChange(e, name)}
		className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
	/>
);

const Welcome = () => {
	const {
		currentAccount,
		connectWallet,
		sendTransaction,
		formData,
	} = useContext(TransactionContext);
	return (
		<>
			<div className="flex w-full justify-center items-center">
				<div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
					<div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
						<h1 className="text-3xl sm:text-5xl text-white text-gradient mt-4">
							Send Crypto <br /> across the world
						</h1>
						<p className="text-left text-white font-light md:w-9/12 w-11/12 text-base">
							Explore the crypto world. Buy and sell cryptocurrencies easily on
							Kripto.
						</p>
						{!currentAccount && (
							<button
								type="button"
								onClick={connectWallet}
								className="flex flex-row justify-center items-center my-5 bg-[#a900e3] p-3 rounded-full cursor-pointer hover:bg-[#ae46bd]"
							>
								<AiFillPlayCircle className="text-white mr-2" />
								<p className="text-white text-base font-semibold">
									<a href=""> Connect Wallet</a>
								</p>
							</button>
						)}

						<div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
							<div className={`rounded-tl-2xl ${companyCommonStyles}`}>
								Reliability
							</div>
							<div className={companyCommonStyles}>Security</div>
							<div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
								Ethereum
							</div>
							<div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
								Web 3.0
							</div>
							<div className={companyCommonStyles}>Low Fees</div>
							<div className={`rounded-br-2xl ${companyCommonStyles}`}>
								Blockchain
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Welcome;
