import React, { useEffect } from "react";
import MobileHead from "../../../components/mobile_head";
import { useParams } from "react-router-dom";
import { commissionsPage } from "../../../config/constants";
import "./commissions_details.scss";

function CommissionsDetails() {
  let { id } = useParams();
  const found = commissionsPage.find(function (item) {
    return item.id === id;
  });
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", true);
    return () => {
      document.body.classList.toggle("overflow-hidden", false);
    };
  }, []);
  return (
      <div>
        <MobileHead />
        <div className="commissionDetails mt-3 ml-20">
          <div className="desc mr-5">{found?.description}</div>
          {found?.items.map((page, index) => (
            <img src={page.src} alt="GF1" className="ml-20 mr-20" />
          ))}
        </div>
      </div>
  );
}

export default CommissionsDetails;
