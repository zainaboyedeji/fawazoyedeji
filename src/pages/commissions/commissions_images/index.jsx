import React from "react";
import MobileHead from "../../../components/mobile_head";
import { useParams } from 'react-router-dom';
import { commissionsPage } from "../../../config/constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./commission_images.scss"
import Footer from "../../../components/footer";

function CommissionsImages() {
    let { id } = useParams();
    const found = commissionsPage.find(function (item) {
        return item.id === id
      });
    return (
        <>
        <div className="commissions_images">
            <MobileHead />
            <div>
                <div className="projectDetails">
                    <div className="desc">
                        {found?.description}
                    </div>
                    {found?.items.map((page, index) => (
                        <LazyLoadImage src={page.src} alt="GF1" />
                    ))}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default CommissionsImages;
