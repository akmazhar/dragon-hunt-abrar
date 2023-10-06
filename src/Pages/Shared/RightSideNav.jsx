import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {

    return (

        <div>
            <div className='p-2 space-y-3'>           
            <button className="btn btn-outline w-full">
             <FcGoogle></FcGoogle>
             Login with Google
            </button>           
            </div>

            <div className='p-2 space-y-3'>
            {/* <h2 className="text-3xl">Login with</h2> */}
            <button className="btn btn-outline w-full">
            <FaGithub></FaGithub>
             Login with Github
            </button>           
        </div>   
           
            <div className='p-4 mb-6'>
            <h2 className="text-3xl mb-4">Find Us On</h2>
            <a className='p-4 flex text-lg items-center rounded-x' href=''><FaFacebook className='mr-3'></FaFacebook><span>Facebook</span> </a>
            <a className='p-4 flex text-lg items-center rounded-x' href=''><FaTwitter className='mr-3'></FaTwitter><span>Twitter</span></a>
            <a className='p-4 flex text-lg items-center rounded-b-lg' href=''><FaInstagram className='mr-3'></FaInstagram><span>Instagram</span></a>
            </div>  
        
            {/* Q ZONE */}
        
            <div className='p-2 space-y-3'>           
                <h2 className='text-3xl'>Q Zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
                  
        </div>           
        </div>

    
    );
};

export default RightSideNav;