import { Link } from "react-router";

const FriendsDetalis = ({ detalis }) => {
    const { id,name, picture, days_since_contact, tags, status } = detalis;

    return (
        <Link to={`/cardDetails/${id}`} className="container mx-auto ">
            <div className=" bg-base-200 w-80 p-15 text-center rounded-2xl">
                <img className="w-15 h-15 mx-auto rounded-full object-cover mb-4" src={picture} alt="" />
                <h2 className="font-bold">{name}</h2>
                <p className="text-sm ">{days_since_contact}d ago</p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                    {
                        tags.map((tag, index) => (
                            <p
                                key={index}
                                className="bg-green-300  px-3 py-1 rounded-full text-sm mb-5"
                            >
                                {tag}
                            </p>
                        ))
                    }
                </div>
                <p className={`mx-15 py-1 rounded-full text-white ${status === "on-track"? "bg-green-800" : status === "almost-due" ? "bg-amber-500" : "bg-red-700"}`}>{status}</p>

            </div>


        </Link>
    );
};

export default FriendsDetalis;