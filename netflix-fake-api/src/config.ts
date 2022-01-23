// const mongoClient = require("mongodb").MongoClient;
// mongoClient.connet("mongodb://localhost:27017",
//                     {useUnifiedTopology: true},
//                     (error, connection) => {
//                         if(error) return console.log(error);

//                         global.connection = connection.db()
//                     })


export default {
    MONGO_URI: "mongodb://localhost:27017",
    PORT: 5000,
    TOKEN_SECRET: 'secret-key'
}