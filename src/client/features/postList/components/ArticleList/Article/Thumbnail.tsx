import type { ArticleMetaDataProps } from "../../../types";

const Thumbnail = ({
  thumbnail,
  thumbnail_alt,
}: Pick<ArticleMetaDataProps, "thumbnail" | "thumbnail_alt">) => {
  return <img src={thumbnail} alt={thumbnail_alt} />;
};

export default Thumbnail;
