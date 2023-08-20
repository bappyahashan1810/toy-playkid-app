import React from 'react';
import pic1 from '../../../../assests/pictures/carosal/pic1.jpg';
import pic2 from '../../../../assests/pictures/carosal/pic2.jpg';
import pic3 from '../../../../assests/pictures/carosal/pic3.jpg';
import { PiArrowBendDoubleUpRightLight } from 'react-icons/pi';

const Carosal = () => {
    return (
        <div className='mt-8'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={pic1} className="w-full" />
                    <div className="absolute   right-1/4 top-1/3">
                        <div>
                            <h1 className='text-2xl text-white bg-pink-400 p-4 font-bold'><i>Big Discount</i></h1>
                        </div>
                    </div>
                    <div className="absolute  mt-0 right-[100px] top-[45%]">
                        <>
                            <h1 className='text-7xl text-[#3498DB]  font-bold'>KIDS OFFERS</h1>
                        </>
                    </div>
                    <button className="btn bg-[#3498DB] hover:bg-[#2E86C1] border-0 text-white text-2xl absolute  right-1/4 top-[65%]">
                        <p>Shop Now</p>
                        <PiArrowBendDoubleUpRightLight></PiArrowBendDoubleUpRightLight>

                    </button>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={pic2} className="w-full" />

                    <div className="absolute   right-1/4 top-1/3">
                        <div>
                            <h1 className='text-2xl text-white bg-pink-400 p-4 font-bold'><i>Big Discount</i></h1>
                        </div>
                    </div>
                    <div className="absolute  mt-0 right-[100px] top-[45%]">
                        <>
                            <h1 className='text-7xl text-[#3498DB]  font-bold'>KIDS OFFERS</h1>
                        </>
                    </div>
                    <button className="btn bg-[#3498DB] hover:bg-[#2E86C1] border-0 text-white text-2xl absolute  right-1/4 top-[65%]">
                        <p>Shop Now</p>
                        <PiArrowBendDoubleUpRightLight></PiArrowBendDoubleUpRightLight>

                    </button>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={pic3} className="w-full" />

                    <div className="absolute   right-1/4 top-1/3">
                        <div>
                            <h1 className='text-2xl text-white bg-pink-400 p-4 font-bold'><i>Big Discount</i></h1>
                        </div>
                    </div>
                    <div className="absolute  mt-0 right-[100px] top-[45%]">
                        <>
                            <h1 className='text-7xl text-[#3498DB]  font-bold'>KIDS OFFERS</h1>
                        </>
                    </div>
                    <button className="btn bg-[#3498DB] hover:bg-[#2E86C1] border-0 text-white text-2xl absolute  right-1/4 top-[65%]">
                        <p>Shop Now</p>
                        <PiArrowBendDoubleUpRightLight></PiArrowBendDoubleUpRightLight>

                    </button>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Carosal;