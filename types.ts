export interface Post {
  title: string;
  slug: string;
  excerpt: string;
  createdAt: string;
  updatedAt?: string;
  lead?: string;
  tags?: string[];
}
