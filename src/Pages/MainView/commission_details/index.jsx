import MobileHead from "../../../Components/MobileHead";
import one from "../../../image/5_commissions/gun_for_hire/001.jpg";
import "./commission_details.scss"

function CommissionsDetails() {
    return (
        <div className="commissionDetails">
        <MobileHead />
       
<div className="flex details w-full">
            <div className="">
                <img src={one} alt="one" className="w-full h-full" />
            </div>
            <div className="second ml-6">
                <p>I worked on an assignment for Tetra Tech International Development, contributing to the Nigerian Policing Programme.</p>
                <p> This program is designed to enhance the delivery of policing services in Nigeria, extending its impact beyond just the Nigerian Police Force. </p>
                <p>Our mission encompassed collaboration with a broad spectrum of institutions, administrative functions, community groups, and security actors who collectively shape the national security environment in Nigeria.</p>
                <a href="https://intdev.tetratecheurope.com/projects/nigeria-policing-programme/" target="_blank" rel="noreferrer" title="Nigerian Policing Programme">
                    Learn more about the programme and its impact: Nigerian Policing Programme
                </a>
            </div>
        </div>
       </div>
    );
}

export default CommissionsDetails;
