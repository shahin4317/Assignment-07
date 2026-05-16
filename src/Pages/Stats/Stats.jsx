
import { useContext } from 'react';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';
import { FriendContext } from '../../Context/FriendContex';
const Stats = () => {
    const {
        calling,
        text,
        vedio
    } = useContext(FriendContext);
    // Sample data
    const data = [
        { name: 'Calling', value: calling.length, fill: '#0088FE' },
        { name: 'Text', value:text.length, fill: '#FFBB28' },
        { name: 'Vedio Calling', value:34, fill: '#FF8042' },
    ];
    return (
        <div className=' my-10 shadow p-10 rounded-xl border border-slate-300 container mx-auto'>
            <h2 className=''>By Interaction Type</h2>
            <PieChart style={{ width: '80%', maxWidth: '330px', maxHeight: '60vh', aspectRatio: 1, margin: 'auto' }} responsive>
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    fill="#8884d8"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                />

                <Legend></Legend>

                <Tooltip ></Tooltip>
            </PieChart>

        </div>

    );
};

export default Stats;