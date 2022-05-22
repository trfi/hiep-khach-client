import { LoginPayload } from '@/models'
import axiosClient from './axios-client'

export const authApi = {
	login(payload: any) {
		return axiosClient.post('/auth/login', payload)
	},

	register(payload: any) {
		return axiosClient.post('/auth/register', payload)
	},

	logout() {
		return axiosClient.post('/auth/logout')
	},

	getProfile() {
		return axiosClient.get('/auth')
	},
}
