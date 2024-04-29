import { useEffect, useState } from "react";
import CategoriesCard from "../CategoriesCard/CategoriesCard";

const CategoriesSection = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3333/categories')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
    }, [])
    return (
        <div className="mb-10">
            <h1 className="text-2xl md:text-5xl font-semibold text-center mb-4">Categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    items.map(item => <CategoriesCard key={item._id} catagory={item}></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default CategoriesSection;