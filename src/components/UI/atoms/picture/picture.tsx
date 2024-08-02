import React, {FC} from 'react';
import {PictureProps} from "./picture.interfaces";

const Picture = (
  {
    dataSrc,
    sources,
    className,
    width,
    height,
    alt,
  }: PictureProps
): React.JSX.Element => {
  const getImageType = (srcset: string) => {
    const parts = srcset.split('.');
    return parts[parts.length - 1];
  };

  return (
    <picture
      className={`picture ${className ? className + '__picture' : ''}`}
    >
      {dataSrc && sources && sources.map((source, index) => {
        if (source.dataSrcset) {
          const imageType = getImageType(source.dataSrcset);

          return (
            <source
              key={index}
              srcSet={source.dataSrcset}
              type={imageType === 'webp' ? 'image/webp' : 'image/jpeg'}
              media={source.media || ''}
            />
          );
        }

        return null;
      })}

      {dataSrc && (
        <img
          className={`picture__img ${className ? className + '__image' : ''}`}
          src={dataSrc}
          width={width || '350'}
          height={height || '525'}
          alt={alt || ''}
        />
      )}
    </picture>
  );
};

export default Picture;
