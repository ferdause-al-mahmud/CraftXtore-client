import { Cursor, useTypewriter } from "react-simple-typewriter";


const Offer = () => {

    const [offer] = useTypewriter({
        words: ['Special offer', 'Grab it Now'],
        loop: 1000,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    return (
        <div className=" mb-10 mt-[100px]">

            <h1 className="text-2xl md:text-5xl font-semibold text-center mb-4">Our Offer </h1>
            <p className="text-center text-[16px] md:text-xl text-gray-600 mb-6 px-4 md:p-0 md:w-[70%] mx-auto">Unlock artisanal elegance with our exclusive offer! Spend $39.99 and explore a world of craftsmanship. From clay-made pottery to stoneware and porcelain, discover exquisite pieces to elevate your home decor. Shop now and elevate your space with timeless charm!</p>
            <div className="relative">
                <div className="max-w-3xl relative">
                    <img src="https://i.ibb.co/D90wcRZ/decor.jpg" alt="" />
                    <div className="p-8 hidden md:inline-block md:absolute left-10 top-28 bg-opacity-40 bg-white ">
                        <h1 className="text-4xl text-gray-300 font-bold">Start From $39.99</h1>
                        <div className="flex items-center justify-center">
                            <button className="mt-3 hover:bg-opacity-80 px-4 py-3 bg-white rounded-lg font-semibold text-[16px]">Explore</button>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FAF9F6] right-40 lg:w-[500px] top-20 space-y-4 p-6 lg:absolute">
                    <h1 className="text-2xl font-semibold text-center text-orange-400">Our Products</h1>
                    <h1 className="text-2xl md:text-5xl text-gray-700 font-semibold text-center mb-4">                    <span> {offer}</span>
                        <Cursor cursorColor='red' /></h1>
                    <p className="text-xl md:text-3xl text-gray-500 font-semibold text-center mb-4">Stoneware</p>
                    <p className="text-xl md:text-3xl text-gray-500 font-semibold text-center mb-4">Porcelain</p>
                    <p className="text-xl md:text-3xl text-gray-500 font-semibold text-center mb-4">Terra Cotta</p>
                    <p className="text-xl md:text-3xl text-gray-500 font-semibold text-center mb-4">decor pottery</p>
                    <div className="flex items-center justify-center">
                        <button className="mt-3 hover:bg-opacity-80 px-4 py-3 bg-orange-500 rounded-lg font-semibold text-[16px]">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;