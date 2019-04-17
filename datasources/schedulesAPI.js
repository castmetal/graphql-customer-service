import { RESTDataSource } from 'apollo-datasource-rest';
require('dotenv').config();

class schedulesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.SCHEDULES_URL;
    this.basePath = 'available-schedules';
  }

  willSendRequest(request) {
    //request.headers.set('Authorization', this.context.token);
  }

  async getSchedules(start_date, end_date) {
    const result = await this.get(`${basePath}`, {
      start_date, end_date
    });
    
    return result;
  }
};

export default schedulesAPI;