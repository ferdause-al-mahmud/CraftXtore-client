import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const AllArts = () => {
    const [allItems, setAllItems] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://craftxstore.vercel.app/items')
            .then(res => res.json())
            .then(data => {
                setAllItems(data)
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [])

    return (
        <div>
            <Helmet>
                <title>CraftXtore | All-arts</title>
            </Helmet>
            {loading ? ( // Display loading spinner if loading is true
                <div className="flex justify-center items-center h-[50vh]">
                    <div className="loading loading-spinner loading-lg"></div>
                </div>
            ) :
                (<div className="overflow-x-auto mb-10">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-xl text-black md:text-2xl">
                                <th></th>
                                <th>Item name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allItems.map((item, idx) => (
                                    <tr key={item._id} className="hover md:text-[16px]">
                                        <th>{idx + 1}</th>
                                        <td>{item.item_name}</td>
                                        <td>$ {item.price}</td>
                                        <td className={item.stockStatus === 'In stock' ? "text-green-600 font-semibold" : "text-red-600 font-semibold"} >{item.stockStatus}</td>
                                        <td> <Link to={`/items/${item._id}`} className="btn bg-orange-500 text-white">View Details</Link></td>
                                    </tr>
                                ))
                            }


                        </tbody>
                    </table>
                </div>)
            }
        </div>
    );
};

export default AllArts;