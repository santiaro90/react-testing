import { ApiClient, ApiResponse } from "types/ApiClient";

class Api implements ApiClient {
  constructor(private baseUrl: string) {}

  async get<T>(url: string): Promise<ApiResponse<T>> {
    const fullUrl = `${this.baseUrl}${url}`;

    const response = await fetch(fullUrl);
    const data = await response.json();

    return { data };
  }
}

export const api = new Api(process.env.REACT_APP_API_URL);
