import axios, { AxiosInstance } from 'axios';

export const http: AxiosInstance = axios.create({
	baseURL: process.env.VITE_BASE_URL ?? '',
	headers: {
		'Access-Control-Allow-Origin': '*',
	},
	timeout: 2000,
});
