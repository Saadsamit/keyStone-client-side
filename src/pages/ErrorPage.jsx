import { Link } from "react-router-dom";

const ErrorPage = () => {
    
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="text-center space-y-4">
                <h3 className="text-[#1F8A70] text-7xl fond-bold capitalize">
                    404
                </h3>
                <p className="text-[#00425A] text-2xl fond-bold capitalize">page not found</p>
                <Link to={'/'} className="btnStyle">
                    go to home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;