import React, { useEffect, useRef, useState } from "react";
import { Header } from "./ui/Header";
import { Reset, RotateLeft, RotateRight, ZoomIn, ZoomOut } from "./icons/icons";
import { ButtonProps } from "./ui/Button";
import { useCropper, useScreenshot } from "../hooks/hooks";

const Editor = () => {
  const imageRef = useRef<HTMLImageElement>(null!);
  const [screenshot] = useScreenshot();
  const {
    initializeCropper,
    zoomIn,
    zoomOut,
    rotateLeft,
    rotateRight,
    reset,
    handleDownload
  } = useCropper(imageRef);

  const CONTENT = {
    logoUrl: 'icons/icon16.png',
    title: 'ClipNShot | Editor',
    buttons: [
      {
        key: 'zoom-in',
        icon: <ZoomIn />,
        noClick: zoomIn,
        variant: "ghost",
      },
      {
        key: 'zoom-out',
        icon: <ZoomOut />,
        noClick: zoomOut,
        variant: "ghost",
      },
      {
        key: 'rotate-left',
        icon: <RotateLeft />,
        noClick: rotateLeft,
        variant: "ghost",
      },
      {
        key: 'rotate-right',
        icon: <RotateRight />,
        noClick: rotateRight,
        variant: "ghost",
      },
      {
        key: 'reset',
        icon: <Reset />,
        noClick: reset,
        variant: "ghost",
      },
      {
        key: 'download',
        title: 'Download',
        noClick: handleDownload,
      },
    ] as ButtonProps[],
  }

  return (
    <div className="container mx-auto p-5 flex flex-col items-center gap-4">
      <Header title={CONTENT.title} logoUrl={CONTENT.logoUrl} buttons={CONTENT.buttons} />
      {screenshot && (
          <img
            ref={imageRef}
            src={screenshot}
            alt="Screenshot"
            onLoad={initializeCropper}
            className="max-h-[64vh] object-cover"
          />
        )}
    </div>
  );
};

export { Editor }