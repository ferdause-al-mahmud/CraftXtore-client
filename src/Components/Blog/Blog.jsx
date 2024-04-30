
const Blog = () => {
    return (
        <div data-aos="zoom-in" data-aos-duration="1000"
            className=" mb-10 mt-[100px]">

            <h1 className="text-2xl md:text-5xl font-semibold text-center mb-4">Latest Update</h1>

            <div className="md:flex gap-6">

                {/* card 1 */}

                <div className="flex flex-col-reverse  md:w-1/2 p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">

                    <div>
                        <img src="https://i.ibb.co/t8HT1sy/rsz-2.jpg" alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500 dark:bg-gray-500" />

                    </div>

                    <div>

                        <h2 className="mb-1 text-xl font-semibold">Crafted Elegance: Exploring the Artistry of Ceramic Plates</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400"> Elegant vessels of culinary delight, crafted with precision and tradition. These timeless pieces bring sophistication to any table setting, their smooth surfaces reflecting the artistry of their makers. From delicate floral patterns to sleek minimalist designs, ceramic plates elevate dining experiences with their versatility and charm.</p>
                        <button className="my-3 hover:bg-opacity-80 px-4 py-3 bg-orange-500 rounded-lg font-semibold text-[16px]">Read More</button>
                    </div>
                </div>


                {/* card 2  */}
                <div className="flex flex-col  md:w-1/2 p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">

                    <div>
                        <img src="https://i.ibb.co/Gc8xXBP/rsz-1.jpg" alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500 dark:bg-gray-500" />

                    </div>

                    <div>

                        <h2 className="mb-1 text-xl font-semibold">Earthen Elegance: Unraveling the Art of Clay Making Pots</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400"> A testament to the earth{"'"}s embrace, these vessels embody centuries of tradition and craftsmanship. From rustic terracotta to polished stoneware, clay pots bear the marks of their makers hands, each imperfection telling a story of heritage and artistry. Versatile and timeless, they lend warmth and character to any culinary creation, infusing dishes with a taste of authenticity and tradition.</p>
                        <button className="mt-3 hover:bg-opacity-80 px-4 py-3 bg-orange-500 rounded-lg font-semibold text-[16px]">Read More</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;