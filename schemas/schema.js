import { merge } from 'lodash';
import { gql } from 'apollo-server';

import { typeDef as Rule } from './models/Rule.js';
import { typeDef as IntervalRule } from './models/IntervalRule.js';
import { typeDef as AvailableSchedule } from './models/AvailableSchedule';
import { typeDef as IntervalSchedule } from './models/IntervalSchedule';
import { typeDef as DeleteResponse } from './models/DeleteResponse';

const Query = gql`
  type Query {
    getRules(type: String, rule_name: String, start_time: String, end_time: String): [Rule]
    getAvailableSchedules(start_date: String!, end_date: String!): [AvailableSchedule]
  }
`;

const query_resolvers = {
  Query: { 
    getRules: (root, { type, rule_name, start_time, end_time }, { dataSources }) =>
      dataSources.rulesAPI.getRules(type, rule_name, start_time, end_time),
    getAvailableSchedules: (root, { start_date, end_date }, { dataSources }) => 
      dataSources.schedulesAPI.getAvailableSchedules(start_date, end_date)
  }
};

import { input as RuleInput } from './inputs/RuleInput.js';
import { typeDef as IntervalRuleInput } from './models/IntervalRuleInput.js';

const Mutation = gql`
  type Mutation {
    createRule(input: RuleInput!): Rule,
    deleteRule(id: String!): DeleteResponse
  }
`;

const mutation_resolvers = {
  Mutation: {
    createRule: (root, { input }, { dataSources }) => dataSources.rulesAPI.createRule(input),
    deleteRule: (root, { id }, { dataSources }) => dataSources.rulesAPI.deleteRule(id),
  }
};

export const typeDefs = [ 
  Query, Mutation, Rule, IntervalRule, AvailableSchedule, IntervalSchedule, 
  DeleteResponse, RuleInput, IntervalRuleInput
];
export const resolvers = merge( query_resolvers, mutation_resolvers );