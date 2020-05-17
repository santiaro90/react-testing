export type ApiResponse<T> = {
  data: T;
};

export interface ApiClient {
  get<T>(url: string): Promise<ApiResponse<T>>;
}
