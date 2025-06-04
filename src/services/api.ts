import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

export interface WaitlistData {
  name: string;
  cpf: string;
  cnpj: string;
  email: string;
  phone: string;
}

export const submitWaitlist = async (data: WaitlistData) => {
  try {
    const response = await api.post('/waitlist', data);
    
    return { success: true, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Erro ao processar solicitação'
      };
    }
    return { success: false, error: 'Erro desconhecido' };
  }
};

export default api;
