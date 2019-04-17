import {  gql } from 'apollo-server';

export const typeDef = gql`
    type IntervalSchedule {
        start: String!,
        end: String!,
    }
`;

export const resolvers = {
};