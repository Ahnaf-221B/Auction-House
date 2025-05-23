import React from "react";

const Footer = () => {
	return (
		<footer className="footer footer-horizontal  footer-center  text-base-content rounded p-20 sora">
			<div className="gap-y-6">
				<div>
					<h1 className=" text-3xl pb-2">
						<span className="text-[#003EA4]">Auction</span>
						<span className="text-[#FFD337]">Gallery</span>
					</h1>
					<nav className="grid grid-cols-3 gap-x-0">
						<h3>Bid.</h3>
						<h3>Win.</h3>
						<h3>Own.</h3>
					</nav>
				</div>

				<nav>
					<div className="grid grid-flow-col gap-8">
						<a>Home</a>
						<a>Auctions</a>
						<a>Categories</a>
						<a>How to works</a>
					</div>
				</nav>
				<aside>
					<p>© 2025 AuctionHub. All right reserved.</p>
				</aside>
			</div>
		</footer>
	);
};

export default Footer;
