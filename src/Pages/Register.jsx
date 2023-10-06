// import { useContext } from "react";

import { Link } from "react-router-dom";
import Navbar from "./Shared/Navbar";



const Register = () => {

    // const { createUser } = useContext(AuthContext);
 


    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
   
     
      // crete user in firebase
        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })
    }



    return (

     <div>
        <Navbar></Navbar>
        <h1 className="text-3xl text-center text-pink-900 font-bold mt-10">Register Your Account</h1>
    
     <div>
      
      <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto shadow-lg" >
    
      <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Your Name</span>
          </label>
    
    
          <input type="text"
           placeholder="Enter your name" 
           className="input input-bordered" 
           name="name" required />
    
        </div>



        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Photo URL</span>
          </label>
    
    
          <input type="text"
           placeholder="Enter your photo url" 
           className="input input-bordered" 
           name="name" required />
    
        </div>





      <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
    
    
          <input type="email"
           placeholder="Enter your email" 
           className="input input-bordered" 
           name="email" required />
    
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Password</span>
          </label>
          <input type="password" 
          placeholder="Enter your password" 
          className="input input-bordered"
          name="password" required />
    
    
    
          {/* <label className="label">
            <a href="#" className="label-text-alt link text-red-400 font-semibold link-hover">Forgot password?</a>
          </label> */}
          <div className="">
           <input className="mr-48 mt-5 ml-10" type="checkbox" name="terms" id="terms"/>
          <label className="textarea" htmlFor="terms">Accept our <a href="#">Terms and Condition</a></label>
          </div>
          </div>

        <div className="form-control mt-3">
          <button className="btn bg-pink-900 text-white">Register</button>
        </div>
      </form>
    
    <p className="mt-5 text-center">Already have account? Please <Link to="/login"><button className=" text-green-700 font-bold">Login</button></Link></p>
    
    
      </div>
    </div>
   
    );
    };
    

export default Register;