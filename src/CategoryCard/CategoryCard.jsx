import React from 'react';

const CategoryCard = ({ donate }) => {
    const { id, image, title, category, text_color, bg_color, category_color } = donate;

    return (
        <div>
            <button>
                <div style={{ backgroundColor: `${bg_color}` }} className="card card-compact shadow-xl h-80">
                    <figure><img src={image} alt="donate image" /></figure>
                    <div className="card-body">
                        <h2 style={{ color: `${text_color}`, backgroundColor: `${category_color}` }} className='py-2 w-1/3 rounded-lg'>{category}</h2>
                        <h3 style={{ color: `${text_color}` }} className="card-title ">{title}</h3>
                    </div>
                </div>
            </button>
        </div>
    );
};

export default CategoryCard;