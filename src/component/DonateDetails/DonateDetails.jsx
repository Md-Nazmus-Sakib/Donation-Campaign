import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const DonateDetails = () => {
    const [donateDetails, setDonateDetails] = useState({});

    const { image, title, donating_money, details, text_color } = donateDetails;
    const campaignsData = useLoaderData();
    const { id } = useParams();

    useEffect(() => {
        const selectData = campaignsData?.find(campaignData => campaignData.id === parseInt(id))
        setDonateDetails(selectData)
    }, [campaignsData, id])

    const getFromLs = () => {
        let donate = [];
        const cartFromLs = localStorage.getItem('donate');
        if (cartFromLs) {
            donate = JSON.parse(cartFromLs);
        }
        return (donate)
    }
    const handelDonate = (id) => {
        Swal.fire({
            title: 'Success!',
            text: 'You have Successful Donate Done.',
            icon: 'success',
            confirmButtonText: 'Ok'
        })
        let donation = getFromLs();

        if (donation.length === 0) {
            localStorage.setItem('donate', JSON.stringify([id]))
        }
        else {
            const isExist = donation.find(donateID => donateID === id);
            if (isExist) {
                return
            }
            else {
                localStorage.setItem('donate', JSON.stringify([...donation, id]))

            }
        }
    }
    return (
        <div>
            <div className="card card-compact md:w-1/2 mx-auto my-12 bg-base-100 shadow-xl">
                <div className='relative'>
                    <figure><img src={image} alt="" className='w-full rounded-t-xl' /></figure>
                    <div className='absolute bg-slate-400 bottom-0 left-0 w-full p-6 opacity-80'>
                        <button onClick={() => handelDonate(id)} style={{ backgroundColor: `${text_color}` }} className='px-4 py-2 rounded-xl font-semibold text-white'>Donate ${donating_money}</button>
                    </div>
                </div>
                <div className="card-body m-12">
                    <h2 className="card-title text-3xl">{title}</h2>
                    <p className='text-2xl'>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default DonateDetails;