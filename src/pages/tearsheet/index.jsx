import React from "react";
import MobileHead from "../../components/mobile_head";
import { tearsheetPage } from "../../config/constants";

function TearSheet() {
  return (
      <div className="apps">
        <MobileHead />
        <div className="flex flex-wrap w-full next">
          <p className="w-full text-center pt-2 font-bold text-4xl mb-5">
          Press news, articles, and client’s work.
          </p>
          <>
            {tearsheetPage.map((page, index) => (
              <div className="bottomLil mb-5">
                <img src={page.src} alt="GF1" />
                <p className="flex justify-center font-bold text-xl">{page.text}</p>
              </div>
            ))}
          </>
        </div>
      </div>
  );
}

export default TearSheet;
