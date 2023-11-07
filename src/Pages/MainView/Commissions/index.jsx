import React from "react";
import "./commissions.scss";
import one from "../../../image/5_commissions/gun_for_hire/001.jpg";
import two from "../../../image/5_commissions/hidden_flows/001.jpg";
import three from "../../../image/5_commissions/nigerian_policing_programme/01.jpg";
import MobileHead from "../../../Components/MobileHead";

function Commissions() {
    const commissionsPage = [
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
        {
            id: 3,
            text: "Nigerian Policing Programme",
            src: three,
        },
    ];
    return (
        <div className="commissions">
            <MobileHead />
            <div className="flex flex-wrap w-full">
                {commissionsPage.map((page, index) => (
                    <div className="w-1/4 h-auto pl-7 pr-7 mt-2">
                        <img src={page.src} alt="GF1" className="h-full" /> <p>{page.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Commissions;
