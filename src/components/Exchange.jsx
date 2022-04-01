import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from "./index";
import { Balance } from "./Balance";

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
const Exchange = () => {
    const {
        currentAccount,
        handleChange,
        sendTransaction,
        formData,
        isLoading,
    } = useContext(TransactionContext);

    	const handleSubmit = (e) => {
				const { addressTo, amount, keyword, message } = formData;

				e.preventDefault();

				if (!addressTo || !amount || !keyword || !message) return;

				sendTransaction();
			};
    return (
			<>
				<hr />
				<div
					className="flex w-full justify-center items-center gradient-bg-exchange"
					id="exchange"
				>
					<div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
						<div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
							<h1 className="text-white text-5xl text-center">Exchange ETH</h1>
							<div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
								<div className="flex justify-between flex-col w-full h-full">
									<div className="flex justify-between items-start">
										<div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
											<SiEthereum fontSize={21} color="#fff" />
										</div>
										<div className="info-div">
											<BsInfoCircle
												fontSize={17}
												color="#fff"
												className="info"
											/>
										</div>
									</div>
									<div>
										<Balance />
										<p className="text-white font-light text-sm">
											{shortenAddress(currentAccount)}
										</p>
									</div>
								</div>
							</div>
							<div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
								<Input
									placeholder="Address To"
									name="addressTo"
									type="text"
									handleChange={handleChange}
								/>
								<Input
									placeholder="Amount (ETH)"
									name="amount"
									type="number"
									handleChange={handleChange}
								/>
								<Input
									placeholder="Keyword (Gif)"
									name="keyword"
									type="text"
									handleChange={handleChange}
								/>
								<Input
									placeholder="Enter Message"
									name="message"
									type="text"
									handleChange={handleChange}
								/>

								<div className="h-[1px] w-full bg-gray-400 my-2" />

								{isLoading ? (
									<Loader />
								) : (
									<button
										type="button"
										onClick={handleSubmit}
										className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
									>
										Send now
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			</>
		);
}

export default Exchange
