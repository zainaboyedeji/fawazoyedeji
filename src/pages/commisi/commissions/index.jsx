import React from "react";
import "./commissions.scss";
import MobileHead from "../../../components/mobile_head";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { commissionsPage } from "../../../config/constants";

function Commissions() { 
    return (
        <div className="commissions">
            <MobileHead />
            <div className="flex flex-wrap w-full commissionImage">
                {commissionsPage.map((page, index) => (
                    <div className="w-1/4 h-auto pl-7 pr-7 mt-2 first">
                        <Link to={`/commissions/images/${page.id}`}>
                        <LazyLoadImage src={page.src} alt="GF1" className="h-full" /> <p>{page.text}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Commissions;
