export interface Book {
  id: string;
  volumeInfo: BookInfo
}

export interface BookInfo {
  title: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  categories?: string[];
  averageRating?: number;
  ratingsCount?: number;
  imageLinks?: {
    smallThumbnail: string;
    thumbnail: string;
  };
  previewLink?: string;
  infoLink?: string;
};
