import React from "react";
import './index.scss';
import msd from "images/developers/msd.jpeg";

const DeveloperPortfolio = (props) => {
    let { name } = props.match.params
    return (
        <div className="portfolio">
            <div className="info">
                <div className="name">
                    Hi, I am {name}, a Frontend developer
                </div>

                <img className="dev-image" src={msd} alt={name} />
            </div>
        </div>
    )
}

export default DeveloperPortfolio