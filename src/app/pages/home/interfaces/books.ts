export interface BooksResponse {
  numFound: number;
  page: number;
  reading_log_entries: Book[];
}

export interface Book {
  logged_date: string;
  logged_edition: string;
  work: Work;
}

export interface Work {
  author_keys: string[];
  author_names: string[];
  cover_edition_key: string;
  cover_id: string;
  edition_key: string[];
  first_publish_year: string;
  title: string;
}
