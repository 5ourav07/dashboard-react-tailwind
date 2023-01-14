import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Sidebar from '../Components/Sidebar/Sidebar';

const Layout = () => {
    return (
        <div className='flex flex-row bg-[#F7F9FB] h-min-screen w-min-screen overflow-x-hidden'>
            <Sidebar></Sidebar>
            <div className='flex-1'>
                <Header></Header>
                <div className='p-4'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Layout;