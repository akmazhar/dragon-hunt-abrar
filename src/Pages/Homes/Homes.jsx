
import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header";
import LeftSideNav from "../Shared/LeftSideNav";
import Navbar from "../Shared/Navbar";
import RightSideNav from "../Shared/RightSideNav";
import BreakingNews from "./BreakingNews";



const Homes = () => {
   const news = useLoaderData();
    console.log(news); 

   




    return (
        <div>
        
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
           
            {/* <h2 className="text-3xl font-poppins font-bold border">This is home</h2> */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                 

            {/* news container */}

                <div className=" md:col-span-2 border">
                    <h2 className="text-3xl"> News coming soon...</h2>

                </div>
        
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default Homes;

