import { Helmet } from "react-helmet-async";
import UseAuth from "../Components/UseAuth/UseAuth";
import { useEffect, useState } from "react";
import MyAddedCard from "../Components/MyAddedCard/MyAddedCard";
import Swal from "sweetalert2";
import { FaFilter } from "react-icons/fa";

const MyArtsCrafts = () => {
    const [items, setItems] = useState([])
    const { user } = UseAuth() || {};
    useEffect(() => {
        fetch(`http://localhost:3333/myitems/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [user])
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

                fetch(`http://localhost:3333/items/${id}`, {
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

    const hanldeSort = () => {
        console.log("sorting")
    }
    return (
        <div>
            <Helmet>
                <title>CraftXtore | My Art&Craft</title>
            </Helmet>
            <div className="flex items-center justify-center mb-4">
                <details className="dropdown">
                    <summary className="m-1 btn px-8"><FaFilter />Filter</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a onClick={hanldeSort} className="  text-black font-semibold !text-[16px]">Customization</a></li>
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

        </div>
    );
};

export default MyArtsCrafts;