const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema")
const colors = require("colors");
const  connectdb  = require("./config/db");
const cors = require("cors");

require("dotenv").config();



const port = process.env.PORT || 5000;
const app = express();
connectdb();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:process.env.NODE_ENV === "development"

}))

//connect to the database













app.listen(port, console.log(`server running on port ${port} `)
)

