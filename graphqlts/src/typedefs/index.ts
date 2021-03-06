import { mergeTypeDefs } from 'graphql-tools';

import test from './test';
import customer from './customer';
import order from './order';
import auth from './auth';

export default mergeTypeDefs([
    test,
    customer,
    order,
    auth
])