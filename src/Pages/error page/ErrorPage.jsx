import { Link } from "react-router-dom";
import { TriangleAlert } from "lucide-react";

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">

            <div className="bg-base-100 shadow-2xl rounded-3xl p-10 max-w-lg w-full text-center">

                {/* Icon */}
                <div className="flex justify-center mb-5">
                    <div className="bg-red-100 p-5 rounded-full">
                        <TriangleAlert className="w-14 h-14 text-red-500" />
                    </div>
                </div>

                {/* Error Code */}
                <h1 className="text-6xl font-extrabold text-red-500 mb-3">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-2xl font-bold mb-3">
                    Oops! Page Not Found
                </h2>

                {/* Description */}
                <p className="text-gray-500 mb-8">
                    The page you are looking for does not exist or has been moved.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">

                    <Link
                        to="/"
                        className="btn btn-success rounded-xl px-8"
                    >
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="btn btn-outline rounded-xl px-8"
                    >
                        Go Back
                    </button>

                </div>

            </div>

        </div>
    );
};

export default ErrorPage;