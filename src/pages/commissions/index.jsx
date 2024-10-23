import React, { useEffect } from "react";
import MobileHead from "../../components/mobile_head";
import { Link } from "react-router-dom";
import { commissionsPage } from "../../config/constants";
import "./commissions.scss";

function Commissions() {
    useEffect(() => {
        document.body.classList.toggle('overflow-hidden', true);
        return () => { document.body.classList.toggle('overflow-hidden', false); }
    }, []);
    return (
            <div className="commissions">
                <MobileHead />
                <div className="flex flex-wrap w-full next">
                    {commissionsPage.map((page, index) => (
                        <Link to={`/commissions/${page.id}`} className="w-1/4 pr-5 mt-5">
                            <div className="bottomLil">
                                <img src={page.src} alt="GF1" />
                            </div>
                            <p className="text-center pt-2">{page.text}</p>
                        </Link>
                    ))}
                </div>
            </div>
    );
}

export default Commissions;
