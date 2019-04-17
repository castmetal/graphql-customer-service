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

  async signIn(identification, password) {
    const data = await this.post(`${this.basePath}/signin`, {
      identification, 
      password
    });
    return data.data.token;
  }

  async getRules(type, rule_name, start_time, end_time) {
    const result = await this.get(`${this.basePath}`, {
      type, rule_name, start_time, end_time
    });
    
    return result.data.users;
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