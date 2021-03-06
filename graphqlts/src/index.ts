import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';

import typeDefs from './typedefs';
import resolvers from './resolvers';

const app = express();

app.use(express.json());

export const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req, res}) => {
        const token = req.headers["authorization"]?.split(" ")[1];

        if (token !== "YfasVBtUQ4gj82yzJ4Vn7rxWZ3NESPp4")
            return {};

        return {
            user: {name: 'Daniel Costa', username: "daniel"},
            token
        }
    }
});

server.applyMiddleware({ app });

createConnection();

app.get('/', (req, res) => {
    res.send("Por favor user o endpoint /graphql");
})


app.listen(4000, () => {
    console.log("Power GraphQL server rodando!");
})
