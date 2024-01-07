import React from "react";
import MobileHead from "../../../components/mobile_head";
import "./commission_details.scss";
import {  useParams } from 'react-router-dom';
import { commissionsPage } from "../../../config/constants";

function CommissionsDetails() {
    let { id,inner } = useParams();
    const found = commissionsPage.find(function (item) {
        return item.id === id
      });

      const newFound = found.items.find(function (item) {
        return item.id === inner
      });

      console.log(found)
    return (
        <div className="commissions_images">
            <MobileHead />
            <div className="flex flex-wrap w-full first">
            {newFound.description}
            <p>newenew</p>
            </div>
        </div>
    );
}

export default CommissionsDetails;
