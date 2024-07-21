import React from "react";
import AboutUsHero from './About/AboutUsHero.jsx';
import TeamSection from './About/TeamSection.jsx';
import PortfolioContact from "./Portfolio/PortfolioContact.jsx";

function About () {
    return(
        <>
            <AboutUsHero/>
            <TeamSection/>
            <PortfolioContact/>
        </>
    )
}

export default About;