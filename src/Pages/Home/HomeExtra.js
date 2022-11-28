import React from 'react';

const HomeExtra = () => {
    return (
        <div>
            <div className="card lg:card-side shadow-xl  my-6">
                <div className='grid  bg-zinc-700  grid-cols-1 gap-2   lg:w-1/2 lg:grid-cols-2'>
                    <div >
                        <figure><img className='lg:h-72  lg:w-72 h-96 w-96   mb-6' src="https://i.ibb.co/jWqV6D6/534-14-070-921x.webp" alt="Album" /></figure>
                        <figure><img className='lg:h-72 mb-4 lg:w-72 h-96 w-96' src="https://i.ibb.co/qxqfsBT/banner3.jpg" alt="Album" /></figure>
                    </div>
                    <div>
                        <figure><img className='mb-6  lg:h-72 lg:w-72 h-96 w-96' src="https://i.ibb.co/tM1Y0GT/W020220418469705137506-350.jpg" alt="Album" /></figure>
                        <figure><img className='lg:h-72 lg:w-72 h-96 w-96' src="https://i.ibb.co/vQZn1mN/images.jpg" alt="Album" /></figure>
                    </div>
                </div>

                <div className="card-body content-center lg:w-1/2">
                    <h1 className="text-5xl font-bold ">Non-Frost Refrigerator!</h1>
                    <p className="py-6">Direct Cool Refrigerator
                        Welcome to an experience of freshness. WALTON Direct Cool Refrigerators are equipped with 100% copper condensers and Nano technology to take care of your evolving needs and at the same time, maintain the quality of the food that you preserve</p>
                    <p className="py-6">When you have Walton refrigerator & freezer in your home you are safe from going to market every day that keeps you free from extra burden. You can keep all your foods and stuffs fresh for long. Our energy-saving, </p>

                </div>
            </div>
        </div>
    );
};

export default HomeExtra;