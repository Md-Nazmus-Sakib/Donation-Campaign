import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ donate }) => {
    const { id, image, title, category, text_color, bg_color, category_color } = donate;

    return (
        <div>
            <Link to={`/category/${id}`}>
                <div style={{ backgroundColor: `${bg_color}` }} className="card card-compact shadow-xl h-80">
                    <figure><img src={image} alt="donate image" className='h-48 w-full' /></figure>
                    <div className="card-body">
                        <h2 style={{ color: `${text_color}`, backgroundColor: `${category_color}` }} className='text-center py-2 w-1/3 rounded-lg'>{category}</h2>
                        <h3 style={{ color: `${text_color}` }} className="card-title ">{title}</h3>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CategoryCard;