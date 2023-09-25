import React from 'react';
import errorImg from '../../assets/error.jpg'

const ErrorPage = () => {
    return (
        <div className='w-full h-full'>
            <img className='w-3/4 mx-auto h-full' src={errorImg} alt=" Error Image" />
        </div>
    );
};

export default ErrorPage;