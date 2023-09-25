import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DonationDetails from '../DonationDetails/DonationDetails';

const Donation = () => {
    const campaignsData = useLoaderData();
    const [localStoreData, setLocalStoreData] = useState([])
    const [showAll, setShowAll] = useState(false);
    const getFromLs = () => {
        let donate = [];
        const cartFromLs = localStorage.getItem('donate');
        if (cartFromLs) {
            donate = JSON.parse(cartFromLs);
        }
        return (donate)
    }

    useEffect(() => {
        const donation = getFromLs();
        console.log(donation)
        let dataLs = [];
        for (const lsData of donation) {
            console.log(lsData)
            const findDonation = campaignsData.find(campaign => campaign.id === parseInt(lsData));


            dataLs.push(findDonation);

        }
        setLocalStoreData(dataLs)
    }, [])

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    showAll ? localStoreData?.map(storeData => <DonationDetails
                        key={storeData.id}
                        storeData={storeData}
                    ></DonationDetails>) :
                        localStoreData?.slice(0, 4).map(storeData => <DonationDetails
                            key={storeData.id}
                            storeData={storeData}
                        ></DonationDetails>)
                }

            </div>
            <div className='flex justify-center my-12'>
                <button onClick={() => setShowAll(!showAll)} className='btn btn-primary'>{
                    showAll ? 'Show Less' : 'Show All'
                }</button>
            </div>
        </div>
    );
};

export default Donation;