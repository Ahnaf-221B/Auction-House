import React from 'react'
import banner from "../../assets/Banner-min.jpg";
const Hero = () => {
  return (
		 <div
        className="hero min-h-screen"
        style={{
		  backgroundImage: `url(${banner})`,
        }}
      >
	<div className="sora w-full text-neutral-content justify-start pl-16">
		<div className="">
			<h1 className="mb-5 text-5xl font-bold ">
				Bid on Unique Items from <br /> Around the World
			</h1>
			<p className="mb-5 text-[#FFFFFF80]">
				Discover rare collectibles, luxury goods, and vintage <br /> treasures in
				our curated auctions
			</p>
			<button className="btn rounded-2xl w-40 h-10">Explore Auctions</button>
		</div>
	</div>
</div>

	);
}

export default Hero