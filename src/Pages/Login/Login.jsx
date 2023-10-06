import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => { 
   const {signIn} = useContext(AuthContext);


     const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email.password)
        .then(result => {
         console.log(result.user);
        })
        .catch(error =>{
         console.error(error);
        })
     }






    return (


        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl my-10 text-center">Please login</h2>
             
         <div>
                
            <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
            <div className="form-control">
            <label className="label">
            <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
            <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
           <label className="label">
            <a href="#" className="label-text-alt link link-hover text-red-500">Forgot password?</a>
           </label>
           </div>
           <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
            </div>
            </form>

            <p className="text-center mt-5">Do you have an account? Please <Link to="/register"><button className="font-semibold text-green-600 ">Register</button></Link> </p>
            
         </div>

       </div>

    );
};

export default Login;