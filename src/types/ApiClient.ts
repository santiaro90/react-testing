export type ApiResponse<T> = {
  data: T | null;
};

export interface ApiClient {
  get<T>(url: string): Promise<ApiResponse<T>>;
}
