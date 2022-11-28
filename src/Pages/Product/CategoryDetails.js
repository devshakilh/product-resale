import React from 'react';


const CategoryDetails = ({ product }) => {
    const { image, title, resalePrice, mobile, originalPrice, location, time, yearOfUse, seller, short_des } = product;
    return (
        <div className="card  card-compact w-full bg-base-200 shadow-xl">
            <figure><img className='w-80 h-96 rounded-sm' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold justify-center">{title}</h2>
                <p className='text-sm'>{short_des}</p>
                <div className='flex font-semibold text-base '>
                    <p>Resale Price:{resalePrice}</p>
                    <p>Original Price:{originalPrice}</p>
                    <p>Use Of:{yearOfUse}</p>
                </div>
                <div className='flex '>
                    <span>{time}</span>
                    <p className='font-semibold text-base pl-6'>{seller}</p>
                    <p className='text-base'> {location}</p>
                    <p>{mobile}</p>
                </div>
                <div className="card-actions justify-center">

                    <label htmlFor="booking-modal" className=" btn btn-wide">Book Now</label>

                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;