import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto items-center text-center space-y-3 pt-8'>
            <h1 className='text-3xl font-bold' >Friends to keep close in your life</h1>
            <p className='text-sm text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.</p>
            <button className='btn bg-green-800 text-white'>Add a Friend</button>
        </div>
    );
};

export default Banner;