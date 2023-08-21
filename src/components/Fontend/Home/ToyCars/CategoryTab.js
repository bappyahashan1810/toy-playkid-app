import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const CategoryTab = ({ product }) => {
    const { url, name, price, rating, _id } = product;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='h-[300px] w-[300px]' src={url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <p className='gap-2 text-xl flex items-center'>
                        <AiFillStar className='text-[#F4D03F]'></AiFillStar>
                        <AiFillStar className='text-[#F4D03F]'></AiFillStar>
                        <AiFillStar className='text-[#F4D03F]'></AiFillStar>
                        {rating}
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryTab;