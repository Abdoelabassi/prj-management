const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema")
const colors = require("colors");
const  connectdb  = require("./config/db");


require("dotenv").config();



const port = process.env.PORT || 5000;
const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:process.env.NODE_ENV === "development"

}))

//connect to the database
connectdb();













app.listen(port, console.log(`server running on port ${port} `)
)

