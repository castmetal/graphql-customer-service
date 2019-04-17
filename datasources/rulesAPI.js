import { RESTDataSource } from 'apollo-datasource-rest';
require('dotenv').config();

class rulesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.RULES_URL;
    this.basePath = 'rules';
  }

  willSendRequest(request) {
    //request.headers.set('Authorization', this.context.token);
  }

  async getRules(type, rule_name, start_time, end_time) {
    const args = {};
    if (type) {
      args['type'] = type;
    }
    if (rule_name) {
      args['rule_name'] = rule_name;
    }
    if (start_time) {
      args['start_time'] = start_time;
    }
    if (end_time) {
      args['end_time'] = end_time;
    }
    const result = await this.get(`${this.basePath}`, args);
    
    return result.data.rules;
  }

  async createRule(input) {
    const data = await this.post(`${this.basePath}`, input);
    
    return data.data.rule;
  }

  async deleteRule(id) {
    const data = await this.delete(`${this.basePath}/${id}`);
    
    return data.message;
  }
};

export default rulesAPI;