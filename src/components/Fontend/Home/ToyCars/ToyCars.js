import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryTab from './CategoryTab';


const ToyCars = () => {
    const categoryCars = useLoaderData();
    const [tab, setTab] = useState(1);

    const sportsCars = categoryCars.filter(car => car.category === 'sports car');
    const toyTruck = categoryCars.filter(truck => truck.category === 'toy truck');
    const regularCars = categoryCars.filter(truck => truck.category === 'regular car');
    const minifiretruck = categoryCars.filter(car => car.category === 'mini fire truck');
    console.log(sportsCars, toyTruck, regularCars, minifiretruck);
    const products = tab === 1 ? sportsCars : tab === 2 ? toyTruck : tab === 3 ? regularCars : tab === 4 ? minifiretruck : null;
    const activeTab = number => {
        setTab(number);
    }

    return (
        <div className=' w-full'>
            <div className='flex border-2 p-3 bg-[#5DADE2] gap-20 justify-center text-white'>
                <div className={`border-white p-3 rounded-md ${tab === 1 ? 'border-b-2 ' : 'border'}`} onClick={() => activeTab(1)}>sports car</div>
                <div className={`border-white p-3 rounded-md ${tab === 2 ? 'border-b-2 ' : 'border'}`} onClick={() => activeTab(2)}>truck</div>
                <div className={`border-white p-3 rounded-md ${tab === 3 ? 'border-b-2 ' : 'border'}`} onClick={() => activeTab(3)}>regular car</div>
                <div className={`border-white p-3 rounded-md ${tab === 4 ? 'border-b-2 ' : 'border'}`} onClick={() => activeTab(4)}>mini fire truck</div>


            </div>
            <div className='grid grid-cols-3 gap-5 '>
                {
                    products.map(product => <CategoryTab
                        key={product._id}
                        product={product}
                    ></CategoryTab>)
                }
            </div>

        </div>
    );
};

export default ToyCars;