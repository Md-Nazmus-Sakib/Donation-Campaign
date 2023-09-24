import React from 'react';
import headerImg from '../../assets/header.png'
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),url(${headerImg})`, backgroundSize: "cover"
            }} className="w-full h-screen">
                <Navbar></Navbar>
                <div className='flex justify-center items-center h-full '>
                    <div>
                        <h1 className='text-5xl font-bold mb-12'>I Grow By Helping People In Need</h1>
                        <div className='flex justify-center'>
                            <input type="text" placeholder="Search…" className="input w-1/2  " />
                            <button className="py-3 px-6 rounded-e-lg bg-red-400">
                                Search
                            </button>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Header;