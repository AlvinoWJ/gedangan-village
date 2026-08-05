export interface Berita {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  views: number;
  coverImage: {
    src: string;
    alt: string;
  };
}
