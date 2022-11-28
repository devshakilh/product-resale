import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddService = () => {
    const { user } = useContext(AuthContext);
    // const [add, setAdd] = useState([])


    const handlePlaceAdd = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const email = user?.email || 'unregistered';
        const resalePrice = form.resalePrice.value;
        const short_des = form.short_des.value;
        const condition = form.condition.value;
        const mobile = form.mobile.value;
        const yearOfUse = form.yearOfUse.value;
        const location = form.location.value;
        const originalPrice = form.originalPrice.value;
        const image = form.image.value;
        const category_id = form.category_id.value;
        const add = {

            title,
            resalePrice,
            email,
            short_des,
            condition,
            mobile,
            yearOfUse,
            location,
            originalPrice,
            category_id,
            image
        }
        console.log(add)
        fetch('https://product-seller-server.vercel.app/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('add placed Successfully!');
                    form.reset();
                }
            })

            .catch(err => console.error(err));
    }
    return (
        <div>

            <form onSubmit={handlePlaceAdd} className='bg-slate-200 py-4'>
                {/* <h2 className='text-4xl text-black my-4 text-semibold'>You are about Review: {title}</h2> */}
                <ToastContainer />
                <div className='grid grid-cols-1  ml-10 lg:grid-cols-2 gap-4 mb-2'>
                    <input name='name' readOnly type="text" placeholder="Your Name" required defaultValue={user?.displayName} className="input input-bordered input-info required: w-full max-w-xs" />

                    <input name='title' type="text" placeholder="Product Name" required className="input input-bordered input-info w-full max-w-xs" />
                    <input name='resalePrice' type="text" placeholder="Resale Price" required className="input input-bordered input-info w-full max-w-xs" />
                    <input name='email' readOnly type="text" placeholder="Your email" required defaultValue={user?.email} className="input input-bordered input-info required: w-full max-w-xs" />
                    <input name='condition' type="text" placeholder="Condition Type" required className="input input-bordered input-info required: w-full max-w-xs" />
                    <input name='mobile' type="text" placeholder="Mobile Number" required className="input input-bordered input-info w-full max-w-xs" />
                    <input name='location' required type="text" placeholder="Location" className="input input-bordered input-info w-full max-w-xs" />
                    <input name='category_id' type="number" placeholder="Product Id Walton-1, Lg-2, Singer-3" required className="input  input-bordered input-info w-full max-w-xs" />
                    <input name='originalPrice' type="text" placeholder="Original Price" required className="input input-bordered input-info w-full max-w-xs" />
                    <input name='yearOfUse' type="text" placeholder="Year Of Purchase" required className="input input-bordered input-info w-full max-w-xs" />
                    <input name='image' type="text" placeholder="Image" required className="input input-bordered input-info w-full max-w-xs" />

                </div>

                <textarea className="textarea h-24 w-full textarea-accent" name='short_des' placeholder="Description" required></textarea>
                <div className='text-center'>
                    <input className=' btn text-white ' type="submit" value="Add Product" />
                </div>
            </form>
            {/* <AddServiceCard></AddServiceCard> */}
        </div>
    );
};

export default AddService;