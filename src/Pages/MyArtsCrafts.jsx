import { Helmet } from "react-helmet-async";
import UseAuth from "../Components/UseAuth/UseAuth";
import { useEffect, useState } from "react";
import MyAddedCard from "../Components/MyAddedCard/MyAddedCard";
import Swal from "sweetalert2";
import { FaFilter } from "react-icons/fa";

const MyArtsCrafts = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);
    const [originalItems, setOriginalItems] = useState([]);
    const { user } = UseAuth() || {};
    useEffect(() => {
        fetch(`https://server-side-eight-topaz.vercel.app/myitems/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setOriginalItems(data)
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [user])
    const handleAll = () => {
        setItems(originalItems)
    }
    const handleDelete = (id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://server-side-eight-topaz.vercel.app/items/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = items.filter(c => c._id !== id);
                            setItems(remaining);
                        }

                    })
            }
        });
    }

    const handleFilter = () => {
        const filteredItems = items.filter(item => item.customization === "Yes");
        setItems(filteredItems);
    }
    return (
        <div>
            <Helmet>
                <title>CraftXtore | My Art&Craft</title>
            </Helmet>
            {loading ? ( // Display loading spinner if loading is true
                <div className="flex justify-center items-center h-[50vh]">
                    <div className="loading loading-spinner loading-lg"></div>
                </div>
            ) :
                (
                    <>
                        <div className="flex items-center justify-center mb-6">
                            <details className="dropdown">
                                <summary className="m-1 btn px-8"><FaFilter />Filter</summary>
                                <ul className="p-2 shadow menu dropdown-content bg-[#7eb2f7] z-[1]  rounded-box w-52">
                                    <li><a onClick={handleAll} className="  text-black font-semibold !text-[16px]">All</a></li>
                                    <li><a onClick={handleFilter} className="  text-black font-semibold !text-[16px]">Customization</a></li>
                                </ul>
                            </details>
                        </div>
                        {items.length > 0 ? <>
                            <h1 className="md:text-5xl  font-bold text-center text-orange-500 mb-6">My Art&Craft List</h1>
                            <div className="">
                                {
                                    items?.map(i => (
                                        <div key={i._id}>
                                            <MyAddedCard item={i} handleDelete={handleDelete}></MyAddedCard>
                                        </div>
                                    ))
                                }
                            </div>
                        </> : <div className="mb-10 h-[300px] md:h-[400px] flex items-center justify-center">
                            <h1 className="text-3xl text-center text-orange-500">YOU DID NOT ADD ANY ITEM<br />NOTHING TO SHOW</h1>
                        </div>

                        }
                    </>
                )
            }



        </div>
    );
};

export default MyArtsCrafts;