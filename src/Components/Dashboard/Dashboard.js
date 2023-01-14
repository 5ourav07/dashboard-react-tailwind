import React from 'react';
import Report from './Report';
import Status from './Status';

const Dashboard = () => {
    return (
        <div className='ml-6'>
            <div>
                <h1 className='text-3xl text-[#102048] font-bold'>Dashboard</h1>
            </div>

            <div className='mt-2'>
                <Status></Status>
            </div>

            <div className='mt-2'>
                <Report></Report>
            </div>
        </div>
    );
};

export default Dashboard;