import {  gql } from 'apollo-server';

export const typeDef = gql`
    input IntervalRuleInput {
        start_time: String!,
        end_time: String!,
    }
`;

export const resolvers = {
};