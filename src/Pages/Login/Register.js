import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Register = () => {

    const [error, setError] = useState('');

    const { createUser, } = useContext(AuthContext);


    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
    }

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;


        const password = form.password.value;
        console.log(name, email, password);


        createUser(email, password,)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();


                navigate(from, { replace: true });

            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold">Register Now!</h1>
                        </div>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label text-center">
                                    <p className='text-sm font-semibold ml-2 hover:text-slate-900'><Link to='/login'>Already have an account</Link></p>
                                </label>

                            </div>
                            <div className="form-control mt-2">
                                <input className="btn w-full btn-primary" type="submit" value="Register" />
                            </div>
                            <p className='text-red-600'> {error}</p>
                        </form>
                        <span className='flex justify-center mb-2 font-semibold'>
                            <p>Buyer</p>  <input type="radio" required name="radio-5" value="seller" className="radio mr-2 radio-success" />
                            <p>Seller</p>   <input type="radio" required name="radio-5" value='buyer' className="radio  radio-success" checked />
                        </span>


                        <div className='text-center'>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline w-full text-black mr-1"><FaGoogle></FaGoogle>Login with Google</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;