import {  gql } from 'apollo-server';

export const typeDef = gql`
    type DeleteResponse {
        status: String!,
        message: String!,
    }
`;

export const resolvers = {
};