import { Outlet } from "react-router-dom";


const MainRoot = () => {
    return (
        <div className="max-w-7xl mx-auto px-7">
            <Outlet></Outlet>
        </div>
    );
};

export default MainRoot;