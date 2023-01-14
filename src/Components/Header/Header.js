import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { HiOutlineChatAlt } from 'react-icons/hi';
import { HiOutlineBell } from 'react-icons/hi';

const Header = () => {
    return (
        <div className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between">
            <div className="relative ml-6">
                <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
                <input type="text" placeholder="Search..." className="text-sm focus:outline-none active:outline-none 
                border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-sm"
                />
            </div>
            <div className='flex justify-center items-center gap-6 mr-2'>
                <HiOutlineChatAlt fontSize={24} />
                <HiOutlineBell fontSize={24} />
                <div className="h-10 w-10 rounded-full bg-cover bg-no-repeat bg-center"
                    style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR63KoribGVDB_dswx8iUX99udIebJK_EsaYYTwg2vJoIeIECXhO8iWnI5VBU64wLJ-8gg&usqp=CAU)' }}>
                </div>
            </div>
        </div>
    );
};

export default Header;