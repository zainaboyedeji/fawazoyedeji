import React from "react";
import one from "../../../image/5_commissions/gun_for_hire/001.jpg";
import two from "../../../image/5_commissions/gun_for_hire/002.jpg";
import MobileHead from "../../../Components/MobileHead";
import { Link } from "react-router-dom";
import "./commission_images.scss"

function CommissionsImages() {
    const CommissionsimagesPage = [
        {
            id: 1,
            text: "Gun For Hire",
            src: one,
        },
        {
            id: 2,
            text: "Hidden Flows",
            src: two,
        },
    ];

 
    return (
        <div className="commissions_images">
            <MobileHead />
            <div className="flex flex-wrap w-full first">
                {CommissionsimagesPage.map((page, index) => (  
                    <div className="w-1/4 h-auto pl-7 pr-7 mt-2 imgDiv">
                        <Link to="/commissions/details">
                        <img src={page.src} alt="GF1" className="h-full" /> <p>{page.text}</p>
                        </Link>
                    </div>
                  
                ))}
            </div>
        </div>
    );
}

export default CommissionsImages;
