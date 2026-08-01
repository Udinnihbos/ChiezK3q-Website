export interface FileData {
  id: string;
  title: string;
  description: string;
  slug: string;
  shortcode: string;
  fileName: string;
  fileUrl: string;
  fileSize: string;
  category: string;
  tags: string[];
  thumbnail?: string | null;
  youtubeLink?: string | null;
  downloadCount: number;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}
