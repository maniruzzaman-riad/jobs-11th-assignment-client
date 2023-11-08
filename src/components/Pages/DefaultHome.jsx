import Banner from "./Banner";
import Home from "./Home";



const DefaultHome = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="mt-4">
                <Home></Home>
            </div>
        </div>
    );
};

export default DefaultHome;