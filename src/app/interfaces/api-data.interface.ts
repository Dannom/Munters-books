import { Book } from "./book.interface";

export interface BooksData {
  kind: string;
  items: Book[];
  totalItems: number;
}
