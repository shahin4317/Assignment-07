import { useLoaderData } from "react-router";



const CardSummary = () => {
    const friendData = useLoaderData();
    console.log(friendData);


    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">



                <div className="bg-base-200 rounded-2xl p-6 shadow-md hover:shadow-xl ">
                    <h1 className="text-xl font-semibold mb-2 text-center">{friendData.length}</h1>
                    <p className="text-base-content/70 font-medium text-center">
                        Total Friends
                    </p>

                </div>

                <div className="bg-base-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                    <h1 className="text-xl font-semibold mb-2 text-center">32</h1>
                    <p className="text-base-content/70 font-medium text-center">
                        Pending Contacts
                    </p>
                </div>

                <div className="bg-base-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                    <h1 className="text-xl font-semibold mb-2 text-center">18</h1>
                    <p className="text-base-content/70 font-medium text-center">
                        Overdue
                    </p>
                </div>

                <div className="bg-base-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                    <h1 className="text-xl font-semibold mb-2 text-center">76%</h1>
                    <p className="text-base-content/70 font-medium text-center">
                        Relationship Score
                    </p>
                </div>

            </div>
        </div>
    );
};

export default CardSummary;