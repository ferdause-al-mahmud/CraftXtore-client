/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CraftItemCard = ({ item }) => {
    const { _id, photo, item_name, price, rating, stockStatus } = item;

    return (
        <div>
            <div className="card card-side shadow-xl">
                <figure><img className="md:[w-40%] md:max-h-[300px]" src={photo} alt="Movie" /></figure>
                <div className="md:w-[60%] card-body justify-center space-y-3">
                    <h2 className="card-title text-2xl">{item_name}</h2>
                    <div className="md:text-xl space-y-3">
                        <div className="md:flex md:gap-2">
                            <p>Price: ${price}</p>
                            <div className="flex items-center gap-3">
                                <p className="flex-grow-0">Rating: {rating}</p>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>
                        <p>Status: {stockStatus}</p>
                    </div>

                    <div className="card-actions">
                        <Link to={`/items/${_id}`} className="btn bg-orange-500 text-white w-full">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftItemCard;