import {  gql } from 'apollo-server';

export const input = gql`
    input RuleInput {
        type: String!
        rule_name: String!
        intervals: [IntervalRuleInput!]
        specific_day: String
        week_days: [String]
    }
`;