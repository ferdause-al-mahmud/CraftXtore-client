import { useParams } from "react-router-dom";
import CraftItemCard from "../CraftItemCard/CraftItemCard";
import { useEffect, useState } from "react";

const SpecificSubcategory = () => {
    const { subcategory_Name } = useParams();
    const [items, setItems] = useState([])
    console.log(subcategory_Name)
    useEffect(() => {
        fetch(`https://server-side-dsbk3p7x6-ferdause-al-mahmuds-projects.vercel.app/items/cata/${subcategory_Name}`)
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [subcategory_Name])
    return (
        <div>
            <div className="grid p-4 md:p-0 gap-4 grid-cols-1">
                {
                    items.map((item) => <CraftItemCard key={item._id} item={item}></CraftItemCard>)
                }
            </div>
        </div>
    );
};

export default SpecificSubcategory;