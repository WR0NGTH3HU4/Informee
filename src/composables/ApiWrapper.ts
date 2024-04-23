import axios from "axios";

export interface ApiResponse<T> {
    data: T;
    type: 'success' | 'error';
    status: number;
}

export class ApiWrapper {
    private readonly BACKEND_URL = "http://127.0.0.1:3000/";

    public async get<T = any>(route: string, data: any): Promise<ApiResponse<T>> {
        return await this.request<T>('GET', route, data);
    }

    public async post<T = any>(route: string, data: any): Promise<ApiResponse<T>> {
        return await this.request<T>('POST', route, data);
    }

    public async patch<T = any>(route: string, data: any): Promise<ApiResponse<T>> {
        return await this.request<T>('PATCH', route, data);
    }

    public async put<T = any>(route: string, data: any): Promise<ApiResponse<T>> {
        return await this.request<T>('PUT', route, data);
    }

    public async delete<T = any>(route: string, data: any): Promise<ApiResponse<T>> {
        return await this.request<T>('DELETE', route, data);
    }

    private async request<T = any>(method: string, route: string, data: any): Promise<ApiResponse<T>> {
        const res = await axios.request({
            method,
            url: route,
            baseURL: this.BACKEND_URL,
            data,
        })

        const resData: ApiResponse<T> = res.data;
        return resData;
    }
}