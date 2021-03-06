import {gql} from 'apollo-server-express';

export default gql`
    type Token {
        token: String!
    }

    type Mutation {
        login(username: String!, password: String!): Token
    }
`;