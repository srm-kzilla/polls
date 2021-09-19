
type Option={
     data: {
         val: string;// Option
         num: Number;// Unique Number to Identify each ques
         placeholder: string;
     };
     count: Number;// Votes received by Option
}

export type dataReceived = {
    Question: string; // Question of poll
    optData: Array<Option> // Array of Options
   uniqueID: string; //unique ID to Identify User
};

export type paramData={
    uniqueID: string; //send By User
    adminID: string; //send by Admin
}

export type voteData={
    uniqueID: string;//ID to identify Poll in database
    ID: string;// Option ID for voted option
}

