import { useParams } from "react-router-dom";
import CraftItemCard from "../CraftItemCard/CraftItemCard";
import { useEffect, useState } from "react";

const SpecificSubcategory = () => {
    const { subcategory_Name } = useParams();
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);
    console.log(subcategory_Name)
    useEffect(() => {
        fetch(`https://server-side-dsbk3p7x6-ferdause-al-mahmuds-projects.vercel.app/items/catagory/${subcategory_Name}`)
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [subcategory_Name])
    return (
        <div>
            {loading ? (
                <div className="flex justify-center items-center h-[50vh]">
                    <div className="loading loading-spinner loading-lg"></div>
                </div>
            ) :
                (<div className="grid p-4 md:p-0 gap-4 grid-cols-1">
                    {
                        items.map((item) => <CraftItemCard key={item._id} item={item}></CraftItemCard>)
                    }
                </div>)}
        </div>
    );
};

export default SpecificSubcategory;