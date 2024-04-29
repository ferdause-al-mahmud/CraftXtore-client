/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CategoriesCard = ({ catagory }) => {
    const { image, origins, key_elements, subcategory_Name } = catagory;
    return (
        <div>
            <Link to={`/subcategory/${subcategory_Name}`} data-tooltip-id='my-tooltip' data-tooltip-content="Click to show details" className="relative shadow-xl image-full">
                <figure><img src={image} /></figure>
                <div className="card-body absolute top-0 bg-black  bg-opacity-50 items-center w-full h-full">
                    <h2 className="card-title text-3xl md:text-4xl text-white font-extrabold">{subcategory_Name}</h2>
                    <div className="space-y-3">
                        <p className="md:text-2xl text-gray-300"><span className="text-blue-500 font-semibold">Origin</span> :{origins}</p>
                        <p className="md:text-2xl text-gray-300"><span className="text-blue-500 font-semibold">Key Elements</span> :{key_elements}</p>
                    </div>
                </div>

            </Link>
        </div>
    );
};

export default CategoriesCard;