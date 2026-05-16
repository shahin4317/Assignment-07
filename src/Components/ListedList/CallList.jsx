import { useContext } from 'react';
import { FriendContext } from '../../Context/FriendContex';
import callimg from '../../assets/call.png'
const CallList = () => {
    const { calling } = useContext(FriendContext);
    return (
        <div>
            {
                calling.map((call, index) => (
                    <div key={index} className='bg-base-300 p-2 rounded-md w-80 flex mb-3'>
                        <div className='text-center justify-center'>
                            <img src={callimg} className='w-7 h-7' alt="" />
                        </div>
                        <div className='ml-3'>
                            <p className=''>Call with <span className='text-sm'> {call.name}</span></p>
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

export default CallList;