import React from 'react';
import { Link } from 'react-router-dom';
const ProductCard = ({ product }) => {
    const { category_id, image, title, resalePrice, originalPrice, location, time, yearOfUse, seller, } = product;
    return (

        <div className="card card-compact w-96 bg-base-200 shadow-xl">
            <figure><img className='w-80 h-96 rounded-sm' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold justify-center">{title}</h2>
                <div className='flex font-semibold text-base '>
                    <p>Resale Price:{resalePrice}</p>
                    <p>Original Price:{originalPrice}</p>
                    <p>Use Of:{yearOfUse}</p>
                </div>
                <div className='flex '>
                    <span>{time}</span>
                    <p className='font-semibold text-base pl-6'>{seller}</p>
                    <p className='text-base'> {location}</p>
                </div>
                <div className="card-actions justify-center">
                    <Link to={`/category/${category_id}`}>   <button className=" btn btn-wide"> View All </button> </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;