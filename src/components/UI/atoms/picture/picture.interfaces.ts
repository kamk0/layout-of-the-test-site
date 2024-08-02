export interface PictureSource {
  dataSrcset: string;
  media?: string;
}

export interface PictureData {
  dataSrc: string;
  sources?: PictureSource[];
  width?: number;
  height?: number;
  alt?: string;
}

export interface PictureProps extends PictureData {
  className?: string;
}
