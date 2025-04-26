
import './App.css'
import Navbar from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/Banner' 
import Items from './pages/Items/Items'
import { Suspense } from "react";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { Slide } from "react-toastify";
const itemPromise = fetch("data.json").then((res) => res.json());
function App() {
 


  const [favorites, setFavorites] = useState([]);
	const [Total, setTotal] = useState(0);

  const handleFavorite = (item) => {
		if (favorites.includes(item)) {
			setFavorites(favorites.filter((i) => i !== item));
			setTotal((prevTotal) => prevTotal - parseFloat(item.currentBidPrice));
			toast.warning("Item removed from the cart!", {
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				transition: Slide,
			});
		} else {
			setFavorites([...favorites, item]);
			setTotal((prevTotal) => prevTotal + parseFloat(item.currentBidPrice));

			toast.success("Item added to the cart successfully!", {
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				transition: Slide,
			});
		}
	};
  return (

    <>
    <Navbar />
    <Banner />
    <ToastContainer />
    <div className="sora bg-[#EBF0F5] py-10">
				<div className="py-12 w-[70%] px-16">
					<div className="mb-2">
						<h1 className="text-4xl font-bold text-slate-800">
							Active Auctions
						</h1>
						<p className="text-slate-600">
							Discover and bid on extraordinary items
						</p>
					</div>
				</div>

				<div className="grid grid-cols-3 gap-10 text-center mt-5 px-16">
					{/* left side */}
					<div className="left-container col-span-2">
						<div className=" bg-white  rounded-lg">
							<Suspense fallback={<h1>Loading...</h1>}>
								<Items
									itemPromise={itemPromise}
									handleFavorite={handleFavorite}
									favorites={favorites}
								></Items>
							</Suspense>
						</div>
					</div>

					{/* right side */}
					<div className="items-center  ">
						<div className="right-container col-span-1">
							<div className="bg-white py-5 rounded-lg">
								<h1 className="flex justify-center items-center border-b px-4 text-center font-semibold pb-4 gap-1">
									<FaRegHeart /> Favorite Items
								</h1>

								{favorites.length === 0 ? (
									// Default design when no favorites
									<div className="border-b text-center p-6 favorite-item">
										<h1 className="text-2xl font-semibold">No favorites yet</h1>
										<p className="text-sm opacity-80 mt-2 px-14">
											Click the heart icon on any item to add it to your
											favorites
										</p>
									</div>
								) : (
									// Show favorites when they exist
									<div className="favorite-items ">
										{favorites.map((item) => (
											<div
												key={item.id}
												className="border-b p-4 text-left flex justify-between items-start"
											>
												<div className="flex gap-3 ">
													<div className="avatar">
														<div className="mask h-18 w-18">
															<img src={item.image} alt={item.title} />
														</div>
													</div>
													<div className="px-2 flex flex-col justify-around">
														<h3 className="font-bold">{item.title}</h3>
														<div className="flex gap-3 items-center">
															<p className="text-sm">
																{item.currentBidPrice.toFixed(2)}
															</p>
															<p>Bids: {item.bidsCount.toFixed(2)}</p>
														</div>
													</div>
												</div>
												<button
													onClick={() => handleFavorite(item)}
													className="text-black text-2xl"
												>
													<MdCancel />
												</button>
											</div>
										))}
									</div>
								)}
								<div className="pt-4 px-4 flex justify-between ">
									<div>
										<h1 className="font-semibold text-xl">Total Amount:</h1>
									</div>
									<div className="font-semibold">${Total === 0 ? "0000" : Total.toFixed(2)}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    <Footer />
    </>
  )
}

export default App
