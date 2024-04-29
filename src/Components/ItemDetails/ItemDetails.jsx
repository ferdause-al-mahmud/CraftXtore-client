import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
    const { id } = useParams();

    const [item, setItem] = useState({})
    useEffect(() => {
        fetch(`https://server-side-dsbk3p7x6-ferdause-al-mahmuds-projects.vercel.app/items/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                console.log(data)
            })
    }, [id])
    const { photo, item_name, short_description, price, rating, customization, processing_time, stockStatus } = item;
    return (
        <div className="hero md:h-[800px] bg-gray-200 rounded-lg mb-10">
            <div className="hero-content flex-col md:flex-row-reverse">
                <img src={photo} className="md:w-[40%] md:max-w-lg rounded-lg shadow-2xl" />
                <div className="md:w-[60%]">
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
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;