import React from "react";
import MobileHead from "../../components/mobile_head";
import Footer from "../../components/footer";

function Multimedia() {
  return (
    <>
      <MobileHead />
      <div className="flex  h-screen">
        <iframe
          title="vimeo video"
          src="https://player.vimeo.com/video/1019928845"
          className="w-full h-3/4 sm:h-2/3 md:h-4/5 lg:h-5/6"
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
