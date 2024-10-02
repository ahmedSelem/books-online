export interface BookDetailsRespose {
  entries: Entries[];
  links: Links;
  size: number;
}

export interface Entries {
  publish_date: string;
  full_title: string;
  title: string;
  publishers: string[];
  number_of_pages: number;
  covers: number[];
  description: { value: string };
}

export interface Links {
  self: string;
  work: string;
}
