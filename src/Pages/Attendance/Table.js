import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { HiDocumentText } from 'react-icons/hi';

const Table = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th><input type="checkbox" className="checkbox" /></th>
                            <th>Employee Name</th>
                            <th>Department</th>
                            <th>Check In</th>
                            <th>Check Out</th>
                            <th>Remark</th>
                            <th>Hours</th>
                            <th>Overtime</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover">
                            <th><input type="checkbox" className="checkbox" /></th>
                            <td>Jahid Hasan</td>
                            <td>HR & Admin</td>
                            <td>
                                <p className='bg-green-600 w-20 px-2 rounded-xl text-white'>09:45 am</p>
                            </td>
                            <td>
                                <p className='bg-green-600 w-20 px-2 rounded-xl text-white'>08:05 pm</p>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><AiFillEye fontSize={24} /></td>
                        </tr>
                        <tr className="hover">
                            <th><input type="checkbox" checked="checked" className="checkbox" /></th>
                            <td>Jahid Hasan</td>
                            <td>HR & Admin</td>
                            <td>
                                <p className='bg-red-500 w-20 px-2 rounded-xl text-white'>09:45 am</p>
                            </td>
                            <td>
                                <p className='bg-red-500 w-20 px-2 rounded-xl text-white'>08:05 pm</p>
                            </td>
                            <td><HiDocumentText fontSize={24} /></td>
                            <td></td>
                            <td></td>
                            <td><AiFillEye fontSize={24} /></td>
                        </tr>
                        <tr className="hover">
                            <th><input type="checkbox" className="checkbox" /></th>
                            <td>Jahid Hasan</td>
                            <td>HR & Admin</td>
                            <td>
                                <p className='bg-green-600 w-20 px-2 rounded-xl text-white'>09:45 am</p>
                            </td>
                            <td>
                                <p className='bg-green-600 w-20 px-2 rounded-xl text-white'>08:05 pm</p>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><AiFillEye fontSize={24} /></td>
                        </tr>
                        <tr className="hover">
                            <th><input type="checkbox" className="checkbox" /></th>
                            <td>Jahid Hasan</td>
                            <td>HR & Admin</td>
                            <td>
                                <p className='bg-red-500 w-20 px-2 rounded-xl text-white'>09:45 am</p>
                            </td>
                            <td>
                                <p className='bg-red-500 w-20 px-2 rounded-xl text-white'>08:05 pm</p>
                            </td>
                            <td><HiDocumentText fontSize={24} /></td>
                            <td></td>
                            <td></td>
                            <td><AiFillEye fontSize={24} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;