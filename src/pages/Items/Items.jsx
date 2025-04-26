import React from "react";
import { use } from "react";
import Item from "../Item/Item.jsx";

const Items = ({ itemPromise, handleFavorite, favorites }) => {
	const items = use(itemPromise);

	return (
		<div className="sora px-8 py-6">
			<div className="overflow-hidden border  rounded-lg ">
				<table className="table w-full border-black rounded-lg">
					
					<thead>
						<tr className="border-b-1 border-black ">
							<th className="text-black">Item</th>
							<th className="text-center text-black">CurrentBid</th>
							<th className="text-center text-black">Time Left</th>
							<th className="text-center text-black">Bid Now</th>
						</tr>
					</thead>
					<tbody>
						{items.map((item) => (
							<Item
								key={item.id}
								item={item}
								handleFavorite={handleFavorite}
								isFavoriteInParent={favorites.find((fav) => fav.id === item.id)}
							></Item>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Items;
