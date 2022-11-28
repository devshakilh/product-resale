import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BookingModal = ({ product }) => {
    const { title, price, } = product;
    const { user } = useContext(AuthContext);
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const product = form.product.value;
        const phone = form.phone.value;
        const price = form.price.value;
        const location = form.location.value;
        const booking = {
            patient: name,
            email,
            product,
            phone,
            price,
            location

        }
        fetch('https://product-seller-server.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booking confirmed')
                }


            })

    }
    const submit = {

    }
    return (
        <div>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">{title} Refrigerator</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1'>
                        <input name='product' type="text" placeholder="product" className="input input-bordered mb-1 input-accent " />
                        <input name='name' defaultValue={user?.displayName} disabled type="text" placeholder="Your Name" className="input input-bordered mb-1 input-accent " />
                        <input name='email' defaultValue={user?.email} disabled type="email" placeholder="Email Address" className="input input-bordered mb-1 input-accent " />
                        <input defaultValue={user?.price} name='price' disabled type="text" placeholder="Price" className="input input-bordered mb-1 input-accent " />
                        <input name='phone' type="text" placeholder="Phone" className="input input-bordered mb-1 input-accent " />
                        <input name='location' type="text" placeholder="meting location" className="input input-bordered mb-1 input-accent " />

                        <br />
                        <ToastContainer />
                        <input onClick={submit} className=' w-full btn btn-wide ' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;