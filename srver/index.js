import express from "express";
import dotev from "dotenv";
import "cors";
import "colors";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";
import { connectDB } from "./config/db.js";
import cors from 'cors'
dotev.config();
const PORT = process.env.PORT | 5000;
const app = express();
connectDB()
app.use(cors())
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql : process.env.NODE_ENV==='development',
}));

app.listen(PORT, () => {
    
  console.log(`Thse server is lising at ${PORT}`);
});
