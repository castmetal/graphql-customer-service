import {  gql } from 'apollo-server';

export const typeDef = gql`
    type AvailableSchedule {
        day: String!
        intervals: [IntervalSchedule]
    }
`;

export const resolvers = {
};