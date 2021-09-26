interface Option{
    value: string;// Option
    ID: string;// Unique Number to Identify each ques
    count: Number;// Votes received by Option
}

export interface dataReceived{
    Question: string; // Question of poll
    opt: Array<Option> // Array of Options
    userID: string; //unique ID to Identify User
    adminUnique: string,
    adminID?: string
};

export interface paramData{
    uniqueID: string; //send By User
    adminID: string; //send by Admin
}

export interface voteData{
    uniqueID: string;//ID to identify Poll in database
    ID: string;// Option ID for voted option
}

