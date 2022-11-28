import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryDetails from './CategoryDetails';
import BookingModal from '../../BookingModal/BookingModal';

const Category = () => {

    const data = useLoaderData();


    return (
        <section>
            <div className='grid gap-4 py-4 grid-cols-1 lg:grid-cols-3'>

                {
                    data.map(product => <CategoryDetails
                        key={product._id}
                        product={product}
                    ></CategoryDetails>)
                }

            </div>
            {
                data.map(product => <BookingModal
                    product={product}
                    key={product._id}
                ></BookingModal>)
            }
        </section>
    );

};

export default Category;