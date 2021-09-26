import database from "../shared/database";

require('dotenv').config();



export default {

  port: parseInt(process.env.PORT) || 5000,

  //CORS FOR SOCKET INTIALIZATION
  corsParms: {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
   }
  },

  //MONGODB URI
  databaseURL: process.env.MONGO_URL,

};
