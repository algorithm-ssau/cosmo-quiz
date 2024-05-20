import http from './AxiosService'

class TopicService{
	async getAll() {
		return http.get('/api/topics')
	}

	async getOne(id) {
		return http.get(`/api/topics/${id}`)
	}
}

export default new TopicService()