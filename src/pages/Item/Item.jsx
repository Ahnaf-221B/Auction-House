import React, { useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";


const Item = ({ item, handleFavorite, isFavoriteInParent }) => {
	const [isFavorite, setIsFavorite] = useState(isFavoriteInParent);

	
	useEffect(() => {
		setIsFavorite(isFavoriteInParent);
	}, [isFavoriteInParent]);

	const toggleFavorite = () => {
		setIsFavorite(!isFavorite);
		handleFavorite(item);

		
	};

	return (
		<>
			<tr className="text-center border-black">
				<td>
					<div className="flex items-center gap-3 ">
						<div className="avatar">
							<div className="mask h-12 w-12">
								<img src={item.image} alt="Avatar Tailwind CSS Component" />
							</div>
						</div>
						<div>
							<div className="font-bold">{item.title}</div>
						</div>
					</div>
				</td>
				<td>{item.currentBidPrice.toFixed(2)}</td>
				<td>{item.timeLeft}</td>
				<td>
					<button
						onClick={toggleFavorite}
						disabled={isFavorite}
						className={`${
							isFavorite
								? "text-red-500 hover:text-red-700 cursor-not-allowed"
								: "hover:text-red-500 hover:cursor-pointer "
						}`}
					>
						{isFavorite ? (
							<FaHeart size={20} className="text-red-500" />
						) : (
							<FaRegHeart size={20} />
						)}
					</button>
				</td>
			</tr>
		</>
	);
};

export default Item;
