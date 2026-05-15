
import { FaBoxArchive } from 'react-icons/fa6';
import { HiBellSnooze } from 'react-icons/hi2';
import { MdDelete } from 'react-icons/md';
import { Link, useLoaderData, useParams } from 'react-router';
import call from '../../assets/call.png'
import text from '../../assets/text.png'
import video from '../../assets/video.png'
// const bookFriendPromise = fetch('/FriendData.json').then((res)=> res.json())
const CardDetails = () => {
    const { id } = useParams()

    const friends = useLoaderData();

    const expectedFriend = friends.find(friend => friend.id == id)
    console.log(expectedFriend)
    const { name, picture, days_since_contact, tags, status, bio, email } = expectedFriend;
    return (
        <div className='container mx-auto flex'>
            {/* left */}
            <div>
                <div className="container mx-auto pt-5 ">
                    <div className=" bg-base-200 w-80 p-8 text-center rounded-2xl">
                        <img className="w-15 h-15 mx-auto rounded-full object-cover mb-2" src={picture} alt="" />
                        <h2 className="font-bold">{name}</h2>
                        <p className="text-sm mb-3 ">{days_since_contact}d ago</p>
                        <p className={`mx-15 py-1 rounded-full text-white ${status === "active" ? "bg-green-800" : status === "inactive" ? "bg-amber-500" : "bg-red-700"}`}>{status}</p>
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
                        <p className='text-sm '>{bio}</p>
                        <p className='text-sm text-gray-400'>{email}</p>
                    </div>
                    <div className='pt-5 space-y-3'>
                        <h2 className='bg-base-200 p-3  rounded-xl text-center text-sm font-semibold flex items-center gap-2 justify-center'><HiBellSnooze />Snooze 2 weeks</h2>
                        <h2 className='bg-base-200 p-3  rounded-xl text-center text-sm font-semibold flex items-center gap-2 justify-center'><FaBoxArchive />Archive</h2>
                        <h2 className='bg-base-200 p-3  rounded-xl text-center text-sm font-semibold flex items-center gap-2 justify-center'><MdDelete />Delete</h2>

                    </div>



                </div>
            </div>
            {/* rigth */}
            <div className='pt-5 ml-4'>
                <div className='flex gap-4'>
                    <Link className='flex text-center gap-2 bg-base-200 p-5 rounded-xl'><img className='w-5 h-5 mx-auto  object-cover mb-2' src={call} alt="" /> Call</Link>
                    <Link className='flex text-center gap-2 bg-base-200 p-5 rounded-xl'><img className='w-5 h-5 mx-auto  object-cover mb-2' src={text} alt="" /> Text</Link>
                    <Link className='flex text-center gap-2 bg-base-200 p-5 rounded-xl'><img className='w-5 h-5 mx-auto  object-cover mb-2' src={video} alt="" /> Video</Link>
                </div>
                

            </div>
        </div>
    );
};

export default CardDetails;