interface Option {
  value: string; // Option
  id: string; // Unique Number to Identify each ques
  count: Number; // Votes received by Option
}

export interface DataReceived {
  question: string; // Question of poll
  options: Array<Option>; // Array of Options
  userId: string; //unique ID to Identify User
  adminId: string;
}

export interface ParamData {
  userId?: string; //send By User
  adminId?: string; //send by Admin
}

export interface VoteData {
  userId: string; //ID to identify Poll in database
  id: string; // Option ID for voted option
}

export interface urlShort {
  longUrl: string; //URL that is to be shortened.
  adminId: string;
}
