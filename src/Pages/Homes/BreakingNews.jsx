import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {


    return (


        <div className="flex">
        <button className="btn btn-secondary">Breaking News</button>
        <Marquee pauseOnHover={true} speed={100}>
         <Link className="mr-12 text-blue-700 " to="/">Mr A K M Abrar Ahmed hunt the dragon and drive it on mankind....</Link>
         <Link className="mr-12 text-green-600" to="/">Mrs Tamanna Azhar achieved Prime Minister scholarship</Link>
         <Link className="mr-12 text-red-700 " to="/">Mr A K M Abrar Ahmed hunt the dragon and drive it on mankind....</Link>
         <Link className="mr-12 text-yellow-600" to="/">Mrs Tamanna Azhar achieved Prime Minister scholarship</Link>
        </Marquee>
        </div>

    );
};

export default BreakingNews;