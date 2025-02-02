import { useEffect, useState } from "react";
import CraftItemCard from "../CraftItemCard/CraftItemCard";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const CraftItem = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://craftxstore.vercel.app/items')
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

    const [text] = useTypewriter({
        words: ['Our Products', 'Your Satisfaction'],
        loop: 1000,
    })

    return (
        <div data-aos="zoom-in-up" data-aos-duration="1000" className="mb-10 ">
            <div className="mb-8">
                <h1 className="text-2xl md:text-5xl font-semibold text-center mb-3"><span>{text}</span>
                    <Cursor cursorColor='red' />
                </h1>
                <p className="text-center text-[16px] md:text-xl text-gray-600 mb-6 px-4 md:p-0 md:w-[70%] mx-auto">Discover the artistry of ceramics & pottery: from timeless clay-made vessels to elegant porcelain pieces, explore our curated selection of stoneware, terra cotta, architectural ceramics, and home decor pottery crafted to elevate your space with beauty and functionality.</p>
            </div>
            {loading ? (
                <div className="flex justify-center items-center h-[50vh]">
                    <div className="loading loading-spinner loading-lg"></div>
                </div>
            ) :
                (<div className="grid p-4 md:p-0 gap-4 grid-cols-1 md:grid-cols-2">
                    {
                        items.slice(0, 6).map((item) => <CraftItemCard key={item._id} item={item}></CraftItemCard>)
                    }
                </div>)}
        </div>
    );
};

export default CraftItem;