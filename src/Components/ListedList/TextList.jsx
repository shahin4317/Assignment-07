import { useContext } from 'react';
import { FriendContext } from '../../Context/FriendContex';
import Textimg from '../../assets/text.png'
const TextList = () => {
    const { text } = useContext(FriendContext);
    return (
        <div>
            {
                text.map((texts, index) => (
                    <div key={index} className='bg-base-300 p-2 rounded-md w-80 flex mb-3'>
                        <div className='text-center justify-center'>
                            <img src={Textimg} className='w-7 h-7' alt="" />
                        </div>
                        <div className='ml-3'>
                            <p className=''>Text with <span className='text-sm'> {texts.name}</span></p>
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

export default TextList;