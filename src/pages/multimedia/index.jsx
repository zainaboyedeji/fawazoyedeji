import React from "react";
import MobileHead from "../../components/mobile_head";

function Multimedia() {
  return (
    <div className="apps">
      <MobileHead />
      <div className="flex h-[60vh]">
        <iframe
          title="vimeo video"
          src="https://player.vimeo.com/video/1019928845"
          className="w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Multimedia;
