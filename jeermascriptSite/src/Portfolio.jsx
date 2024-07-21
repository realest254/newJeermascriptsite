import React from "react";
import PortfolioHero from './Portfolio/PortfolioHero.jsx';
import PortfolioShow from './Portfolio/PortfolioShow.jsx';
import PortfolioContact from './Portfolio/PortfolioContact.jsx';

function Portfolio () {
    return(
        <>
            <PortfolioHero/>
            <PortfolioShow/>
            <PortfolioContact/>
        </>
    )
}

export default Portfolio;