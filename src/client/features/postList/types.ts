export interface ArticleMetaDataProps {
  idx: number;
  slug: string;
  thumbnail: string;
  thumbnail_alt: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  views: number;
  created_at: string;
}

export interface CategoryProps {
  idx: number;
  name: string;
}
