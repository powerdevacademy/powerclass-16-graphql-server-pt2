import { gql } from 'apollo-server-express';

export default gql`
    type Order {
        orderNumber: ID!
        orderDate: String!
        requiredDate: String!
        shippedDate: String
        status: String!
        comments: String
        customerNumber: Int!
        customer: Customer!
        #orderDetails: [OrderDetail]
    }

    type Query {
        orders: [Order]
        order(id: ID!): Order
    }

    input OrderInput { 
        orderDate: String!
        requiredDate: String!
        shippedDate: String
        status: String!
        comments: String
        customerNumber: Int!
    }

    type Mutation {
        updateOrderStatus(id: ID!, status: String!): Order!
        # createOrder(order: OrderInput!): Order!
    }
`;