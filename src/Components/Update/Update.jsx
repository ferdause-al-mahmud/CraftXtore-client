import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const Update = () => {
    const { user } = useContext(AuthContext)
    const item = useLoaderData();
    const { _id, photo, item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus } = item;
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const item_name = form.name?.value;
        const subcategory_Name = form.category?.value;
        const short_description = form.description?.value;
        const price = form.price?.value;
        const rating = form.rating?.value;
        const customization = form.customization?.value;
        const stockStatus = form.stock?.value;
        const processing_time = form.time?.value;
        const photo = form.photo?.value;
        const email = user.email;
        const name = user.displayName;
        const updatedItem = {
            item_name: item_name,
            subcategory_Name: subcategory_Name,
            short_description: short_description,
            price: price,
            rating: rating,
            customization: customization,
            processing_time: processing_time,
            stockStatus: stockStatus,
            photo: photo,
            user_email: email,
            user_name: name
        };
        fetch(`http://localhost:3333/items/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Success!",
                        text: "Item added!",
                        icon: "success"
                    });
                }

            })
        console.log(updatedItem)
    }
    return (
        <div className='bg-[#ffebeb] p-6 md:p-20 rounded-lg mb-8'>
            <Helmet>
                <title>CraftXtore | Update</title>
            </Helmet>

            <h1 className='text-3xl md:text-6xl mb-8 text-center text-orange-400'>Update Item</h1>
            <form onSubmit={handleUpdate}>
                <div className='md:flex gap-4'>
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Item name</span>
                        </div>
                        <input type="text" defaultValue={item_name} name='name' required placeholder="Type here" className="input  w-full" />

                    </label>
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Sub Category</span>
                        </div>
                        <input type="text" defaultValue={subcategory_Name} name='category' required placeholder="Type here" className="input  w-full" />
                    </label>
                </div>
                <br />
                <div className='md:flex gap-4'>
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Price</span>
                        </div>
                        <input type="text" defaultValue={price} name='price' required placeholder="Type here" className="input  w-full" />

                    </label>
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Rating</span>
                        </div>
                        <input type="text" defaultValue={rating} name='rating' required placeholder="Type here" className="input  w-full" />
                    </label>
                </div>
                <br />
                <div className='md:flex gap-4'>
                    <div className="md:w-1/2">
                        <span className="label-text">Customization</span>
                        <br />
                        <div className="flex gap-8">
                            <div className="form-control">
                                <label className="label cursor-pointer gap-4">
                                    <span className="label-text">Yes</span>
                                    <input type="radio" className="radio" defaultChecked={customization === 'Yes'} name="customization" required value="Yes" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer  gap-4">
                                    <span className="label-text">No</span>
                                    <input type="radio" className="radio" defaultChecked={customization === 'No'} name="customization" required value="No" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <span className="label-text">Stock Status</span>
                        <br />
                        <div className="flex gap-8">
                            <div className="form-control">
                                <label className="label cursor-pointer gap-4">
                                    <span className="label-text">In stock</span>
                                    <input type="radio" className="radio" defaultChecked={stockStatus === 'In stock'} name="stock" required value="In stock" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer  gap-4">
                                    <span className="label-text"> Made to Order</span>
                                    <input type="radio" className="radio" name="stock" defaultChecked={stockStatus === 'Made to Order'} required value="Made to Order" />
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
                <br />
                <div className='md:flex gap-4'>
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Processing Time</span>
                        </div>
                        <input type="text" defaultValue={processing_time} name='time' required placeholder="Type here" className="input  w-full" />

                    </label>
                </div>
                <br />
                <div className='md:flex gap-2'>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Description
                            </span>
                        </div>
                        <textarea defaultValue={short_description} className="resize-none p-4 w-full rounded-lg " required placeholder="Type here" name="description" rows="4" ></textarea>
                    </label>
                </div>
                <br />
                <div className='md:flex gap-4'>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Photo Url</span>
                        </div>
                        <input type="text" defaultValue={photo} name='photo' required placeholder="Url" className="input  w-full" />
                    </label>
                </div>
                <br />
                <div className='w-full'>
                    <button type="submit" className='btn btn-block bg-[#ff6128] font-semibold text-xl'>Update</button>
                </div>
            </form>
        </div>
    );
};

export default Update;