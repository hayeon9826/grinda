export interface Notice {
  id: string;
  title?: string;
  body?: string;
  viewCount: number;
  createdAt: string;
}

export interface Faq {
  id: string;
  question?: string;
  answer?: string;
  category?: string;
  createdAt: string;
}
