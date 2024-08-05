import React from 'react';
import {PictureProps} from './picture.interfaces';
import classNames from "classnames";

const Picture = (
  {
    dataSrc,
    sources,
    className,
    width,
    height,
    alt,
    gradient,
  }: PictureProps): React.JSX.Element => {
  const getImageType = (srcset: string): string | undefined => {
    const parts = srcset.split('.');

    return parts.at(-1);
  };

  const gradientClass = gradient ? 'picture_gradient' : '';

  return (
    <picture className={classNames('picture', {[`${className}__picture`]: className}, gradientClass)}>
      {sources &&
        sources.map((source, index) => {
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

      <img
        className={`picture__img ${className ? className + '__image' : ''}`}
        src={dataSrc}
        width={width || '350'}
        height={height || '525'}
        alt={alt || ''}
      />
    </picture>
  );
};

export default Picture;
