import React from 'react';
import Header from '../Header/Header';
import Category from '../../Category/Category';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <Category categories={categories}></Category>
        </div>
    );
};

export default Home;