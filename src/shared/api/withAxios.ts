import axios, { AxiosInstance } from "axios";

import { ApiClient, ApiResponse } from "types/ApiClient";

class Api implements ApiClient {
  private client: AxiosInstance;

  constructor(baseUrl: string) {
    this.client = axios.create({ baseURL: baseUrl });
  }

  async get<T>(url: string): Promise<ApiResponse<T>> {
    const response = await this.client.get<T>(url);

    return { data: response.data };
  }
}

export const api = new Api(process.env.REACT_APP_API_URL);
