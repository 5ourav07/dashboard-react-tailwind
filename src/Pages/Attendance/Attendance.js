import React from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { AiOutlineCalendar } from 'react-icons/ai';
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import Table from './Table';

const Attendance = () => {
    return (
        <div className='ml-6'>
            <div>
                <div className='flex justify-between'>
                    <h1 className='text-3xl text-[#102048] font-bold'>Attendance</h1>
                    <div className='flex items-center'>
                        <button className='bg-[#102048] text-white px-5 py-2 rounded-lg mr-4'>Export Details</button>
                        <AiFillSetting fontSize={28} />
                    </div>
                </div>

                <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-3'>
                    <div className='bg-white w-72 h-16 rounded-lg box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'>
                        <div className='flex gap-3 items-center justify-between px-5 mt-5'>
                            <p className='text-[#555555]'>Jan 03, 2023</p>
                            <AiOutlineCalendar></AiOutlineCalendar>
                        </div>
                    </div>
                    <div className='bg-white w-72 h-16 rounded-lg box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'>
                        <div className='flex gap-3 items-center justify-between px-5 mt-5'>
                            <p className='text-[#555555]'>Department</p>
                        </div>
                    </div>
                    <div className='bg-white w-72 h-16 rounded-lg box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'>
                        <div className='flex gap-3 items-center justify-between px-5 mt-5'>
                            <p className='text-[#555555]'>Attendance</p>
                            <AiOutlineDown />
                        </div>
                    </div>
                    <div className='bg-white w-72 h-16 rounded-lg box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'>
                        <div className='flex gap-3 items-center justify-between px-5 mt-5'>
                            <p className='text-[#555555]'>Present</p>
                            <AiOutlineDown />
                        </div>
                    </div>
                    <div className='bg-white w-72 h-16 rounded-lg box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'>
                        <div className='flex gap-3 items-center justify-between px-5 mt-5'>
                            <p className='text-[#555555]'>Check In</p>
                            <AiOutlineDown />
                        </div>
                    </div>
                    <div className='bg-white w-72 h-16 rounded-lg box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'>
                        <div className='flex gap-3 items-center justify-between px-5 mt-5'>
                            <p className='text-[#555555]'>Location</p>
                        </div>
                    </div>
                    <div className='bg-white w-72 h-16 rounded-lg box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'>
                        <div className='flex gap-3 items-center justify-between px-5 mt-5'>
                            <p className='text-[#555555]'>Designation</p>
                            <AiOutlineDown />
                        </div>
                    </div>
                    <div className='bg-white w-72 h-16 rounded-lg box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'>
                        <div className='flex gap-3 items-center justify-between px-5 mt-5'>
                            <p className='text-[#555555]'>Department</p>
                            <AiOutlineDown />
                        </div>
                    </div>
                </div>

                <div className='bg-white mt-5'>
                    <Table></Table>
                    <div className='mt-5'>
                        <div className='flex justify-between mr-5 pb-7 pt-5'>
                            <div></div>
                            <div className="btn-group items-center">
                                <AiOutlineLeft></AiOutlineLeft>
                                <button className="bg-slate-100 w-7 h-7 mx-3 rounded-lg text-black">1</button>
                                <button className="w-7 h-7 mx-3 rounded-lg text-black">2</button>
                                <button className="w-7 h-7 mx-3 rounded-lg text-black">3</button>
                                <button className="w-7 h-7 mx-3 rounded-lg text-black">4</button>
                                <button className="w-7 h-7 mx-3 rounded-lg text-black">5</button>
                                <AiOutlineRight></AiOutlineRight>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attendance;