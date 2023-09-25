import React, { useEffect, useState } from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';

const Category = ({ categories }) => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12'>
            {
                categories?.map(donate => <CategoryCard
                    key={donate.id}
                    donate={donate}
                ></CategoryCard>)
            }
        </div>
    );
};

export default Category;