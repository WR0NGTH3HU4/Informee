import axios from "axios";

export interface ApiResponse<T> {
    data: T;
    type: 'success' | 'error';
    status: number;
}

export class ApiWrapper {
    private static readonly BACKEND_URL = "http://127.0.0.1:3000/";

    public static async get<T = any>(route: string, data: any): Promise<ApiResponse<T>> {
        return await this.request<T>('GET', route, data);
    }

    public static async post<T = any>(route: string, data: any): Promise<ApiResponse<T>> {
        return await this.request<T>('POST', route, data);
    }

    public static async patch<T = any>(route: string, data: any): Promise<ApiResponse<T>> {
        return await this.request<T>('PATCH', route, data);
    }

    public static async put<T = any>(route: string, data: any): Promise<ApiResponse<T>> {
        return await this.request<T>('PUT', route, data);
    }

    public static async delete<T = any>(route: string, data: any): Promise<ApiResponse<T>> {
        return await this.request<T>('DELETE', route, data);
    }

    private static async request<T = any>(method: string, route: string, data: any): Promise<ApiResponse<T>> {
        const res = await axios.request({
            method,
            url: route,
            baseURL: ApiWrapper.BACKEND_URL,
            data,
        })

        const resData: ApiResponse<T> = res.data;
        return resData;
    }
}