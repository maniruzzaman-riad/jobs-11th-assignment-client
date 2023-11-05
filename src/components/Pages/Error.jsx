import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <div className="w-1/4 mx-auto text-center">
                <h2 className="text-5xl font-bold mt-16 mb-4">404 not found</h2>
                <Link to='/'><button className="btn btn-outline">Back to Home</button></Link>
                
            </div>
        </div>
    );
};

export default Error;