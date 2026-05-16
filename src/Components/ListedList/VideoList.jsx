import { useContext } from 'react';
import { FriendContext } from '../../Context/FriendContex';
import videoimg from '../../assets/video.png'
const VideoList = () => {
    const { video } = useContext(FriendContext);
    return (
        <div>
            {
                video.map((videos, index) => (
                    <div key={index} className='bg-base-300 p-2 rounded-md w-80 flex mb-3'>
                        <div className='text-center justify-center'>
                            <img src={videoimg} className='w-7 h-7' alt="" />
                        </div>
                        <div className='ml-3'>
                            <p className=''>Video call with <span className='text-sm'> {videos.name}</span></p>
                            <p className='text-xs text-gray-500'>
                                {new Date().toLocaleString()}
                            </p>
                        </div>


                    </div>
                ))
            }

        </div>
    );
};

export default VideoList ;