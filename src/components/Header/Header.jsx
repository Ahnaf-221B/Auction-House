import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
		<div className="flex items-center justify-between  sora px-16 my-4">

			{/* left side */}
			<div className="flex-1">
				<h1 className="font-semibold text-xl">
					<span className="text-[#003EA4]">Auction</span>
					<span className="text-[#FFD337]">Gallery</span>
				</h1>
			</div>

			{/* Centered  */}
			<div className="flex gap-8 justify-center flex-1">
				<a>Home</a>
				<a>Auctions</a>
				<a>Categories</a>
				<a>How to Works</a>
			</div>

			{/* Right side */}
			<div className="flex gap-6 items-center flex-1 justify-end">
				<div>
					<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
						<div className="indicator">
							<IoIosNotificationsOutline size={25} />
							<span className="badge badge-sm indicator-item">8</span>
						</div>
					</div>
				</div>
				<div>
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost btn-circle avatar"
					>
						<div className="w-10 rounded-full">
							<img
								alt="Tailwind CSS Navbar component"
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Navbar