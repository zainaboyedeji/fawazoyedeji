import React from "react";
import MobileHead from "../../../components/mobile_head";
import { useParams } from "react-router-dom";
import { commissionsPage } from "../../../config/constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./commission_images.scss";
import Footer from "../../../components/footer";

function CommissionsImages() {
  let { id } = useParams();
  const found = commissionsPage.find(function (item) {
    return item.id === id;
  });
  return (
    <>
      <div>
        <MobileHead />
        <div className="commissionsDetails mt-3">
          <div className="desc mt-3 mb-5">{found?.description}</div>
          {found?.items.map((page, index) => (
            <LazyLoadImage src={page.src} alt="GF1" />
          ))}
        </div>
      </div>
      <div className="commissions_imagesFooter">
        <Footer />
      </div>
    </>
  );
}

export default CommissionsImages;
