import { useState } from "react";
import Image from "next/image";

export default function FadeInImage({ ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { className, src, alt, priority, layout, objectFit, width, height } =
    props;

  function onLoadingComplete() {
    setIsLoaded(true);
  }

  return (
    <Image
      className={`fadein-image ${isLoaded ? "" : "opacity-0"} ${className}`}
      onLoadingComplete={onLoadingComplete}
      alt={alt || ""}
      src={src}
      priority={priority}
      layout={layout}
      objectFit={objectFit}
      width={width}
      height={height}
    />
  );
}
