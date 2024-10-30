import apiClient from '../lib/api-client';

class ContentService {
  endpoint = '/api';

  getContent = async () => {
    return apiClient(`${this.endpoint}/?type=all-meat&paras=4`);
  };
}

export default new ContentService();
