import {  gql } from 'apollo-server';

export const typeDef = gql`
    type IntervalRule {
        start_time: String!,
        end_time: String!,
    }
`;

export const resolvers = {
};