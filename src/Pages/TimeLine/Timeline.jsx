
import { IoFilter } from 'react-icons/io5';
import CallList from '../../Components/ListedList/CallList';
import TextList from '../../Components/ListedList/TextList';
import VideoList from '../../Components/ListedList/VideoList';

const Timeline = () => {
   
    return (
        <div className='container mx-auto pt-5'>
            <div className='space-y-3'>
                <h1 className='text-2xl font-bold'>Timeline</h1>
                <div

                    className="flex items-center gap-2 text-sm bg-base-200 px-4 py-2 rounded-xl font-medium cursor-pointer w-40"
                >
                    
                    Filter Timeline<IoFilter className="text-lg" />
                </div>
                <div className=''>
                    <CallList></CallList>
                    <TextList></TextList>
                    <VideoList></VideoList>

                </div>

            </div>


        </div>
    );
};

export default Timeline;