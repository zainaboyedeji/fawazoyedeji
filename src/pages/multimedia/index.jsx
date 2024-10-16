import React from "react";
import MobileHead from "../../components/mobile_head";
import Footer from "../../components/footer";

function Multimedia() {
  return (
    <>
      <MobileHead />
      <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
        <iframe
          title="vimeo video"
          src="https://player.vimeo.com/video/1019928845"
          className="w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}

export default Multimedia;
