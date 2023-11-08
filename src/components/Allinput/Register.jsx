import { Link, useNavigate } from "react-router-dom";
import registerLogo from '../../assets/register.svg';
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";


const Register = () => {
    const { userRegistration } = useContext(AuthContext)
    const [checkPassword, setCheckPassword] = useState("")
    const navigate = useNavigate()




    const handleRegistration = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password')

        setCheckPassword('')

        if (password.length < 6) {
            setCheckPassword('Please password add minimum 6 characters')
            return;
        }
        else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password)) {
            setCheckPassword('Use must one uppercase, one lowercase, one number and one special character')
            return;
        }

        userRegistration(email, password)
            .then(user => {
                // Swal.fire({
                //     position: 'center',
                //     icon: 'success',
                //     title: 'Registration Succesfull',
                //     showConfirmButton: false,
                //     timer: 2000
                // })
                updateProfile(user.user, {
                    displayName: name
                })
                    .then(
                        navigate('/')
                    )
                    .catch()
            })
            .catch(error => {
                if (error) {
                    setCheckPassword('Email-already-in-use')
                }
                // console.log(error.message);
            })
    }

    return (
        <div>
            <div className="min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row">
                    <img className="w-full md:w-1/2 p-12 " src={registerLogo} alt="" />
                    <div className="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
                        <form onSubmit={handleRegistration} className="card-body">
                            <h1 className="text-5xl font-bold">Registration Here</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            </div>
                            {
                                checkPassword && <h2 className="text-center my-5 font-semibold text-red-600">{checkPassword}</h2>
                            }

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Registration</button>
                            </div>
                        </form>
                        <h2 className="text-center my-5 font-semibold">If you have Already an account,Please Click Here to <Link to="/login"><span className="py-1 px-3 bg-green-600 rounded-lg text-white font-semibold">Login</span></Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;