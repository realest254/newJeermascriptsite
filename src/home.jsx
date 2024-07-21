import React from "react";
import Hero from './HomePage/hero.jsx';
import FeatureSection from './HomePage/FeatureSection.jsx';
import AchievementsSection from './HomePage/Achievements.jsx';
import Contacts from './HomePage/Contacts.jsx';
import BlogSection from './HomePage/BlogSection.jsx';

function Home () {
    return(
        <>
            <Hero/>
            <FeatureSection/>
            <AchievementsSection/>
            <Contacts/>
            <BlogSection/>
        </>
    )
}

export default Home;