export interface Option {
  count: number;
  value: string;
  id: string;
}

export interface DataType {
  Question: string;
  opt: Option[];
  adminUnique: string;
  userID: string;
}
