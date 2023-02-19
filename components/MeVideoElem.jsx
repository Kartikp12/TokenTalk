import { useHuddleStore } from "@huddle01/huddle01-client/store";
import React, { useEffect, useRef } from "react";

const MeVideoElem = () => {
  const stream = useHuddleStore((state) => state.stream);
  const isCamPaused = useHuddleStore((state) => state.isCamPaused);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
    // console.log({ stream });
  }, [stream]);
  return (
    <>
      <video
        className="rounded-2xl border-2 p-[5px] w-full"
        ref={videoRef}
        autoPlay
        muted
        playsInline
      ></video>
    </>
  );
};

export default MeVideoElem;
