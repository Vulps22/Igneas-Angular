// response.interface.ts

export interface ApiResponse {
    response: 'success' | 'error';
    data: any;
    code: number;
  }