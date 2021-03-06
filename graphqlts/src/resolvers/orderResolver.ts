import { Order } from '../entities/Order';
import { Customer } from '../entities/Customer';
import { ApolloError } from 'apollo-server-express';
import { getRepository } from 'typeorm';

const orderResolver = {
    Order: {
        customer: ({customerNumber}: Order) => {
            try {
                return getRepository(Customer).findOne(customerNumber);
            } catch (error) {
                throw new ApolloError(error);
            }
        }
    },

    Query: {
        orders: () => {
            //a consulta dos customers no banco e devolver um array
            try { 
                return getRepository(Order).find();
            } catch (e) {
                throw new ApolloError(e);
            }           
        },
        order: (_:any, {id}:any) => {
                try {
                    return getRepository(Order).findOne(id);
                } catch (e) {
                    throw new ApolloError(e);
                }
        }
    },

    Mutation: {
        updateOrderStatus: async (_: any, {id, status}: any, {user}: any) => {
            
            if (!user) {
                throw new ApolloError("Usuário não autorizado");
            }

            try {
                const order = await getRepository(Order).findOne(id);
                if(order) {
                    order.status = status;
                    order.shippedDate = status === "Shipped" ? "2020-09-09" : undefined
                    return getRepository(Order).save(order);
                }
            } catch (error) {
                throw new ApolloError(error);
            }
        }
    }
}

export default orderResolver;