import testResolver from './testResolver';
import customerResolver from './customerResolver';
import orderResolver from './orderResolver';
import authResolver from './authResolver';

const resolvers = [
    testResolver,
    customerResolver,
    orderResolver,
    authResolver
];

export default resolvers;