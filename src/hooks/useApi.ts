import { api } from "../services/api";

export const useApi = () =>
(
  {
    login: async (email: string, password: string) => {
      const response = await api.post('/login', { email, password })
      return response.data
    },
    register: async (username: string, password: string) => {
      const response = await api.post('/register', { username, password })
      return response.data;
    },
    authentication: async (token: string) => {
      api.defaults.headers.Authorization = `Bearer ${token}`
    },
    vehicles: async () => {
      const response = await api.get('/vehicles')
      return response.data
    }
  }
)
