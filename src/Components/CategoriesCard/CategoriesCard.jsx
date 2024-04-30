/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CategoriesCard = ({ catagory }) => {
    const { image, subcategory_Name } = catagory;
    return (
        <div>
            <Link to={`/subcategory/${subcategory_Name}`} data-tooltip-id='my-tooltip' data-tooltip-content="Click to show details" className="relative shadow-xl image-full">
                <figure><img src={image} /></figure>
                <div className="card-body justify-center absolute top-0 bg-black  bg-opacity-50 items-center w-full h-full">
                    <h2 className="card-title text-xl md:text-3xl lg:text-4xl text-white font-extrabold">{subcategory_Name}</h2>

                </div>

            </Link>
        </div>
    );
};

export default CategoriesCard;