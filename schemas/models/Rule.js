import {  gql } from 'apollo-server';

export const typeDef = gql`
    type Rule {
        id: ID!
        type: String!
        intervals: [IntervalRule!]
        week_days: [String]
        rule_name: String!
        specific_day: String
    }
`;

export const resolvers = {
};