import React from "react";
import "./commissions.scss";
import MobileHead from "../../components/mobile_head";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { commissionsPage } from "../../config/constants";
import Footer from "../../components/footer";

function Commissions() { 
    return (
        <>
        <div className="commissions">
        <MobileHead />
        <div className="flex flex-wrap w-full next">
            {commissionsPage.map((page, index) => (
                <Link to={`/commissions/${page.id}`} className="w-1/4 pr-5">
                        <div>
                            <LazyLoadImage src={page.src} alt="GF1"/>
                        </div>
                        <p className="text-center pt-2">{page.text}</p>
                </Link>
            ))}
        </div>
    </div>
    <Footer/>
    </>
    );
}

export default Commissions;
