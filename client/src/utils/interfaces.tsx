export interface Option {
  count: number;
  value: string;
  id: string;
}

export interface PollData {
  question: string;
  options: Option[];
  adminId: string;
  userId: string;
  shortUrl: string;
}
