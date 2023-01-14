import React from 'react';
import Chart from './Chart';
import { TbCurrencyTaka } from 'react-icons/tb';

const Report = () => {
    return (
        <div>
            <div className='flex'>
                <h1 className='text-[#102048] font-bold'>Expanses Report</h1>
                <h1 className='text-[#102048] font-bold ml-80 mb-5'>Task Summary</h1>
            </div>
            <div className='flex'>
                <div className='bg-white w-[35%] rounded-lg box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; my-3 m-0'>
                    <div className='flex justify-between p-5'>
                        <div className='flex gap-5'>
                            <p>Day</p>
                            <p className='text-[#BCBCBC]'>Week</p>
                            <p className='text-[#BCBCBC]'>Month</p>
                            <p className='text-[#BCBCBC]'>Year</p>
                        </div>
                        <button className='bg-[#102048] text-white px-5 rounded-lg mr-4'>Export Details</button>
                    </div>
                    <div className='flex items-center ml-3 mb-3'>
                        <TbCurrencyTaka fontSize={32}></TbCurrencyTaka>
                        <h1 className='text-[#102048] text-3xl font-bold'>45,000</h1>
                    </div>
                    <Chart></Chart>
                </div>
                <div className='border border-dashed border-black w-[25%] h-[30%] ml-5 rounded-lg'>
                    <h1 className='text-[#102048] font-semibold px-4 pt-3'>Total Task</h1>
                    <p className='text-[#102048] font-semibold px-4 pt-2'>112</p>

                    <div>
                        <p className='text-[#102048] font-semibold px-4 pt-2'>Completed</p>
                        <div className='bg-slate-200 border w-[60%] rounded-lg px-2 ml-4 mt-2 relative'>
                            <p className='text-right'>50/80</p>
                            <div className='bg-[#C6C7F8] absolute w-[50%] rounded-lg top-0 left-0'>
                                <p className='invisible'>s</p>
                            </div>
                        </div>
                        <p className='text-[#102048] font-semibold px-4 pt-2'>In Progress</p>
                        <div className='bg-slate-200 border w-[60%] rounded-lg px-2 ml-4 mt-2 relative'>
                            <p className='text-right'>15/112</p>
                            <div className='bg-[#C6C7F8] absolute w-[10%] rounded-lg top-0 left-0'>
                                <p className='invisible'>s</p>
                            </div>
                        </div>
                        <p className='text-[#102048] font-semibold px-4 pt-2'>Pending</p>
                        <div className='bg-slate-200 border w-[60%] rounded-lg px-2 ml-4 mt-2 relative mb-4'>
                            <p className='text-right'>30/80</p>
                            <div className='bg-[#C6C7F8] absolute w-[30%] rounded-lg top-0 left-0'>
                                <p className='invisible'>s</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Report;