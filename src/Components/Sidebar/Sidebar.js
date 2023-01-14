import React from 'react';
import { FcBullish } from 'react-icons/fc';
import { BiAlignLeft } from 'react-icons/bi';
import { AiOutlineDown } from 'react-icons/ai';
import { AiFillSetting } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import { BiArrowFromLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='bg-[#1E2772] w-64 p-3 flex flex-col text-white'>
            <div className='flex items-center gap-2 px-1 py-3'>
                <FcBullish fontSize={24} />
                <span className='text-neutral-100 text-lg relative'>Team 360<span className='absolute -top-2'>o</span></span>
            </div>

            <div className='flex flex-col ml-7'>
                <Link to='#'>
                    <div className='flex items-center gap-2 px-1 py-3 hover:bg-neutral-900 rounded-lg'>
                        <BiAlignLeft />
                        Dashboard
                    </div>
                </Link>
                <Link to='#'>
                    <div className='flex items-center gap-2 px-1 py-3 hover:bg-neutral-900 rounded-lg'>
                        <BiAlignLeft />
                        Attendance
                    </div>
                </Link>
                <Link to='#'>
                    <div className='flex items-center gap-2 px-1 py-3 hover:bg-neutral-900 rounded-lg'>
                        <BiAlignLeft />
                        Employees
                    </div>
                </Link>
                <Link to='#'>
                    <div className='flex items-center gap-2 px-1 py-3 hover:bg-neutral-900 rounded-lg'>
                        <BiAlignLeft />
                        Leaves
                    </div>
                </Link>
                <Link to='#'>
                    <div className='flex items-center gap-2 px-1 py-3 hover:bg-neutral-900 rounded-lg'>
                        <BiAlignLeft />
                        Expanse
                    </div>
                </Link>
                <Link to='#'>
                    <div className='flex items-center gap-2 px-1 py-3 hover:bg-neutral-900 rounded-lg'>
                        <BiAlignLeft />
                        Notice
                    </div>
                </Link>
                <Link to='#'>
                    <div className='flex items-center gap-2 px-1 py-3 hover:bg-neutral-900 rounded-lg'>
                        <BiAlignLeft />
                        Department
                    </div>
                </Link>
            </div>

            <div className='flex items-center gap-2 px-1 py-3 mx-1'>
                <AiOutlineDown />
                <AiFillSetting />
                Settings
            </div>

            <div className='flex flex-col ml-12'>
                <Link to='#'>
                    <div className='flex items-center gap-2 px-1 py-3 hover:bg-neutral-900 rounded-lg'>
                        <BsDot />
                        Approval
                    </div>
                </Link>
                <Link to='#'>
                    <div className='flex items-center gap-2 px-1 py-3 hover:bg-neutral-900 rounded-lg'>
                        <BsDot />
                        Leave
                    </div>
                </Link>
                <Link to='#'>
                    <div className='flex items-center gap-2 px-1 py-3 hover:bg-neutral-900 rounded-lg'>
                        <BsDot />
                        Office Settings
                    </div>
                </Link>
                <Link to='#'>
                    <div className='flex items-center gap-2 px-1 py-3 hover:bg-neutral-900 rounded-lg'>
                        <BsDot />
                        My Subscriptions
                    </div>
                </Link>
            </div>

            <div>
                <Link to='#'>
                    <div className='flex items-center gap-2 px-1 py-3 hover:bg-neutral-900 rounded-lg ml-8'>
                        <BiArrowFromLeft />
                        Logout
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;