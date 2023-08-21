import React from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { BiAddToQueue } from 'react-icons/bi';

const AddToy = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const url = form.url.value;
        const name = form.name.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const sellerName = form.sellerName.value;
        const newToy = { url, name, email, category, price, rating, quantity, description, sellerName };
        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Successfully Added');
                    form.reset();
                }

            })

    }
    return (
        <div className='mt-8 relative'>
            <div>
                <h1 className='text-5xl font-bold text-[#3498DB] text-center'>
                    Add A New Toy Product
                </h1>
            </div>
            <form onSubmit={handleSubmit} className=''>
                <div className=' absolute right-10 top-0 flex bg-green-600 p-3 items-center rounded-md text-white'>
                    <input className='' type="submit" value="Add Toy" />
                    <BiAddToQueue className='text-xl ml-2'></BiAddToQueue>
                </div>
                <div className='mt-12 flex items-center justify-between mx-auto'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Picture URL of the toy</span>

                        </label>
                        <input type="text" name='url' placeholder="Picture URL" className="input input-bordered input-info w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>
                        <input type="text" name='name' placeholder="Type Name" className="input input-bordered input-info w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Enter Email</span>

                        </label>
                        <input type="text" name='email' placeholder="Type name" className="input input-bordered input-info w-full max-w-xs" />

                    </div>
                </div>
                <div className='mt-5 flex items-center justify-between mx-auto'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Enter Sub-category</span>

                        </label>
                        <input type="text" name='category' placeholder="Type sub-category" className="input input-bordered input-info w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Enter Price</span>

                        </label>
                        <input type="text" name='price' placeholder="Type price" className="input input-bordered input-info w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Enter Rating</span>

                        </label>
                        <input type="text" name='rating' placeholder="Type rating" className="input input-bordered input-info w-full max-w-xs" />

                    </div>
                </div>
                <div className='mt-5 flex items-center justify-between mx-auto'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>

                        </label>
                        <input type="text" name='quantity' placeholder="Type quantity" className="input input-bordered input-info w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Detail description</span>

                        </label>
                        <input type="text" name='description' placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Seller Name</span>

                        </label>
                        <input type="text" name='sellerName' placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />

                    </div>
                </div>
            </form>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default AddToy;