import React from 'react';
import Marque from '../../../components/Marquee/Marquee';
import Banner from '../Banner/Banner';
import BestSells from '../BestSells/BestSells';
import NewArrival from '../NewArrival/NewArrival';
import Review from '../Review/Review';
import SecondSection from '../SecondSection/SecondSection';

const Home = () => {
    return (
        <div>
            <Marque background='bg-slate-600'/>
            <Banner />
            <SecondSection />
            <NewArrival />
            <BestSells />
            <Review />
        </div>
    );
};

export default Home;