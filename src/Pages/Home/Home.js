import React from 'react';
import Product from '../Product/Product';
import HomeExtra from './HomeExtra';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen " style={{ backgroundImage: `url("https://kitchenaid-h.assetsadobe.com/is/image/content/dam/business-unit/whirlpoolv2/en-us/marketing-content/site-assets/page-content/oc-articles/guide-to-refrigerator-sizes-dimensions/guide-to-refrigerator-sizes-dimensions_IMG1.jpg?fmt=png-alpha&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&scl=1&constrain=fit,1")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl  font-bold">Direct Cool Refrigerator Welcome</h1>
                        <p className="mb-5 ">Stylish and efficient, WALTON, LG, Singer Non-Frost Refrigerator adds style to any kitchen and offers a host of interior features that save you space and energy.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="card lg:card-side shadow-xl  my-6">
                <div className='grid  bg-zinc-700  grid-cols-1    lg:w-1/2 lg:grid-cols-2'>
                    <div >
                        <figure><img className='lg:h-72  lg:w-64 h-96 w-96 my-4  ' src="https://i.ibb.co/0jGkDnd/lg.gif" alt="Album" /></figure>
                        <figure><img className='lg:h-72 mb-4 lg:w-64 h-96 w-96' src="https://i.ibb.co/4FYcnP0/singer.png" alt="Album" /></figure>
                    </div>
                    <div>
                        <figure><img className='  lg:h-72 lg:w-64 h-96 w-96 my-4' src="https://i.ibb.co/P969NZ0/walton.jpg" alt="Album" /></figure>
                        <figure><img className='lg:h-72 lg:w-64 h-96 w-96' src="https://i.ibb.co/WynmPm7/comming.webp" alt="Album" /></figure>
                    </div>
                </div>

                <div className="card-body content-center lg:w-1/2">
                    <h1 className="text-5xl font-bold ">Best Refrigerator! in Bangladesh</h1>
                    <p className="py-6 text-3xl
                     font-bold">Direct Cool Refrigerator <br />
                        Walton <br /> Singer</p>
                    <p className="py-6 text-3xl font-bold">LG <br /> Coming Soon.. </p>

                </div>
            </div>
            <div>

                <Product></Product>
                <HomeExtra></HomeExtra>
            </div>
        </div>
    );
};

export default Home;