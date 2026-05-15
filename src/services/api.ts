import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const coursesApi = {
  getTrending: async () => {
    try {
      const response = await api.get('/courses/trending');
      return response.data;
    } catch (error) {
      console.error('Error fetching trending courses:', error);
      return [];
    }
  },
  getAll: async (params?: { level?: string; category?: string; sort?: string; search?: string }) => {
    try {
      const response = await api.get('/courses', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching courses:', error);
      return [];
    }
  },
};

export default api;
