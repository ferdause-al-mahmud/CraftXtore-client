/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const MyAddedCard = ({ item, handleDelete }) => {
    const { _id, photo, item_name, short_description, price, rating, customization, processing_time, stockStatus } = item;


    return (
        <div>
            <div className="card bg-base-200 mb-10">
                <div className="hero-content flex-col md:flex-row">
                    <img src={photo} className="md:w-[30%] md:max-w-md rounded-lg shadow-2xl" />
                    <div className="md:w-[70%]">
                        <h1 className="text-5xl font-bold text-center">{item_name}</h1>
                        <p className="py-6 md:text-xl text-center text-2xl">{short_description}</p>
                        <div className="md:text-2xl space-y-3 text-center font-semibold text-2xl">
                            <div className="md:flex md:gap-10 justify-center">
                                <p >Price: <span className="text-blue-500">${price}</span> </p>
                                <div className="flex items-center justify-center gap-3">
                                    <p className="flex-grow-0">Rating: {rating}</p>
                                    <div className="rating rating-sm">
                                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex md:gap-10 justify-center">
                                <p >Status: <span className={stockStatus === 'In stock' ? "text-green-600" : "text-red-600"}>{stockStatus}</span></p>
                                <p >Customization: <span className={customization === 'Yes' ? "text-green-600" : "text-red-600"}>{customization}</span></p>
                            </div>
                            <p>Processing Time: <span className="text-[#803114]">{processing_time}</span></p>
                        </div>

                        <div className="flex justify-center text-2xl mt-2 gap-3 md:gap-8">
                            <button onClick={() => handleDelete(_id)} className="bg-red-400 p-4 rounded-lg hover:bg-opacity-70"><MdDelete /></button>
                            <Link className="bg-green-400 p-4 rounded-lg  hover:bg-opacity-70"><FaEdit /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAddedCard;