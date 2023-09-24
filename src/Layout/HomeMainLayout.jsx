import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header/Header';

const HomeMainLayout = () => {
    return (
        <div className=' mx-auto max-w-7xl '>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeMainLayout;