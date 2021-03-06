import { AuthenticationError } from 'apollo-server-express';

const authResolver = {
    Mutation: {
        login: (_:any, {username, password}: any) => {
            if(username === 'daniel' && password === 'powerdev') {
                return { token: "YfasVBtUQ4gj82yzJ4Vn7rxWZ3NESPp4" };
            } else {
                throw new AuthenticationError('Credenciais inválidas');
            }
        }
    }
};

export default authResolver;