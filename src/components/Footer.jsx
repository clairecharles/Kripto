import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { RiGithubFill } from "react-icons/ri";


const Footer = () => (
	<div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
		<div className="flex justify-center items-center flex-col mt-5">
			<p className="text-white text-sm text-center">Reach out to me</p>

			<div className="flex items-center ">
				<a href="https://twitter.com/claire_me101/">
					<AiFillTwitterCircle fontSize={24} color="#fff" className="mx-2 mt-2" />
				</a>
				<a href="https://mail.google.com/mail/u/0/#inbox/FMfcgzGmvTpQZCCjGxDLltswNgPddsnH">
					<SiGmail fontSize={24} color="#fff" className="mx-2 mt-2" />
				</a>
				<a href="https://github.com/claire-me">
					<RiGithubFill fontSize={24} color="#fff" className="mx-2 mt-2" />
				</a>
			</div>
		</div>

		<div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

		<div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
			<p className="text-white text-left text-xs">Kripto</p>
			<p className="text-white text-right text-xs">All rights reserved</p>
		</div>
	</div>
);

export default Footer;
