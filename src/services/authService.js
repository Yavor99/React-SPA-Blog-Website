import * as request from './requester';

const baseUrl = 'http://localhost:3030/users';

export const login = (loginData, token) => request.post(`${baseUrl}/login`, loginData, token);

export const register = (data, token) => request.post(`${baseUrl}/register`, data, token);

export const logout = (token) => request.get(`${baseUrl}/logout`, token);
