import { useEffect, useState } from "react";
import CraftItemCard from "../CraftItemCard/CraftItemCard";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const CraftItem = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://server-side-dsbk3p7x6-ferdause-al-mahmuds-projects.vercel.app/items')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
    }, [])

    const [text] = useTypewriter({
        words: ['Our Products', 'Your Satisfaction'],
        loop: 1000,
    })

    return (
        <div className="mb-10">
            <div className="mb-8">
                <h1 className="text-2xl md:text-5xl font-semibold text-center mb-3"><span>{text}</span>
                    <Cursor cursorColor='red' />
                </h1>
                <p className="text-center text-[16px] md:text-xl text-gray-600 mb-6 px-4 md:p-0 md:w-[70%] mx-auto">Discover the artistry of ceramics & pottery: from timeless clay-made vessels to elegant porcelain pieces, explore our curated selection of stoneware, terra cotta, architectural ceramics, and home decor pottery crafted to elevate your space with beauty and functionality.</p>
            </div>
            <div className="grid p-4 md:p-0 gap-4 grid-cols-1 md:grid-cols-2">
                {
                    items.slice(0, 6).map((item) => <CraftItemCard key={item._id} item={item}></CraftItemCard>)
                }
            </div>
        </div>
    );
};

export default CraftItem;