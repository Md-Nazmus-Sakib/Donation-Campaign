import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DonationDetails from '../DonationDetails/DonationDetails';

const Donation = () => {
    const campaignsData = useLoaderData();
    const [localStoreData, setLocalStoreData] = useState([])
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
            {
                localStoreData?.map(storeData => <DonationDetails
                    key={storeData.id}
                    storeData={storeData}
                ></DonationDetails>)
            }
        </div>
    );
};

export default Donation;