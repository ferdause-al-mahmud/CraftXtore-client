import { useEffect, useState } from "react";
import CategoriesCard from "../CategoriesCard/CategoriesCard";

const CategoriesSection = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://server-side-dsbk3p7x6-ferdause-al-mahmuds-projects.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [])
    return (
        <div data-aos="fade-down" data-aos-duration="1000" className="mb-10">
            <h1 className="text-2xl md:text-5xl font-semibold text-center mb-4">Categories</h1>
            {loading ? ( // Display loading spinner if loading is true
                <div className="flex justify-center items-center h-[50vh]">
                    <div className="loading loading-spinner loading-lg"></div>
                </div>
            ) :
                (<div className="grid grid-cols-1  md:grid-cols-2 gap-6">
                    {
                        items.map(item => <CategoriesCard key={item._id} catagory={item}></CategoriesCard>)
                    }
                </div>)
            }
        </div>
    );
};

export default CategoriesSection;