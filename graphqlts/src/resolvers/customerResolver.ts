import { Customer } from '../entities/Customer';
import { Order } from '../entities/Order';
import { ApolloError } from 'apollo-server-express';
import { getRepository } from 'typeorm';

const customerResolver = {
    Customer: {
        orders: (parent: Customer) => {
            try {
                return getRepository(Order).
                        createQueryBuilder().
                        where("customerNumber = :customerNumber", {customerNumber: parent.customerNumber}).
                        getMany();
            } catch (e) {
                throw new ApolloError(e);
            }
        },
    },
    
    Query: {
        customers: (_:any, {pageSize = 10, pageNumber = 1, orderBy = "customerName", orderDir = "ASC"}: any) => {
            try { 
                return getRepository(Customer)
                    .createQueryBuilder()
                    .limit(pageSize)
                    .offset((pageNumber - 1) * pageSize)
                    .orderBy(orderBy, orderDir)
                    .getMany();
            } catch (e) {
                throw new ApolloError(e);
            }           
        },
        customer: (_:any, {id}:any) => {
                try {
                    return getRepository(Customer).findOne(id);
                } catch (e) {
                    throw new ApolloError(e);
                }
        }
    }
}

export default customerResolver;