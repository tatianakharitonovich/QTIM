export interface HeaderLinks {
  path: string;
  title: string;
}

export interface InfoData {
  title: string;
  tel?: string;
  email?: string;
  address?: string;
  loco?: boolean;
}

export interface IPost {
  id: string;
  createdAt: Date;
  title: string;
  preview: string;
  image: string;
  description: string;
}
