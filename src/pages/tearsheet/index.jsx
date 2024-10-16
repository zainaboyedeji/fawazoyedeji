import React, { useEffect } from "react";
import MobileHead from "../../components/mobile_head";
import { tearsheetPage } from "../../config/constants";
import "./tearsheet.scss";
import Footer from "../../components/footer";

function TearSheet() {
    return (
        <>
            <div className="projects">
                <MobileHead />
                <div className="flex flex-wrap w-full next">
                    <p className="w-full text-center pt-2 font-bold text-2xl mb-5">July 15, 2024, Les Echos</p>
                    <>
                        {tearsheetPage.map((page, index) => (
                            <div className="bottomLil">
                                <img src={page.src} alt="GF1" />
                            </div>
                        ))}
                    </>
                </div>
            </div>
            <div className="projectsFooter">
                <Footer />
            </div>
        </>
    );
}

export default TearSheet;
