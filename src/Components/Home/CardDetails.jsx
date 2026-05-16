import { FaBoxArchive } from 'react-icons/fa6';
import { HiBellSnooze } from 'react-icons/hi2';
import { MdDelete } from 'react-icons/md';
import { Link, useLoaderData, useParams } from 'react-router';
import call from '../../assets/call.png';
import text from '../../assets/text.png';
import video from '../../assets/video.png';
import { useContext } from 'react';
import { FriendContext } from '../../Context/FriendContex';

const CardDetails = () => {

    const { id } = useParams();

    const friends = useLoaderData();

    const expectedFriend = friends.find(friend => friend.id == id);

    const {
        name,
        picture,
        days_since_contact,
        tags,
        status,
        bio,
        email,
        goal,
        next_due_date
    } = expectedFriend;

    const {
        handelCall,
        calling,
        handelText,
        handelVideo
    } = useContext(FriendContext);

    console.log(handelCall, calling);

    return (

        <div className='container mx-auto px-4 py-5 lg:flex gap-10'>

            {/* LEFT */}
            <div className='flex justify-center'>

                <div className="w-full max-w-sm">

                    {/* PROFILE CARD */}
                    <div className="bg-base-200 w-full p-8 rounded-2xl text-center">

                        <img
                            className="w-20 h-20 mx-auto rounded-full object-cover mb-3"
                            src={picture}
                            alt=""
                        />

                        <h2 className="font-bold text-xl">
                            {name}
                        </h2>

                        <p className="text-sm mb-3">
                            {days_since_contact}d ago
                        </p>

                        <p
                            className={`w-32 mx-auto py-1 rounded-full text-white
                            ${status === "active"
                                    ? "bg-green-800"
                                    : status === "inactive"
                                        ? "bg-amber-500"
                                        : "bg-red-700"
                                }`}
                        >
                            {status}
                        </p>

                        <div className="flex flex-wrap gap-2 justify-center mt-4">

                            {
                                tags.map((tag, index) => (
                                    <p
                                        key={index}
                                        className="bg-green-300 px-3 py-1 rounded-full text-sm"
                                    >
                                        {tag}
                                    </p>
                                ))
                            }

                        </div>

                        <p className='text-sm mt-4'>
                            {bio}
                        </p>

                        <p className='text-sm text-gray-400 break-all mt-2'>
                            {email}
                        </p>

                    </div>

                    {/* ACTION BUTTONS */}
                    <div className='pt-5 space-y-3'>

                        <h2 className='bg-base-200 p-3 rounded-xl text-center text-sm font-semibold flex items-center gap-2 justify-center'>
                            <HiBellSnooze />
                            Snooze 2 weeks
                        </h2>

                        <h2 className='bg-base-200 p-3 rounded-xl text-center text-sm font-semibold flex items-center gap-2 justify-center'>
                            <FaBoxArchive />
                            Archive
                        </h2>

                        <h2 className='bg-base-200 p-3 rounded-xl text-center text-sm font-semibold flex items-center gap-2 justify-center'>
                            <MdDelete />
                            Delete
                        </h2>

                    </div>

                </div>

            </div>

            {/* RIGHT */}
            <div className='pt-8 lg:pt-5 flex-1'>

                {/* STATS */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>

                    <div className='bg-base-300 p-6 rounded-md text-center w-full'>

                        <p className='font-semibold text-xl'>
                            {days_since_contact}
                        </p>

                        <p className='text-sm text-gray-500 font-semibold'>
                            Days Since Contact
                        </p>

                    </div>

                    <div className='bg-base-300 p-6 rounded-md text-center w-full'>

                        <p className='font-semibold text-xl'>
                            {goal}
                        </p>

                        <p className='text-sm text-gray-500 font-semibold'>
                            Goal (Days)
                        </p>

                    </div>

                    <div className='bg-base-300 p-6 rounded-md text-center w-full'>

                        <p className='font-semibold text-xl'>
                            {next_due_date}
                        </p>

                        <p className='text-sm text-gray-500 font-semibold'>
                            Next Due
                        </p>

                    </div>

                </div>

                {/* RELATIONSHIP GOAL */}
                <div className='mt-5 mb-5 bg-base-200 p-5 rounded-xl'>

                    <h2 className='font-semibold text-lg'>
                        Relationship Goal
                    </h2>

                    <h2 className='text-sm text-gray-500 font-semibold'>
                        Connect every <span className='text-black'>30 days</span>
                    </h2>

                </div>

                {/* CONTACT BUTTONS */}
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>

                    <Link
                        onClick={() => handelCall(expectedFriend)}
                        className='flex items-center justify-center gap-2 bg-base-200 p-4 rounded-xl'
                    >
                        <img
                            className='w-5 h-5'
                            src={call}
                            alt=""
                        />
                        Call
                    </Link>

                    <Link
                        onClick={() => handelText(expectedFriend)}
                        className='flex items-center justify-center gap-2 bg-base-200 p-4 rounded-xl'
                    >
                        <img
                            className='w-5 h-5'
                            src={text}
                            alt=""
                        />
                        Text
                    </Link>

                    <Link
                        onClick={() => handelVideo(expectedFriend)}
                        className='flex items-center justify-center gap-2 bg-base-200 p-4 rounded-xl'
                    >
                        <img
                            className='w-5 h-5'
                            src={video}
                            alt=""
                        />
                        Video
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default CardDetails;