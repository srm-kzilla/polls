export interface Option {
  count: number;
  value: string;
  id: string;
}

export interface DataType {
  question: string;
  options: Option[];
  adminId: string;
  userId: string;
}
