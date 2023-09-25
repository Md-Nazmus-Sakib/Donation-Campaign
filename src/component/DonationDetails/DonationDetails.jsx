import React from 'react';
import { Link } from 'react-router-dom';

const DonationDetails = ({ storeData }) => {
    const { id, image, title, category, donating_money, text_color, bg_color, category_color } = storeData;
    return (
        <div>
            <div style={{ backgroundColor: `${bg_color}` }} className="card card-side shadow-xl">
                <figure><img src={image} className='w-96' alt="Movie" /></figure>
                <div className="card-body">
                    <h2 style={{ color: `${text_color}`, backgroundColor: `${category_color}` }} className='text-center py-2 w-1/3 rounded-lg'>{category}</h2>
                    <h2 className="card-title">{title}</h2>
                    <p style={{ color: `${text_color}` }} className='text-xl font-bold'>$ {donating_money}</p>
                    <div className="card-actions">
                        <Link to={`/category/${id}`}>
                            <button style={{ backgroundColor: `${text_color}` }} className="btn text-white">View Details</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;