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
        let dataLs = [];
        for (const lsData of donation) {
            const findDonation = campaignsData.find(campaign => campaign.id === parseInt(lsData));


            dataLs.push(findDonation);

        }
        setLocalStoreData(dataLs)
    }, [])

    return (
        <div className='my-12 mx-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-12'>
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
            {
                (localStoreData.length > 4) && (showAll === false) && <div className='flex justify-center my-12'>
                    <button onClick={() => setShowAll(!showAll)} className='btn btn-primary'>Show All</button>
                </div>
            }
        </div>
    );
};

export default Donation;