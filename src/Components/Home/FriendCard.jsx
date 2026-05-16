
import { useLoaderData } from 'react-router';
import FriendsDetalis from './FriendsDetalis';

const FriendCard = () => {
    const friendsData = useLoaderData()

    return (
        <div className='container mx-auto'>
            <h1 className='text-xl font-bold'>Yours Friends</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
                {
                    friendsData.map((details,index)=> (
                        <FriendsDetalis key={index} details={details}></FriendsDetalis>

                    ))
                }
            </div>
        </div>
    );
};

export default FriendCard;