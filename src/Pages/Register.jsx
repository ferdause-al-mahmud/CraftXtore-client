import { Link } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Register = () => {

    const [eye, setEye] = useState(false);
    const handleEye = () => {
        setEye(!eye)
    }
    const handleRegister = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <Helmet>
                <title>Resort Seeker | Register</title>
            </Helmet>
            <div className="hero pb-16 bg-login-bg">
                <div className="hero-content md:w-[80%] flex-col">
                    <div className="text-center ">
                        <h1 className="text-3xl md:text-5xl font-bold">Register</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Photo URL"
                                    name="photourl"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input

                                        type={eye ? "text" : "password"}
                                        placeholder="password"
                                        name="password"
                                        className="input w-full input-bordered"
                                        required
                                    />
                                    <div onClick={handleEye} className="absolute top-3 text-xl right-2">{eye ? <IoEyeOff /> : <IoEye />}</div>
                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn hover:scale-110  bg-gradient-to-r from-yellow-300 to-[#E818D0]">
                                    Register
                                </button>
                            </div>
                        </form>
                        <p className="text-center mb-3">
                            Already have an account?{" "}
                            <Link className="text-blue-500 underline" to="/login">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;