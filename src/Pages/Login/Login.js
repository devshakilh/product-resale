import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Login = () => {



    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
    }

    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                form.reset();
                setError('');
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                // fetch('https://assignment-11-server-blush.vercel.app/jwt', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(currentUser)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log(data);
                //         // local storage is the easiest but not the best place to store jwt token
                //         localStorage.setItem('genius-token', data.token);
                //         navigate(from, { replace: true });
                //     });
                navigate(from, { replace: true });


            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }



    return (
        <div>

            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                        </div>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    <p className='text-sm font-semibold ml-2 hover:text-slate-900'><Link to='/register'>New to Register</Link></p>
                                </label>

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn w-full btn-primary" type="submit" value="Login" />

                            </div>
                            {error}
                        </form>
                        <div className='text-center'>
                            <button onClick={handleGoogleSignIn} className="btn w-full btn-outline text-black mr-1"><FaGoogle></FaGoogle>Login with Google</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;