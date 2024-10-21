import React from "react";
import MobileHead from "../../components/mobile_head";
import { tearsheetPage } from "../../config/constants";
import Footer from "../../components/footer";

function TearSheet() {
  return (
    <>
      <div className="projects">
        <MobileHead />
        <div className="flex flex-wrap w-full next">
          <p className="w-full text-center pt-2 font-bold text-2xl mb-5">
            Press news, articles, interviews and client's work
          </p>
          <>
            {tearsheetPage.map((page, index) => (
              <div className="bottomLil mb-5">
                <img src={page.src} alt="GF1" />
                <p className="flex justify-end">{page.text}</p>
              </div>
            ))}
          </>
        </div>
      </div>
      <div className="appFooter">
        <Footer />
      </div>
    </>
  );
}

export default TearSheet;
